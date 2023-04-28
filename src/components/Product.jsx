import React, { useRef } from "react";

import App, { slides } from "./slides/App";
import styles from "../App.module.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { CustomCard } from "./Card";
import { demo_media, lushRide_intro } from "../utils/data";
import ImageSlider from "./slides/ImageSlider";

export function Product() {
  const containerStyles = {
    width: "50%",
    height: "380px",
    margin: "0 auto",
    // color: "#131f38",
    // backgroundColor: "#131f38",
  };

  return (
    <Container fluid className={styles.contactForm}>
      <h2 className={styles.subtitles}>Our Products</h2>
      <CustomCard arr={lushRide_intro} media={false} desc={true} />
      <CustomCard arr={demo_media} media={"video"} desc={false} />;
      {/* <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div> */}
    </Container>
  );
}

export default Product;
