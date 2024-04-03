import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import Footerimg from "../../Assets/Images/Footerimg.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="Footer bg-dark py-3 py-sm-5 text-white">
      <Container>
        <div className="d-flex flex-column flex-sm-row">
          <div className="flex-1 mb-2">
            <h4>PrajayConsulting</h4>
            <div className="d-flex gap-3 mt-2 mt-sm-4 socialLinks">
              <a href="#facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <div className="Footerimg mt-3">
              <img src={Footerimg} className="mb-3" />
              <div>
                <small>
                  Copyright ©&nbsp;all rights reserved
                  <br />
                  Powered by StraightIn
                </small>
              </div>
            </div>
          </div>
          <div className="servicesLinks flex-1 d-flex flex-column gap-1 mb-4 mb-sm-0">
            <h4 className="text-primary mb-4">Serices</h4>
            <Link to="/what-we-do/profileoptimization">
              Profile Optimisation
            </Link>
            <Link to="/what-we-do/audienceprofiling">
              Target Audience Profiling
            </Link>
            <Link to="/what-we-do/connectionmessage">Connection Messages</Link>
            <Link to="/what-we-do/conversion-management">
              Conversation Management
            </Link>
            <Link to="/what-we-do/content-marketing">Content Marketing</Link>
            <Link to="/what-we-do/outreach-marketing">Outreach Marketing</Link>
            <Link href="#LinkedInAdvertising">LinkedIn Advertising</Link>
          </div>
          <div className="servicesLinks flex-1 d-flex flex-column gap-1 mb-4 mb-sm-0">
            <h4 className="text-primary mb-4">Company</h4>
            <Link to="/packages">Packages</Link>
            <Link to="/about">About Us</Link>
            <Link to="/about/testimonials">Testimonials </Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about/careers">Careers</Link>
          </div>
          <div className="servicesLinks flex-1 d-flex flex-column gap-1 mb-4 mb-sm-0">
            <h4 className="text-primary mb-4">Contact</h4>
            <div>
              Call : <a href="tel:0161 518 4740">0161 518 4740</a>
            </div>
            <div>
              Email :{" "}
              <a href="mailto:grow@straight-in.co.uk">grow@straight-in.co.uk</a>
            </div>
            <div className="mt-3 mb-2">
              <Link to="/contactus" className="coloredLinks">
                Get In Touch
              </Link>{" "}
              |{" "}
              <a href="#AboutUs" className="coloredLinks">
                FAQ
              </a>
            </div>
            <div>
              <a href="#terms" className="coloredLinks">
                Terms & Conditions{" "}
              </a>{" "}
              |{" "}
              <a href="#privacy" className="coloredLinks">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
