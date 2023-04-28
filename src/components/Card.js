import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "../App.module.css";
import {
  containerStyles,
  dotStyle,
  dotsContainerStyles,
  leftArrowStyles,
  slideStyles,
} from "../styles/common";
import { slides } from "./slides/App";

export function CustomCard({ arr, media, desc, slider }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <Row xs={1} md={3} className="g-4">
      {Array.from(arr).map((value, idx) => {
        console.log({ idx, value, media });
        return (
          <Col key={idx}>
            <Card border="light" className={styles.card}>
              {media === "image" && (
                <Card.Img variant="top" src={value?.media_name} />
              )}
              {media === "video" && (
                <div style={containerStyles}>
                  <iframe
                    width="80%"
                    height="90%"
                    title={value?.media_title}
                    src={value?.media_src}
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              <Card.Body>
                <Card.Title>{value?.media_title}</Card.Title>
              </Card.Body>
              {desc && (
                <Card.Body>
                  <Card.Text>{value?.media_desc}</Card.Text>
                </Card.Body>
              )}
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
