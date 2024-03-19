import React from "react";
import "./Banner.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bannerContainer position-relative">
      <div className="bannerContentContainer">
        <div className="bannerContent position-absolute top-50 start-50 translate-middle">
          <h1 className="">Non-Automated B2B</h1>
          <h1>LinkedIn Lead Generation</h1>
          <h1>Service that Delivers Results</h1>
          <p className="mt-4 mb-4">
            Stand out from the crowd and get your business noticed on LinkedIn.
          </p>
          <Button variant="outline-primary" as={Link} to="/contactus">
            Request a Callback
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
