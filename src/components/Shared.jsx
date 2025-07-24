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
            Microsoft for Startups Founders Hub (Now Microsoft for Startups). We are grateful for the support
            and resources provided by Microsoft, which have been instrumental in
            our journey as a startup. The availability
            of High Performance Computing (HPC) resources and GPUs have been a game-changer
            for us, enabling us to develop and deploy our AI models with greater
            efficiency and speed. This support has been crucial in our mission to
            create innovative solutions that address real-world challenges. 
            We welcome more partners as they join us to build impactful solutions for a sustainable future.
          </h4>
        </div>
      )}
    </Container>
  );
};
