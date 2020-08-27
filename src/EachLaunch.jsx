import React from 'react';
import { Col, Card, CardHeader, CardBody, CardTitle, CardText, Button, CardFooter, UncontrolledCollapse, CardLink } from 'reactstrap';

const EachLaunch = () => {
  return (
    <Col>
      <div>
        <Card>
        <CardHeader tag="h3">Countdown</CardHeader>
        <CardBody>
          <CardTitle>United Launch Alliance</CardTitle>
          {/* <CardText>Today's launch is scheduled for ... weather is expected to be ...</CardText> */}
          <Button color="info" id="toggler" style={{ marginBottom: '1rem' }}>
            More Info
          </Button>
          <UncontrolledCollapse toggler="#toggler">
            <CardText>
              The payload consists of an Airforce Satellite and...
            </CardText>
          </UncontrolledCollapse>
        </CardBody>
          <CardFooter className="text-muted">
          <CardLink href="#">Live Feed</CardLink>
          </CardFooter>
        </Card>
      </div>
    </Col>
  )
}




export default EachLaunch;