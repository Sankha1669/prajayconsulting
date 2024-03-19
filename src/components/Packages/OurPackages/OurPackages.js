import React from "react";
import "./OurPackages.css";
import { Col, Container, Row } from "react-bootstrap";

import Ourpackges from "../../../Assets/Images/Ourpackges.png";

const OurPackages = () => {
  return (
    <section className="pt-3 pt-sm-5 bg-dark text-white OurPackages">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={12} md={6} lg={6}>
            <h1>Our Packages</h1>
            <div className="mt-3 mt-sm-4">
              <p>
                Our specially selected catalogue of packages is curated to
                support and complement your company; to create new
                opportunities, and generate additional revenue for your
                business.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="text-center">
            <img
              src={Ourpackges}
              className="img-fluid"
              height="540"
              width="400"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurPackages;
