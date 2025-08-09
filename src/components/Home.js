// src\components\Home.js

import React from "react";
import web from "../images/backg2.jpg";
import { Shared } from "./Shared";

export const Home = () => {
  return (
    <>
    <Shared
      name="Feel the Gust of Innovation"
      subtitle="Pioneering Clean Energy, Carbon Intelligence, and AI-first Climate Tech"
      imgsrc={web}
      visit="/service"
      btname="Explore Our Solutions"
      path="home"
    />
    </>
  );
};


