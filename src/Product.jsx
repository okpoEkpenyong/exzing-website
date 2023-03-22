import React, { useRef } from "react";
import Card from "react-bootstrap/Card";

import VideoCard from "./VideoCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CardGroup, Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function Product() {
  return (
    <>
      {/* <div className="my-0">
        <h6
          className="text-start pt-sm-5"
          style={{ paddingTop: "10%", paddingBottom: "50%" }}
        >
          Our Products
        </h6>
      </div> */}
      <Container>
        <h6 style={{ paddingTop: "20%", paddingBottom: "10%", color: "gold" }}>
          Our Products
        </h6>
        <div className="ratio ratio-16x9" style={{ paddingBottom: "55%" }}>
          <iframe
            title="`YC Intro`"
            src="https://www.youtube.com/embed/eHuHLZx5Rio"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </>
  );
}

export default Product;
