import React from "react";
import { Container } from "react-bootstrap";
import styles from "../App.module.css";
import { CustomCard } from "./Card";
import { demo_media, lushRide_intro, services_image } from "../utils/data";

export function Services() {
  return (
    <Container fluid className={styles.contactForm}>
      <h2 className={styles.subtitles}>Our Services</h2>
      <CustomCard arr={services_image} media={"image"} desc={false} />;
    </Container>
  );
}

// Write a function or component that accepts an array, then display on a Card,
//  each of the array element's key/value that matches imported media types
