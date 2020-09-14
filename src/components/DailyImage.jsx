import React from 'react';
import axios from 'axios';



class DailyImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: {}
    }
  }



  componentDidMount() {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=tX85N474OA0ed4I70UeetbjdTrlPilabbX4DiMVk')
    .then(response => {
      return response.data;
    })
    .then(data => {
      this.setState({
        image: data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }


  render() {
    if (this.state.image.hdurl) {
      return (
        <a href="https://apod.nasa.gov/apod/astropix.html" target="_blank">
          <img className="jumbotron" src={this.state.image.hdurl} alt="the NASA APOD is currently being updated" /> 
        </a>  
      )
    } else {
      return (
        <a href="https://apod.nasa.gov/apod/astropix.html" target="_blank">
          <img className="jumbotron" src="https://www.teslarati.com/wp-content/uploads/2018/02/Falcon-Heavy-side-booster-landings-SpaceX-e1518547599594.jpg" alt="the NASA APOD is currently being updated" /> 
        </a>  
      )
    }
  }
}














export default DailyImage; 