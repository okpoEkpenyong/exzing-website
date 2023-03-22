import React, { useContext, useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import { Formik, useField } from "formik";
import * as yup from "yup";
import { Card } from "react-bootstrap";
import { MessageContext } from "./context/MessageProvider";
import { getRandomPass } from "./utils/passwordGen";
import contactbg from "../src/images/contact-bg.png";
import contactbg2a from "../src/images/contact-bg2a.png";
import img6 from "../src/images/da-dev2.jpg";

function onClickButton(event) {
  event.preventDefault();
  // console.log({ event });
}

function Contact() {
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
}

export function ContactForm() {
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
    // console.log({ fullName, email, phoneNumber, message });
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    setValidated(true);
    setIsFormValid(isFormValid);
    console.log({ form, isFormValid });

    isFormValid && register(email, password, phoneNumber, fullName, message);
    // isFormValid && console.log("Yea, its valid!");
  };

  return (
    <>
      <Form
        style={{
          paddingTop: "20%",
          paddingBottom: "25%",
          marginLeft: "5%",
          marginRight: "5%",
          color: "gray",
        }}
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Text style={{ color: "gold", bottom: 90, position: "relative" }}>
          Contact Us{" "}
        </Form.Text>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Jane Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <br />
          {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
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
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            type="tel"
            placeholder="09022222222"
            // aria-describedby="inputGroupPrepend"
            pattern="[0-9]{3}[0-9]{4}[0-9]{4}"
            // defaultValue="Otto"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Message</Form.Label>
          <Form.Control
            required
            // type="text"
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

        <div className="col-12 pt-3">
          <button
            // onClick={onClickButton}
            className="btn btn-outline-warning"
            type="submit"
          >
            {isFormValid ? "Thank You" : "Submit "}
          </button>
        </div>
      </Form>
      {/* <div>
        <img
          src={contactbg2a}
          style={{ paddingLeft: "70%", bottom: 472, position: "relative" }}
          alt="..."
        />
      </div> */}
    </>
  );
}

export function _FormExample() {
  const [validated, setValidated] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const { register } = useContext(MessageContext);

  const handleSubmit = (event) => {
    // const password = getRandomPass(10);
    event.preventDefault();
    const form = event.currentTarget;
    console.log({
      fullName,
      email,
      phone,
      form: form.checkValidity(),
      // password,
    });

    // if (form.checkValidity() === true) {
    //   console.log("true");
    //   setValidated(true);
    //   register: async (email, password, phone, fullName, message)
    //   register(email, pass)
    // }

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  // useEffect(() => {
  //   if (validated) {
  //     setFormIsValid(true);
  //   }
  // }, [validated]);

  console.log({ validated });
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      style={{
        paddingTop: "20%",
        paddingBottom: "25%",
        marginLeft: "5%",
        marginRight: "5%",
        color: "gray",
      }}
    >
      <Form.Group as={Col} md="6" controlId="validationCustomFullName">
        <InputGroup hasValidation>
          <InputGroup.Text id="inputGroupPrepend">Full Name</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder=" Jane Doe"
            aria-describedby="inputGroupPrepend"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your full name.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <br />
      <Form.Group as={Col} md="6" controlId="validationCustomEmail">
        <InputGroup hasValidation>
          <InputGroup.Text id="inputGroupPrepend">{"Email"}</InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            aria-describedby="inputGroupPrepend"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <br />
      <Form.Group as={Col} md="6" controlId="validationCustomPhoneNumber">
        <InputGroup hasValidation>
          <InputGroup.Text id="inputGroupPrepend">Phone Number</InputGroup.Text>
          <Form.Control
            type="tel"
            placeholder="09022222222"
            aria-describedby="inputGroupPrepend"
            required
            pattern="[0-9]{3}[0-9]{4}[0-9]{4}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid phone number that matches the format
            +2349022222222
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <br />
      <Form.Group as={Col} md="6" controlId="validationCustomPhoneNumber">
        <InputGroup hasValidation>
          <InputGroup.Text id="inputGroupPrepend">
            Enter Message
          </InputGroup.Text>
          <Form.Control
            as="textarea"
            rows={3}
            // type="textarea"
            placeholder="I want to make enquiries"
            aria-describedby="inputGroupPrepend"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Message is required!
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <br />
      {validated ? (
        <Form.Text style={{ color: "green" }}>
          All Looks Good! We'll response soonest!{" "}
        </Form.Text>
      ) : null}
      {/* <Button className="col-12 pt-3" type="submit">
        Submit form
      </Button> */}
      <div className="col-12 pt-3">
        <button
          // onClick={onClickButton}
          className="btn btn-outline-warning"
          type="submit"
        >
          {validated ? "Thank You" : "Submit "}
        </button>
      </div>
    </Form>
  );
}
export default Contact;
