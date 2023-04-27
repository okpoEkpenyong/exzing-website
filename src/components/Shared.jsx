import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/backg2.jpg";
import styles from "../App.module.css";
import { Container } from "react-bootstrap";

export const Shared = ({ imgsrc, path, visit, btname }) => {
  return (
    <Container fluid className={styles.appHeader}>
      <img src={imgsrc} className={styles.appLogo} alt="logo" />
      {path === "home" && (
        <>
          <h1 className={styles.exzingWords}>
            <strong>
              {" "}
              Feel the gust of<strong className={styles.exzing}>
                {" "}
                EXzing
              </strong>{" "}
            </strong>
          </h1>
          <h4 className={styles.wego}>
            We go where everyone else says it's impossible to go.
          </h4>
          <div>
            <NavLink to={visit} className={styles.btnMoreInfo}>
              {btname}
            </NavLink>
          </div>
          {/* <div className={styles.btnSubmit}>
            <button className="btn btn-outline-info" type="button">
              {btname}
            </button>
            <NavLink to={visit} className={styles.btnMoreInfo}></NavLink>
          </div> */}
        </>
      )}
      {path === "partner" && (
        <div>
          <h4 className={styles.partnerWords}>
            <strong className={styles.exzing}>EXzing</strong> is proudly part of
            Microsoft for Startups Founders Hub
          </h4>
        </div>
      )}
    </Container>
  );
};
