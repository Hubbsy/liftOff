import React from 'react';
import {Col} from 'reactstrap';
import socketIOClient from 'socket.io-client'; 
import EachTweet from './EachTweet.jsx';

class TwitterFeeds extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tweets: []
    }
  }




  componentDidMount() {
    const socket = socketIOClient('http://localhost:3000/')
    socket.on('connect', () => {
      console.log("Socket Connected");
      socket.on("tweets", data => {
        console.log(data);
        let newList = [data].concat(this.state.tweets.slice(0, 15));
        this.setState({ tweets: newList });
      });
    });
    socket.on('disconnect', () => {
      socket.off("tweets")
      socket.removeAllListeners("tweets");
      console.log("Socket Disconnected");
    });
  }



  render() {
    return (
      <Col className="twitter">
        <EachTweet></EachTweet>
      </Col>
    )
  }
}




export default TwitterFeeds; 

// className="col-md-4 col-md-offset-4"