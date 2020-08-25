import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            This is the Header
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            This is the Video Player
            <div className="videoPlayer">
              VIdeo Plays here
            </div>
            <div className="search">
              Search bar
            </div>
          </div>
          <div className="col-md-4 col-md-offset-4"> 
            This is the Twitter Feeds
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            This is the rocket Launch list
              <div>Launch Data</div>
              <div>Launch Data</div>
              <div>Launch Data</div>
              <div>Launch Data</div>
              <div>Launch Data</div>
          </div>
          <div className="col-md-8">
            This is the ISS Coordinates
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
