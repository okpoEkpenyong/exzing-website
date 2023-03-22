import React from "react";
import Common from "./Common";
import web from "../src/images/backg2.jpg";

function Home() {
  return (
    <>
      <div style={{ paddingTop: "10%", paddingBottom: "10%" }}>
        <Common
          name="Feel the gust of "
          imgsrc={web}
          visit="/service"
          btname="Find out more"
          section="home"
        />
      </div>
    </>
  );
}

export default Home;
