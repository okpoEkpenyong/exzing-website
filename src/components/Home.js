import React from "react";
import web from "../images/backg2.jpg";
import { Shared } from "./Shared";

export const Home = () => {
  return (
    <>
      <Shared
        name="Feel the gust of "
        imgsrc={web}
        visit="/service"
        btname="Find out more"
        path="home"
      />
    </>
  );
};
