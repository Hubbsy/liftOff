import React from "react";
import { Col, Input} from 'reactstrap';



const ViewFinder = () => {
  return (
    <Col md="8">
      <div className="videoPlayer">
        This is the ViewFinder
      </div>
      <div className="search">
        <Input
            type="search"
            name="search"
            id="searchBar"
            placeholder="Search for Launches here!"
          />
        </div>
    </Col>
  )
}




export default ViewFinder; 

