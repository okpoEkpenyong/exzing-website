import React from "react";
// import Card from "./Card";

import img1 from "../src/images/mobile-card3.png";
import msdark from "../src/images/ms-dark.png";
import mslight from "../src/images/ms-light.png";
import web from "../src/images/backg2.jpg";
import Common from "./Common";
import { Image } from "react-bootstrap";
import { Figure } from "react-bootstrap";
import { Card } from "react-bootstrap";

function Partners() {
  return (
    <>
      <div className="my-5">
        <h6
          className="text-start pt-sm-5"
          style={{ color: "grey", marginLeft: 45 }}
        >
          {"Our Partners "}
        </h6>
      </div>
      <div style={{ paddingBottom: "20%" }}>
        <Common
          name=""
          imgsrc={mslight}
          visit="/service"
          btname=""
          section=""
        />
      </div>
    </>
  );
}

export default Partners;
