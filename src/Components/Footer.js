import React from "react";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://dashboard.heroku.com/apps" className="fa fa-facebook">
          {" "}
        </a>
        {""}
        <a href="https://dashboard.heroku.com/apps" class="fa fa-twitter">
          {" "}
        </a>{" "}
        <a href="https://dashboard.heroku.com/apps" class="fa fa-google">
          {" "}
        </a>{" "}
        <a href="https://dashboard.heroku.com/apps" class="fa fa-linkedin">
          {" "}
        </a>{" "}
        {/* <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon /> */}
      </div>
      <p>
        <a href="https://www.linkedin.com/in/burak-işik-04a354183/">
          by Burak ISIK
        </a>
      </p>
    </div>
  );
}

export default Footer;
