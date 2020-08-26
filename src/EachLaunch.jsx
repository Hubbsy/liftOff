import React from 'react';
import { Col, ListGroupItem, ListGroupItemHeading, Button, UncontrolledCollapse, ListGroupItemText } from 'reactstrap';

const EachLaunch = () => {
  return (
    <Col>
      <div>
        <ListGroupItem className="launch">
          <ListGroupItemHeading>This will be the launch information</ListGroupItemHeading>
          <Button color="info" id="toggler" style={{ marginBottom: '1rem' }}>
            More Info
          </Button>
          <UncontrolledCollapse toggler="#toggler">
            <ListGroupItemText>
              Today's launch is scheduled for ... weather is expected to be ...
            </ListGroupItemText>
          </UncontrolledCollapse>
        </ListGroupItem>
      </div>
      <ListGroupItem className="launch">
        <ListGroupItemHeading>This will be the launch information</ListGroupItemHeading>
      </ListGroupItem>
      <ListGroupItem className="launch">
        <ListGroupItemHeading>This will be the launch information</ListGroupItemHeading>
      </ListGroupItem>
      <ListGroupItem className="launch">
        <ListGroupItemHeading>This will be the launch information</ListGroupItemHeading>
      </ListGroupItem>
      <ListGroupItem className="launch">
        <ListGroupItemHeading>This will be the launch information</ListGroupItemHeading>
      </ListGroupItem>
    </Col>
  )
}




export default EachLaunch;