const express = require('express');
require('dotenv').config();
const app = express();
const http = require('http');
const server = http.createServer(app);
const Twit = require('twit');
const io = require('socket.io').listen(server);
const path = require('path');
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 3001;



app.use(bodyParser.json());



let twitter = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });





server.listen(PORT, () => {
    console.log(`Houston we have A Connection at port ${PORT}`);
});