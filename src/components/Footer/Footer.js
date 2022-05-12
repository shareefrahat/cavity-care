import React from "react";
import { Link } from "react-router-dom";
import bgFooter from "../../images/footer.png";

const Footer = () => {
  return (
    <>
      <footer
        style={{ backgroundImage: `url(${bgFooter})` }}
        className="
      text-neutral bg-no-repeat bg-cover bg-center mx-auto"
      >
        <div className="footer flex-col lg:flex-row justify-center lg:justify-around my-5">
          <div>
            <span className="footer-title">Services</span>
            <Link to="/" className="link link-hover">
              Branding
            </Link>
            <Link to="/" className="link link-hover">
              Design
            </Link>
            <Link to="/" className="link link-hover">
              Marketing
            </Link>
            <Link to="/" className="link link-hover">
              Advertisement
            </Link>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <Link to="/" className="link link-hover">
              About us
            </Link>
            <Link to="/" className="link link-hover">
              Contact
            </Link>
            <Link to="/" className="link link-hover">
              Jobs
            </Link>
            <Link to="/" className="link link-hover">
              Press kit
            </Link>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <Link to="/" className="link link-hover">
              Terms of use
            </Link>
            <Link to="/" className="link link-hover">
              Privacy policy
            </Link>
            <Link to="/" className="link link-hover">
              Cookie policy
            </Link>
          </div>
        </div>
        <div className="mt-20 py-5">
          <p>Copyright © 2022 - All right reserved by Cavity Care</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
