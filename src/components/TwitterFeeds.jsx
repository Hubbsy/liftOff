import React from 'react';
import {Col, ListGroup} from 'reactstrap';
import io from 'socket.io-client'; 
import EachTweet from './EachTweet.jsx'
import uniqid from 'uniqid';

class TwitterFeeds extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tweets: []
    }
  }



  componentDidMount() {
    var socket = io.connect('http://localhost:3000');
        socket.on('stream', (data) => {
          let newList = [data].concat(this.state.tweets.slice())
          this.setState({
            tweets: newList
          })
        });
  }



  render() {
    return (
      <Col className="twitter">
        <ListGroup>
          {this.state.tweets.map((tweet) => {
            return (
              <EachTweet key={uniqid()} tweets={tweet}/>
            )
          })}
        </ListGroup>
      </Col>
    )
  }
}




export default TwitterFeeds; 

// className="col-md-4 col-md-offset-4"