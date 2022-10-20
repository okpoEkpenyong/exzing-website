import React, { useRef } from "react";

import VideoCard from "./VideoCard";


function Product() {

  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <>
      <div className="my-5">
      <div className="row gy-4">
        <VideoCard 
        url={'https://youtu.be/eHuHLZx5Rio'}
         title={'EXzing Rider/Driver MVP Demo App ' }
        />
        <VideoCard 
        url={'ttps://youtu.be/noDQCMv1xos'}
         title={'YC W23 1 Minute Video' }
        />

      </div>
      </div>
      
    </>
  );
}

export default Product;
