import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Banner from "../components/Banner";

function Contact() {
  const bannerImg = [
    "https://thumbs.dreamstime.com/b/three-wooden-ball-contact-icon-against-blue-background-arranging-row-over-reflecting-floor-211477031.jpg",
    "https://maduraimart.in/images/contact-banner.jpg",
    "https://adhope.org.za/africa-diaspora-hope/wp-content/uploads/2015/10/contact-adhope-1.jpg",
  ];
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ibxrhal",
        "template_qjdk6zh",
        form.current,
        "lRabnr_Fw-9P1yofJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contactDetail">
    <div className="row mt-5 p-5">
      <div className="col-md-6 col-sm-12 text-center ">
        <div>
          <h1 className="mt-3">Location</h1>
          <h5>
            28 Jackson Blvd Ste 1020 Chicago IL
            <br />
            60604-2340
          </h5>
          <br/>
          <div className="mt-5">
            <h1>follow us</h1>
            <img
              className="logoHeight m-2"
              src="data:image/png;base64,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"
            ></img>
            <img
              className="logoHeight m-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
            ></img>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-12">
        <div className="me-5">
          <h2 className="ms-2">Contact form</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input
              className=" form-control "
              type="text"
              name="user_name"
              placeholder="Enter your Name"
            />
            <br />
            <input
              className="form-control"
              type="email"
              name="user_email"
              placeholder="Enter your Email"
            />
            <br />
            <textarea
              className="form-control"
              name="message"
              placeholder="Enter your Message"
            ></textarea>
            <br />
            <button
              type="submit"
              value="Send"
              className="btn btn-dark m-2 w-100"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      </div>
      <Banner bannerImg={bannerImg} />
    </div>
  );
}

export default Contact;
