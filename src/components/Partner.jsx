import React from "react";
import ms_dark from "../../src/images/ms-dark.png";
import styles from "../App.module.css";
import { Shared } from "./Shared";
import { Card, Container } from "react-bootstrap";
import { partners_intro } from "../utils/data";
import { DescriptionCard } from "./Card";

export const Partner = () => {
  return (
    <Container fluid className={styles.container}>
      <Card border="warning" className={styles.containerCard}>
        <h2 className={styles.subtitles}>Our Partners</h2>
        <Shared imgsrc={ms_dark} path="partner" />
        {/* <DescriptionCard desc={true} arr={partners_intro} />; */}
      </Card>
    </Container>
  );
};
