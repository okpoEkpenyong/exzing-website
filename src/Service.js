import React from "react";
// import Card from "./Card";
import img1 from "../src/images/mobile-dev.jpg";
import img2 from "../src/images/web-dev.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Card, CardGroup, Image } from "react-bootstrap";

// import img1 from "../src/images/mobile-card3.png";
// import img2 from "../src/images/web2-card.png";
import img3 from "../src/images/db-card.png";
import img4 from "../src/images/ba-card4.png";
import img5 from "../src/images/digital-mkt-card.png";
import img6 from "../src/images/da-dev2.jpg";
import img7 from "../src/images/train-mentor-card.png";

function Service() {
  return (
    <>
      <div className="my-5">
        <h6
          className="text-start pt-sm-5"
          style={{ color: "grey", marginLeft: 45 }}
        >
          {" Our Services "}
        </h6>
      </div>
      <Row xs={1} md={3} style={{ paddingTop: "10%", paddingBottom: "20%" }}>
        {[
          "Mobile App Development",
          "Web App Development",
          "Data Analytics",
        ].map((values, idx) => (
          <Col>
            <Card
              bg={"dark"}
              // bg={variant.toLowerCase()}
              key={values}
              text={"light"}
              // text={variant.toLowerCase() === "light" ? "dark" : "white"}
              // style={{ width: "18rem", height: "100%", paddingBottom: 70 }}
              className="mb-2  my-5 navbar-custom-3 my-5"
            >
              <Card.Img
                variant="top"
                src={
                  values === "Mobile App Development"
                    ? img1
                    : values === "Web App Development"
                    ? img2
                    : img6
                }
              />
              <Card.Body>
                <Card.Title>{values}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
  // return (
  //   <>
  //     {[
  //       // "Primary",
  //       // "Secondary",
  //       // "Success",
  //       // "Danger",
  //       // "Warning",
  //       // "Info",
  //       // "Light",
  //       // "Dark",

  //       "Mobile App Developement",
  //       "Web App Development",
  //       "Data Analystics",
  //     ].map((variant) => (
  //       <Row xs={1} md={3} className="g-0">
  //         <Col>
  //           <Card
  //             bg={"dark"}
  //             // bg={variant.toLowerCase()}
  //             key={variant}
  //             text={"light"}
  //             // text={variant.toLowerCase() === "light" ? "dark" : "white"}
  //             // style={{ width: "18rem" }}
  //             className="mb-2  pt-sm-5 my-5 "
  //           >
  //             <Card.Img
  //               variant="top"
  //               src={
  //                 variant === "Mobile App Developement"
  //                   ? img1
  //                   : variant === "Web App Development"
  //                   ? img2
  //                   : img6
  //               }
  //             />
  //             {/* <Card.Header>Header</Card.Header> */}
  //             <Card.Body>
  //               <Card.Title>{variant}</Card.Title>
  //               <Card.Text></Card.Text>
  //             </Card.Body>
  //           </Card>
  //         </Col>
  //       </Row>
  //     ))}
  //   </>
  // );
  // return (
  //   <>
  //     <div className="my-5">
  //       <h1 className="text-center pt-sm-5">Our Services</h1>
  //     </div>

  //     <Row xs={1} md={2} className="g-4">
  //       <Col>
  //         <Card
  //           border="warning"
  //           className="navbar-custom-2"
  //           style={{ width: "18rem" }}
  //         >
  //           <Card.Img variant="top" src={img1} />
  //           <Card.Body>
  //             <Card.Title>Mobile App Development</Card.Title>
  //             <Card.Text>
  //               We build apps targeting both android and ios environments
  //             </Card.Text>
  //           </Card.Body>
  //         </Card>
  //       </Col>
  //     </Row>

  //     {/* <Row xs={1} md={2}>
  //       <Col>
  //         <CardGroup>
  //           <Card>
  //             <Card.Body className="g-4  ratio-16x9">
  //               <Image name=" " src={img1} alt="Mobile Logo" />
  //               <Card.Title>App Demo</Card.Title>
  //               <Card.Text>MVP Demo for lush ride hailing service</Card.Text>
  //             </Card.Body>
  //           </Card>
  //           <Card>
  //             <Card.Body className="g-4  ratio-16x9">
  //               <Image name=" " src={img1} alt="Mobile Logo" />
  //               <Card.Title>App Demo</Card.Title>
  //               <Card.Text>MVP Demo for lush ride hailing service</Card.Text>
  //             </Card.Body>
  //           </Card>
  //           <Card>
  //             <Card.Body className="g-4  ratio-16x9">
  //               <Image name=" " src={img1} alt="Mobile Logo" />
  //               <Card.Title>App Demo</Card.Title>
  //               <Card.Text>MVP Demo for lush ride hailing service</Card.Text>
  //             </Card.Body>
  //           </Card>
  //           <Card>
  //             <Card.Body className="g-4  ratio-16x9">
  //               <Image name=" " src={img1} alt="Mobile Logo" />
  //               <Card.Title>App Demo</Card.Title>
  //               <Card.Text>MVP Demo for lush ride hailing service</Card.Text>
  //             </Card.Body>
  //           </Card>
  //         </CardGroup>
  //       </Col>
  //     </Row> */}

  //     {/* <div className="container-fluid mb-5">
  //       <div className="row">
  //         <div className="col-10 mx-auto">
  //           <div className="row gy-4">
  //             <Card
  //               title="Mobile App Development"
  //               imgsrc={img1}
  //               text={
  //                 "We build apps targeting both android and ios environments"
  //               }
  //             />
  //             <Card
  //               title="Web Development"
  //               imgsrc={img2}
  //               text={"Our Web development covers both frontend and backend"}
  //             />

  //             <Card
  //               title="Business Analytics"
  //               imgsrc={img4}
  //               text={
  //                 " We address your business needs and recommend solutions."
  //               }
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div> */}
  //   </>
  // );
}

export default Service;
