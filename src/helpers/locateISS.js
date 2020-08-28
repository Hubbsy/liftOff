
import axios from 'axios';

function locateISS(marker) {
  axios.get("http://api.open-notify.org/iss-now.json")
  .then((response) => {
    console.log(response.data);
    marker.setLatLng([response.data.iss_position.latitude, response.data.iss_position.longitude])
  })
  .catch((err) => {
    console.log(err);
  })
}


locateISS(marker) {
  axios.get("http://api.open-notify.org/iss-now.json")
  .then((response) => {
    console.log(response);
    return response; 
  })
  .then( (data) => {
    this.setState ({
      location: data
    })
    marker.setLatLng([this.state.location.data.iss_position.latitude, this.state.location.data.iss_position.longitude]);
    this.intervalId = setInterval(this.locateISS.bind(this), 60000)})
  .catch((err) => {
    console.log(err);
  })
}

export default locateISS; 