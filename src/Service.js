import React from "react";
import Card from "./Card";
// import img1 from "../src/images/mobile-dev.jpg";
// import img2 from "../src/images/web-dev.jpg";
// import img3 from "../src/images/db-dev.jpg";
// import img4 from "../src/images/ba-dev.jpg";
// import img5 from "../src/images/digital-mkt.jpg";
// import img6 from "../src/images/da-dev1.jpg";
// import img7 from "../src/images/train-mentor.jpg";

import img1 from "../src/images/mobile-card3.png";
import img2 from "../src/images/web2-card.png";
import img3 from "../src/images/db-card.png";
import img4 from "../src/images/ba-card4.png";
import img5 from "../src/images/digital-mkt-card.png";
import img6 from "../src/images/da-card3.png";
import img7 from "../src/images/train-mentor-card.png";

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card
                title="Mobile App Development"
                imgsrc={img1}
                text={
                  "We build apps targeting both android and ios environments"
                }
              />
              <Card
                title="Web Development"
                imgsrc={img2}
                text={"Our Web development covers both frontend and backend"}
              />
              <Card
                title="Database Management"
                imgsrc={img3}
                text={
                  "We understand the role of database management and we do it effectively"
                }
              />
              <Card
                title="Business Analytics"
                imgsrc={img4}
                text={
                  " In EXzing we address your business needs and recommend solutions."
                }
              />
              <Card
                title="Digital Marketing"
                imgsrc={img5}
                text={` Leveraging the power of the internet, email, 
                social media, adverts, and multimedia media messages, 
                we promote your brands and connect your business with potential clients `}
              />
              <Card
                title="Data Analytics"
                imgsrc={img6}
                text={
                  "Working closely with your datasets, we uncover \
                trends and insights that gives you an edge in organization decisions"
                }
              />
              <Card
                title="Training and Mentoring"
                imgsrc={img7}
                text={`We don't only train but also maintain a personalized, and 
                    friendly relationship with the students for positive results  `}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
