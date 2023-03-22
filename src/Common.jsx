import React from "react";
import { NavLink } from "react-router-dom";

function Common({ name, imgsrc, visit, btname, section }) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  {section === "home" ? (
                    <>
                      <h1>
                        <strong className="brand-name"> {name} EXzing </strong>
                      </h1>
                      <h2 className="my-3" style={{ color: "grey" }}>
                        We go where everyone else says it's impossible to go.
                      </h2>
                    </>
                  ) : (
                    <h2 style={{ color: "grey" }}>
                      EXzing is part of Microsoft for Startups Founders Hub
                    </h2>
                  )}

                  {section === "home" && (
                    <div className="mt-3">
                      <NavLink to={visit} className="btn-get-started">
                        {btname}
                      </NavLink>
                    </div>
                  )}
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={imgsrc}
                    className={`image-fluid ${
                      section === "home" && "animated"
                    }`}
                    alt="HomeImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
