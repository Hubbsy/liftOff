import React from 'react';
import {Col} from 'reactstrap'; 


const TwitterFeeds = () => {
  return (
    <Col className="twitter"
      m={{ size: 'auto', offset: 4 }}> 
      <a class="twitter-timeline" href="https://twitter.com/NASA?ref_src=twsrc%5Etfw">Tweets by NASA</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
    </Col>
  )
}




export default TwitterFeeds; 

// className="col-md-4 col-md-offset-4"