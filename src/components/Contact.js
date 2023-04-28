import React, { useContext, useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { MessageContext } from "../context/MessageProvider";
import { getRandomPass } from "../utils/passwordGen";
import { Card, Container, Row } from "react-bootstrap";
import styles from "../App.module.css";

function onClickButton(event) {
  event.preventDefault();
}

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    console.log({ fullName });
  }, [fullName]);

  return (
    <>
      <div className="my-5">
        <h6
          className="text-start pt-sm-5"
          style={{ color: "grey", marginLeft: 45 }}
        >
          Contact Us{" "}
        </h6>
      </div>

      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div className="form-group">
                <label for="exampleFormControlInput1">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="form-group pt-3">
                <label for="exampleFormControlInput1">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="+23479038654571"
                />
              </div>
              <div className="form-group pt-3">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="janedoe@123.com"
                />
              </div>

              <div className="form-group pt-3">
                <label for="exampleFormControlTextarea1">
                  Enter your Message Here
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="col-12 pt-3">
                <button
                  onClick={onClickButton}
                  className="btn btn-outline-primary"
                  type="submit"
                >
                  Submit form
                </button>
              </div>
              <div style={{ paddingTop: 10 }}>
                <SocialIcon
                  url="https://twitter.com/okpoEkpenyong"
                  style={{ height: 25, width: 25 }}
                />
                <SocialIcon
                  url="https://www.linkedin.com/in/okpo-ekpenyong/"
                  style={{ height: 25, width: 25 }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const { register } = useContext(MessageContext);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const password = getRandomPass(10);
    event.preventDefault();
    const isFormValid = form.checkValidity();

    setValidated(true);
    setIsFormValid(isFormValid);
    console.log({ form, isFormValid });

    isFormValid && register(email, password, phoneNumber, fullName, message);
    // isFormValid && console.log("Yea, its valid!");
  };

  return (
    <>
      <Container fluid className={styles.contactForm}>
        <Row xs={1} md={2} className="g-5">
          <Col>
            <Card border="light" className={styles.card}>
              <Card.Body>
                <Card.Title className={styles.contactUs}>Contact Us</Card.Title>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  {/* <Form.Text
                    style={{ color: "gold", bottom: 90, position: "relative" }}
                  >
                    Contact Us{" "}
                  </Form.Text> */}
                  <Form.Group as={Col} md="15" controlId="validationCustom01">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Jane Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    <br />
                  </Form.Group>
                  <Form.Group as={Col} md="15" controlId="validationCustom02">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Enter a valid email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                  </Form.Group>
                  <Form.Group as={Col} md="15" controlId="validationCustom03">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      required
                      type="tel"
                      placeholder="09022222222"
                      pattern="[0-9]{3}[0-9]{4}[0-9]{4}"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <br />
                  </Form.Group>
                  <Form.Group as={Col} md="15" controlId="validationCustom04">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      rows={3}
                      placeholder="Enter a message "
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Form.Group>

                  <br />
                  {isFormValid ? (
                    <Form.Text style={{ color: "green" }}>
                      All Looks Good! We'll response soonest!{" "}
                    </Form.Text>
                  ) : null}

                  {/* <div className="col-12 pt-4 ms-2"> */}
                  <div className={styles.btnSubmit}>
                    <button className="btn btn-outline-warning" type="submit">
                      {isFormValid ? "Thank You" : "Submit "}
                    </button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="light" className={styles.card}>
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body className={styles.contactFooter}>
                <Card.Link href="#okpo.ekpenyong@exzing.com">
                  okpo.ekpenyong@exzing.com
                </Card.Link>
                <Card.Footer>
                  <SocialIcon
                    url="https://www.linkedin.com/company/exzing/"
                    // style={{ height: 25, width: 25 }}
                  />
                </Card.Footer>
                <Card.Footer>
                  <SocialIcon url="https://twitter.com/okpoEkpenyong" />
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
