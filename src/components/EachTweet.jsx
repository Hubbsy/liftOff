import React from 'react';
import { Col, Media, Card, CardBody, CardText, CardLink, CardTitle, CardSubtitle } from 'reactstrap';


const EachTweet = () => {
  return (
    
      <Col>
      {/* <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
        <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">Card Link</CardLink>
        </CardBody>
      </Card> */}
    
      <div>
                <div className="card-panel grey lighten-5 z-depth-3 hoverable thin">
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

            </div>
      
        </Col>
  )
}





export default EachTweet; 