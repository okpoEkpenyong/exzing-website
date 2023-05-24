import React from "react";
import { Card, Container } from "react-bootstrap";
import styles from "../App.module.css";
import { CustomCard } from "./Card";
import { services_image } from "../utils/data";

export function Services() {
  return (
    <Container fluid className={styles.container}>
      <Card border="warning" className={styles.containerCard}>
        <h2 className={styles.subtitles}>Our Services</h2>
        <CustomCard arr={services_image} media={"image"} desc={false} />;
      </Card>
    </Container>
  );
}

// Write a function or component that accepts an array, then display on a Card,
//  each of the array element's key/value that matches imported media types
