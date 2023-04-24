import React, { useRef } from "react";
import Card from "react-bootstrap/Card";

import VideoCard from "./VideoCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button, CardGroup, Carousel, Container, Nav } from "react-bootstrap";
import ReactPlayer from "react-player";
import App from "./components/product-slides/App";

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
        <h6
          style={{
            paddingTop: "20%",
            paddingBottom: "10%",
            color: "gold",
            alignSelf: "center",
          }}
        >
          Our Products
        </h6>
        <Card
          style={{
            backgroundColor: "black",
            color: "white",
            // paddingBot: "15%",
          }}
        >
          <Card.Title style={{ margin: "5%" }}>LushRide</Card.Title>
          <Card.Text style={{ margin: "5%" }}>
            Our flagship product, LUSHRIDE, is a car-hailing service that raises
            e-rides user's consciousness on their carbon footprint (COe) during
            driving sessions. We're currently leveraging the XRPL robust chain
            to create NFT tokens for users' carbon footprints, with the aim of
            monetizing or analysing the data for global climate chaange
            mitigation.
          </Card.Text>
          {/* </Card.Body> */}
          <Card.Footer>
            {/* <small className="text-muted">Last updated 3 mins ago</small> */}
          </Card.Footer>
        </Card>
        <Card
          style={{
            backgroundColor: "black",
            color: "white",
            top: 15,
            // bottom: 52,
          }}
        >
          <Card.Title style={{ margin: "5%" }}>Product Demo</Card.Title>
          <App />
          {/* </Card.Body> */}
          <Card.Footer>
            {/* <small className="text-muted">Last updated 3 mins ago</small> */}
          </Card.Footer>
        </Card>

        {/* <div className="ratio ratio-16x9" style={{ paddingBottom: "55%" }}> */}
        {/* <div
          className="embed-responsive embed-responsive-21by9"
          style={{ paddingBottom: "55%" }}
        >
          <iframe
            title="Embeds Page"
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/eHuHLZx5Rio"
            allowfullscreen
          ></iframe>
        </div> */}
        {/* <div style={{ paddingBottom: "55%" }}>
          <iframe
            width="30%"
            height="50%"
            title="`YC Intro`"
            src="https://www.youtube.com/embed/eHuHLZx5Rio"
            allowFullScreen
          ></iframe>
        </div> */}
      </Container>
    </>
  );
}

export default Product;
