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
    this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount() {
    this.getYouTubeVideos('SpaceX'); 
  }

  getYouTubeVideos(query) {
    var options = {
      key: 'AIzaSyB2Oq_Zm6OZpLHYi3NiS7NNWZK0qFs1cqs',
      query: query
    };
    searchYouTube(options, (videos) => {
      this.setState({
        data: videos, 
        currentVideo: videos[0]
      });
    });
  };

  // handleClick(video) {
  //   this.setState({
  //     currentVideo: video
  //   })
  // }

  handleChange(input) {
    this.setState({
      value: input
    })
  }


  render() {
    return (
      <Col md="8">
        <VideoPlayer video={this.state.currentVideo} />
        <Search handleSearchInput={this.getYouTubeVideos} value={this.state.value} data={this.state.data} />
      </Col>
    )
  }
}




export default ViewFinder; 

