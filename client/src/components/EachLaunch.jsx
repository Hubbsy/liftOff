import React from 'react';
import { Col, Card, CardHeader, CardBody, CardTitle, CardText, Button, CardFooter, UncontrolledCollapse, CardLink } from 'reactstrap';

const EachLaunch = (props) => {
  console.log(props.launches.quicktext)
  let string = props.launches.quicktext.slice(55, -1); 
  let countdown = string.slice(string.indexOf('('), string.indexOf(')') );
  console.log(countdown)
  return (
    <Col>
      <div>
        <Card>
          <CardHeader tag="h3">{countdown.slice(1)}</CardHeader>
            <CardBody>
              <CardTitle>{props.launches.provider.name}</CardTitle>
              {/* <CardText>Today's launch is scheduled for ... weather is expected to be ...</CardText> */}
              <Button color="info" id="toggler" style={{ marginBottom: '1rem' }}>More Info</Button>
              <UncontrolledCollapse toggler="#toggler">
                <CardText>
                   {props.launches.launch_description} This Launch will Lift Off from {props.launches.pad.location.name} in {props.launches.pad.location.country}.
                </CardText>
              </UncontrolledCollapse>
            </CardBody>
          <CardFooter className="text-muted">
            <CardLink href="https://www.rocketlaunch.live/">Live Feed</CardLink>
          </CardFooter>
        </Card>
      </div>
    </Col>
  )
}




export default EachLaunch;