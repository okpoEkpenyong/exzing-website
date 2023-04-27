import React, { useRef } from "react";
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button, CardGroup, Carousel, Container, Nav } from "react-bootstrap";
import App from "./slides/App";
import styles from "../App.module.css";

function Product() {
  return (
    <>
      <Container fluid className={styles.container}>
        <h2
          style={{
            paddingTop: "20%",
            paddingBottom: "10%",
            color: "goldenrod",
            marginLeft: "7%",
          }}
        >
          Our Products
        </h2>
        <Card
          style={{
            backgroundColor: "black",
            color: "white",
            margin: "7%",
            // paddingBot: "15%",
          }}
        >
          <Card.Title style={{ margin: "5%" }}>LushRide</Card.Title>
          <Card.Text style={{ margin: "10%", fontSize: 30 }}>
            Our flagship product, LUSHRIDE, is a car-hailing service that raises
            e-riders consciousness on their carbon footprint (COe) during
            driving sessions. We're currently leveraging the XRPL robust chain
            to create NFT tokens for users' carbon footprints, with the aim of
            giving them a choice of monetizing or analysing their data for
            global climate chaange mitigation.
          </Card.Text>
          {/* </Card.Body> */}
        </Card>
        <Card
          style={{
            backgroundColor: "black",
            color: "white",
            // top: 15,
            marginLeft: "7%",
            marginRight: "7%",
            // bottom: 52,
          }}
        >
          <Card.Title style={{ margin: "5%" }}>Product Demo</Card.Title>
          <App />
          {/* </Card.Body> */}
        </Card>
      </Container>
    </>
  );
}

export default Product;
