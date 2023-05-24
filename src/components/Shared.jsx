import React from "react";
import styles from "../App.module.css";
import { Button, Container } from "react-bootstrap";

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
            we go where people say it's impossible to go...
          </h4>
          <div>
            <Button
              variant="outline-info"
              // className="btn btn-outline-info"
              // href={path}
              href={visit}
            >
              {" "}
              {btname}
            </Button>{" "}
          </div>
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
