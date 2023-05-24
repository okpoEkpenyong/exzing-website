import React from "react";

import styles from "../App.module.css";
import { Card, Container } from "react-bootstrap";
import { CustomCard, DescriptionCard } from "./Card";
import { demo_media, lushRide_intro } from "../utils/data";

export function Product() {
  return (
    <Container fluid className={styles.container}>
      <Card border="warning" className={styles.containerCard}>
        <h2 className={styles.subtitles}>Our Products</h2>
        <DescriptionCard desc={true} arr={lushRide_intro} />
        <CustomCard arr={demo_media} media={"video"} desc={false} />;
      </Card>
    </Container>
  );
}

export default Product;
