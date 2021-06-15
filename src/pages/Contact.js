import React from "react";
import Network from "../assets/818883.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Network})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name"></label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email"></label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message"></label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
