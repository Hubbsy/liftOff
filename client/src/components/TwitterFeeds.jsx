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
    var socket = io.connect('https://63c37bc8812a507f0e585b05--fabulous-otter-705d68.netlify.app/');
        socket.on('stream', (data) => {
          let newList = [...[data]];
          this.setState({
            tweets: newList.concat(this.state.tweets.slice(0,10))
          })
        });
  }



  render() {
    return (
      <Col className="twitter">
      <span id="twitter-logo"></span>
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
