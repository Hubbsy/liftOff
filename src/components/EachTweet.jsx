import React from 'react';
import { Col, Card, CardBody, CardText, CardLink, CardSubtitle, CardImg } from 'reactstrap';


const EachTweet = (props) => {
  console.log(props)
  return (
    
      <Col>
        <Card className="tweet">
          
          <CardBody>
            <CardImg id="pic"  src={props.tweets.image} alt="Card image cap"/>
            <CardLink href={`http://twitter.com/${props.tweets.url}`} target="_blank">{props.tweets.user}</CardLink>
            <CardText>{props.tweets.text}</CardText>
            <CardSubtitle> Posted at: {props.tweets.date}</CardSubtitle>
          </CardBody>
        </Card>
      </Col>
  )
}





export default EachTweet; 