import React from "react";
import { Col } from 'reactstrap';
import Search from './Search.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import searchYouTube from '../helpers/searchYouTube.js';

class ViewFinder extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data:[], 
      currentVideo: '', 
      value: '' 
    }
    this.getYouTubeVideos = this.getYouTubeVideos.bind(this)
  }


  componentDidMount() {
    this.getYouTubeVideos('SpaceX'); 
  }

  getYouTubeVideos(query) {
    var options = {
      key: process.env.REACT_APP_TUBE_API_KEY,
      query: query
    };
    searchYouTube(options, (videos) => {
      this.setState({
        data: videos, 
        currentVideo: videos[0]
      });
    });
  };


  render() {
    return (
      <Col md="8">
        <VideoPlayer />
        <Search />
      </Col>
    )
  }
}




export default ViewFinder; 

