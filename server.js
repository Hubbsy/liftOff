
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const http = require('http');
const app = express();

const PORT = process.env.PORT || 3001; 

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));



const server = http.createServer(app);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}


server.listen(PORT, () => {
  console.log(`Houston we have a Connection on ${PORT}!!`)
});