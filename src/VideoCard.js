import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import ReactPlayer from "react-player";

function VideoCard({ title, imgsrc, videosrc, text, videoRef, url }) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={imgsrc} className="card-img-top" alt="..." />
          {/* <video src={videosrc} width="520" height="240"  ref={videoRef} /> */}
          <ReactPlayer
            className="react-player"
            url={url}
            width="100%"
            height="80%"
          />
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
