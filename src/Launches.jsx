import React from 'react';
import {Col,ListGroup} from 'reactstrap';
import EachLaunch from './EachLaunch';


const Launches = () => {
  return (
    <Col>
      <ListGroup>
        <EachLaunch />
      </ListGroup>
    </Col>
  )
};




export default Launches; 