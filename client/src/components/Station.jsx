import React from 'react';
import {Col} from 'reactstrap';
import L from 'leaflet';
import axios from 'axios';



class Station extends React.Component {

  constructor(props) {
    super(props) 
    this.state = ({
      location: []
    })
    this.locateISS = this.locateISS.bind(this);
    this.mapMaker = this.mapMaker.bind(this);
  }
 

  componentDidMount() {
    this.mapMaker();
  };

 

  async locateISS(marker) {
      await axios.get("/api/station")
      .then((response) => {
        console.log(response)
        return response; 
      })
      .then((data) => {
        // console.log(data)
        this.setState ({
          location: data
        })
        marker.setLatLng([this.state.location.data.iss_position.latitude, this.state.location.data.iss_position.longitude])})
      .catch((err) => {
        console.log(err);
      })
  }

  // create map and locate ISS coordinates
  mapMaker() { 
    this.map = L.map('map', {
      center: [0, 3],
      zoom: 1,
      layers: [
        L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }),
      ]
    });
    var issIcon = L.divIcon({
      className: 'iss-icon',
      iconSize: [40, 40],
       html: '<span></span>'
     });
    let marker = this.marker = L.marker([0,0], {icon:issIcon}).addTo(this.map);
    marker.bindPopup("This is the most recent position of the ISS in Low Earth Orbit").openPopup();
    setInterval(()=> this.locateISS(marker),10000);
  };


  render() {
    return (
      <Col md="6">
        <div id="map"></div>
      </Col>
    )
  }
}


export default Station; 