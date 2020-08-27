import React from 'react';
import {Col} from 'reactstrap';
import L from 'leaflet';
// import {Map, TileLayer, Marker, Popup} from 'react-leaflet';


class Station extends React.Component {

  componentDidMount() {
    this.mapMaker();
};

  // create map
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
      this.marker = L.marker([18.9688, 52.6514]).addTo(this.map);
      this.marker.bindPopup("This is the most recent position of the ISS").openPopup();
  };


  render() {
    return (
    <Col>
     <div id="map"></div>
    </Col>
    )
  }
}

// center={position} zoom={this.state.zoom}
// position={position}
// var map = L.map('map'), 
//       ft = true,
//       path = [], 
//       markers = new L.FeatureGroup();
//       map.setView([0, 0], 3);
//       map.setMaxBounds([[-85,-180.0],[85,180.0]]);
//       L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
//       attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
//       }).addTo(map);


export default Station; 