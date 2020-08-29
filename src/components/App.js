import React from 'react';
import '../App.css';
import { Container, Row} from 'reactstrap';

//Component Imports
import ViewFinder from './ViewFinder.jsx';
import TwitterFeeds from './TwitterFeeds.jsx';
import Header from './Header.jsx';
import Launches from './Launches.jsx';
import Station from './Station.jsx';


function App() {



  return (
    <div className="App">
      <Container>
        <Header />
      </Container>
      <Container>
        <Row>
          <ViewFinder />
          <TwitterFeeds />
        </Row>
      </Container>
      <Container>
        <Row>
          <Launches />
          <Station/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
