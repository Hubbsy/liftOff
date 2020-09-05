import React from 'react';
import axios from 'axios';
import {Jumbotron} from 'reactstrap';


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
    console.log(this.state)
    return (
        <img className="jumbotron" src={this.state.image.hdurl} alt="../assets/heavyTwo.jpg" /> 
    )
  }

}














export default DailyImage; 