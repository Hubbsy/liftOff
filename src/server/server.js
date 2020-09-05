const express = require('express');
require('dotenv').config();
const app = express();
const http = require('http');
const server = http.createServer(app);
const Twit = require('twit');
const io = require('socket.io').listen(server);
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 3001;



app.use(bodyParser.json());


let watchlist = ['@Space_Station, @Astro_SEAL, @Astro_Behnken, @Astro_Doug, @ISS_Astronauts, @ISS, Astronauts, @Astro_Jeanette, @ESA'];



let T = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });


  io.sockets.on('connection', function(socket) {

    let stream = T.stream('statuses/filter', { track: watchlist });

    stream.on('tweet', function(tweet) {
        io.sockets.emit('stream', {
          image: tweet.user.profile_image_url_https,
          date: new Date(tweet.created_at).toLocaleTimeString(),
          text: tweet.text, 
          user: tweet.user.screen_name,
          url: tweet.user.screen_name
        })
    });
  });



server.listen(PORT, () => {
    console.log(`Houston we have A Connection at port ${PORT}`);
});