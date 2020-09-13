import React from 'react';
import {Input} from 'reactstrap'
import searchYouTube from '../helpers/searchYouTube.js';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
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

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  keyPress(e) {
    if (e.keyCode === 13) {
      this.getYouTubeVideos(this.state.value);
    }
  }




  render() {
    return (
      <div className="search">
          <Input
              type="search"
              name="search"
              id="searchBar"
              placeholder="Search for Launches here!"
              onChange={(e) => this.handleChange(e.target.value)}
              onKeyDown={this.keyPress}
            />
          </div>
    )
  }
}






export default Search; 