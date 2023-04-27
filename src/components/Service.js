import React from "react";
import mobile_dev from "../../src/images/mobile-dev.jpg";
import web_dev from "../../src/images/web-dev.jpg";
import data_analytics from "../../src/images/da-dev2.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Card, CardGroup, Container, Image } from "react-bootstrap";
import styles from "../App.module.css";

export const Services = () => {
  return (
    <>
      <Container fluid className={styles.container}>
        <h6 className={styles.subtitles}>Our Services</h6>
        <Row xs={1} md={3} style={{ paddingTop: "10%", paddingBottom: "20%" }}>
          {[
            "Mobile App Development",
            "Web App Development",
            "Data Analytics",
          ].map((values) => (
            <Col>
              <Card
                bg={"dark"}
                // bg={variant.toLowerCase()}
                key={values}
                text={"light"}
              >
                <Card.Img
                  variant="top"
                  src={
                    values === "Mobile App Development"
                      ? mobile_dev
                      : values === "Web App Development"
                      ? web_dev
                      : data_analytics
                  }
                />
                <Card.Body>
                  <Card.Title>{values}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export function BgColorExample() {
  return (
    <>
      {["Mobile App Development", "Web App Development", "Data Analytics"].map(
        (variant) => (
          <Card
            bg={"dark"}
            key={variant}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>{variant} Card Title </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        )
      )}
    </>
  );
}
