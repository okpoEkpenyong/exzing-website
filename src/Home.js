import React from "react";
import Common from "./Common";
import web from "../src/images/backg2.jpg";

function Home() {
  return (
    <>
      <Common
        name="Feel the gust of "
        imgsrc={web}
        visit="/service"
        btname="Find out more"
      />
    </>
  );
}

export default Home;
