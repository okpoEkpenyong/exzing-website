import React from "react";
import ms_light from "../../src/images/ms-light.png";
import ms_dark from "../../src/images/ms-dark.png";
import styles from "../App.module.css";
import { Shared } from "./Shared";

export const Partner = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.subtitles}>Our Partners</h2>
        <Shared imgsrc={ms_dark} path="partner" />
      </div>
    </>
  );
};
