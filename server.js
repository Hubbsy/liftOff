const express = require('express');
require('dotenv').config();
const app = express();
const http = require('http');
const server = http.createServer(app);
const Twit = require('twit');
const io = require('socket.io').listen(server);
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const axios = require('axios');

const PORT = process.env.PORT || 3001;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(cors());
app.use(helmet.frameguard({action: 'SAMEORIGIN'}));
app.use(express.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "*");
  next();
});

app.get("/api/station", (req, res) => {
  axios.get('http://api.open-notify.org/iss-now.json')
  .then(json => res.send(json.data))
  .catch(err => {
    res.redirect(err)
  })
})


let follow = ['11348282', '14091091'];//NASA twitter id's



let T = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });


  io.sockets.on('connection', function(socket) {

    let stream = T.stream('statuses/filter', { follow: follow, language: 'en' });

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


  if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
      
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

  



server.listen(PORT, () => {
    console.log(`Houston we have A Connection at port ${PORT}`);
});