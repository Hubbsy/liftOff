import React from "react";
import { Col } from 'reactstrap';
import Search from './Search.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import searchYouTube from '../helpers/searchYouTube.js';
import TUBE_API from '../helpers/youtube.config.js';
class ViewFinder extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data:[], 
      currentVideo: '', 
      value: '' 
    }
    this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }


  componentDidMount() {
    this.getYouTubeVideos('SpaceX'); 
  }

  getYouTubeVideos(query) {
    var options = {
      key: TUBE_API,
      query: query
    };
    searchYouTube(options, (videos) => {
      this.setState({
        data: videos, 
        currentVideo: videos[0]
      });
    });
  };


  handleChange(inputValue) {
    this.setState({
      value: inputValue
    })
  }

  keyPress(e) {
    if (e.keyCode === 13) {
      this.getYouTubeVideos(this.state.value)
    }
  }

  render() {
    return (
      <Col md="8">
        <VideoPlayer video={this.state.currentVideo} />
        <Search handleSearchInput={this.handleChange}     value={this.state.value} data={this.state.data}
        keyPress={this.keyPress}  
        />
      </Col>
    )
  }
}




export default ViewFinder; 

