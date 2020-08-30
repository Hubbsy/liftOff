
const express = require('express');
require('dotenv').config();
const http = require('http');
const socketio = require('socket.io');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors');
const app = express();


const PORT = process.env.PORT || 3001; 

//middleware
app.use(bodyParser.json());
app.use(cors);
 
//serve static files
app.use(express.static(path.join(__dirname, 'build')));


//websocket server initialization
const server = http.createServer(app);
const io = socketio(server);


require('./routes/tweets.js')(app, io);

//Heroku deployment conditional
// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, 'client/build')));
    
//   // Handle React routing, return all requests to React app
//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// }
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";rs

server.listen(PORT, () => {
  console.log(`Houston we have a Connection on ${PORT}!!`)
});