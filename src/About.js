import React from "react";
import Common from "./Common";
import web from "../src/images/backg2.jpg";

function About() {
  return (
    <>
      <Common
        name="Innovating the future with"
        imgsrc={web}
        visit="/contact"
        btname="Contact Us"
      />
    </>
  );
}

export default About;
