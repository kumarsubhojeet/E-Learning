import React, { useRef, useState } from "react";
import "../../Pages/LandingPage/ContactUs.css";

import Phone from "../../img/phone.png";
import email from "../../img/email.png";
import address from "../../img/address.png";

import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef();
  const [done, setdone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2ctca7i",
        "template_njy9eo2",
        formRef.current,
        "user_pvecif4FWZExhw0wAtxdp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setdone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="contact_main">
        <div className="contact-bg"></div>
        <div className="contact_wrapper">
          <div className="contact_left">
            <h1 className="contact_title">Contact Us</h1>

            <div className="contact-info">
              <div className="c_items">
                <img src={Phone} className="c_icon" alt="Error" />
                +123 456 789
              </div>

              <div className="c_items">
                <img src={email} className="c_icon" alt="Error" />
                Aducator@gmail.com
              </div>

              <div className="c_items">
                <img src={address} className="c_icon" alt="Error" />
                Wagholi,Pune,Maharastra,India,412207
              </div>
             

              
            </div>
          </div>

          <div className="contact_right">
            <p className="c-desc">
              <strong>Facing Any Issue</strong>, Get in
              touch.Always available for you.
            </p>

            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                required
                type="text"
                placeholder="Your Name"
                name="user_name"
              />
              <br />
              <input
                required
                type="text"
                placeholder="Subject"
                name="user_Subject"
              />
              <br />
              <input
                required
                type="email"
                placeholder="Enter Email"
                name="user_email"
              />
              <br />
              <textarea
                required
                placeholder="Message"
                name="user_message"
                rows="5"
              ></textarea>

              <br />
              <button className="COntact_btn"> Submit </button>
              {done && <h4 className="done">Thanks Message Sent :)</h4>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
