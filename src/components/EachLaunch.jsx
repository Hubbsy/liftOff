import React from 'react';
import { Col, Card, CardHeader, CardBody, CardTitle, CardText, Button, CardFooter, UncontrolledCollapse, CardLink } from 'reactstrap';

const EachLaunch = (props) => {
  console.log(props.launches);
  return (
    <Col>
      <div>
        <Card>
          <CardHeader tag="h3">Countdown</CardHeader>
            <CardBody>
              <CardTitle>{props.launches.provider.name}</CardTitle>
              {/* <CardText>Today's launch is scheduled for ... weather is expected to be ...</CardText> */}
              <Button color="info" id="toggler" style={{ marginBottom: '1rem' }}>More Info</Button>
              <UncontrolledCollapse toggler="#toggler">
                <CardText>
                  A SpaceX Falcon 9 rocket will launch the SAOCOM-1B mission on Friday, August 28, 2020 at 11:19 PM (UTC). This Launch will liftoff from Cape Canaveral Florida in the United States.
                </CardText>
              </UncontrolledCollapse>
            </CardBody>
          <CardFooter className="text-muted">
            <CardLink href="https://rocketlaunch.live/launch/saocom-1b">Live Feed</CardLink>
          </CardFooter>
        </Card>
      </div>
    </Col>
  )
}




export default EachLaunch;