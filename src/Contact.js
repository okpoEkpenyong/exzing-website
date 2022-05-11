import React from "react";
import { SocialIcon } from 'react-social-icons';

function onClickButton(event) {
  event.preventDefault();
}

function Contact() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
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
              <div style={{paddingTop:10}}>
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

export default Contact;
