import React from 'react';
import {Col, ListGroup} from 'reactstrap';
import EachLaunch from './EachLaunch';
import axios from 'axios';
import uniqid from 'uniqid';


class Launches extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      launches: []
    }
    this.getLaunches = this.getLaunches.bind(this);
  }


  componentDidMount() {
    this.getLaunches();
  }

   async getLaunches() {
    await axios.get('https://fdo.rocketlaunch.live/json/launches/next/5')
    .then(response => {
      return response.data.result;
    })
    .then(data => {
      this.setState ({
        launches: data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }


  render() {
    return (
      <Col>
        <ListGroup>
        {this.state.launches.map((launch) => {
          return (
            <EachLaunch key={uniqid()} launches={launch} />
          )
        })}  
        </ListGroup>
      </Col>
    )
  }

};




export default Launches; 