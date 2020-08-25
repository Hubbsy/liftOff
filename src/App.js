import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md="12">
            This is the Header
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md="8">
            This is the Video Player
            <div className="videoPlayer">
              VIdeo Plays here
            </div>
            <div className="search">
              Search bar
            </div>
          </Col>
          <div className="col-md-4 col-md-offset-4"> 
            This is the Twitter Feeds
          </div>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            This is the rocket Launch list
              <div>Launch Data</div>
              <div>Launch Data</div>
              <div>Launch Data</div>
              <div>Launch Data</div>
              <div>Launch Data</div>
          </Col>
          <Col md="8">
            This is the ISS Coordinates
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
