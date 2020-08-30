const Twitter = require('twitter');


module.exports = (app, io) => {
  let twitter = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    bearer_token: process.env.TWITTER_BEARER_TOKEN
  });

  let socketConnection; 
  // let twitterStream; 

  app.locals.searchTerm = 'NASA';
  app.locals.showRetweets = false; 

  const stream = () => {
    console.log('Resuming for ' + app.locals.searchTerm);
    twitter.stream('statuses/filter', { track: app.locals.searchTerm }, (stream) => {
        stream.on('data', (tweet) => {
            sendMessage(tweet);
        });

        stream.on('error', (error) => {
            console.log(error);
        });

        // twitterStream = stream;
    });
  }

  io.on('connection', socket => {
    socketConnection = socket; 
    stream()
    socket.on("connection", () => console.log("Client connected"));
    socket.on("disconnect", () => console.log("Client disconnected"))
  });

  /**
     * Emits data from stream.
     * @param {String} msg 
     */
    const sendMessage = (msg) => {
      if (msg.text.includes('RT')) {
          return;
      }
      socketConnection.emit("tweets", msg);
  }

}