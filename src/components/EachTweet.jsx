import React from 'react';
import { Col, Card, CardBody, CardText, CardLink, CardTitle, CardSubtitle } from 'reactstrap';


const EachTweet = (props) => {
  console.log(props)
  return (
    
      <Col>
      <Card>
        <CardBody>
          <CardTitle>{props.tweets.user}</CardTitle>
          <CardSubtitle>{props.tweets.date}</CardSubtitle>
          <CardText>{props.tweets.text}</CardText>
          <CardLink href="#">{props.tweets.user}</CardLink>
        </CardBody>
      </Card>
    
      {/* <div> */}
                {/* <div className="card-panel grey lighten-5 z-depth-3 hoverable thin">
                    <div className="row valign-wrapper">
                        <div className="col s2">
                            <img   className="circle responsive-img" />
                        </div>
                        <div className="col s10 left-align">
                            <span className="black-text"></span>
                        </div>
                        
                    </div>
                    <div className="row valign-wrapper right-align chip hoverable">
                    {new Date().toLocaleTimeString()}
                    </div>
                    <div className="row valign-wrapper right-align chip hoverable">
                        <a href={`https://twitter.com/`} target="_blank"></a>
                    </div>
                </div>

            </div> */}
      
        </Col>
  )
}





export default EachTweet; 