import React from "react";
import ms_dark from "../../src/images/ms-dark.png";
import styles from "../App.module.css";
import { Shared } from "./Shared";
import { Card, Container } from "react-bootstrap";

export const Partner = () => {
  return (
    <Container fluid className={styles.container}>
      <Card border="warning" className={styles.containerCard}>
        <h2 className={styles.subtitles}>Our Partners</h2>
        <Shared imgsrc={ms_dark} path="partner" />
      </Card>
    </Container>
  );
};
