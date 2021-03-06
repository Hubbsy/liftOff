import React from 'react';


const VideoPlayer = (props) => {
  console.log(props.video.id) 
  if (!props.video.id) {
    return (
      <div className="videoPlayer">
          <div className="embed-responsive embed-responsive-16by9">
          <iframe src={`https://www.youtube.com/embed/DDU-rZs-Ic4`} frameborder="0"  allowFullScreen></iframe>
          </div>
      </div>
    ) 
  } else return (
      <div className="videoPlayer">
          <div className="embed-responsive embed-responsive-16by9">
          <iframe src={`https://www.youtube.com/embed/${props.video.id.videoId}`} frameborder="0"  allowFullScreen></iframe>
          </div>
      </div>
    )
}





export default VideoPlayer;