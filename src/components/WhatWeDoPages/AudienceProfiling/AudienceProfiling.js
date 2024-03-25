import React from "react";
import "./AudienceProfiling.css";
import { Col, Container, Row } from "react-bootstrap";

import ProfileAudience from "../../../Assets/Images/ProfileAudience.png";
import ProfileApproach1 from "../../../Assets/Images/ProfileApproach1.png";

const AudienceProfiling = () => {
  return (
    <div>
      <section className="pt-3 pt-sm-5 AudienceProfiling">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6}>
              <h1>LinkedIn Target Audience Profile</h1>
              <p>
                Get your company in front of the people that matter most.
                Working closely with you, we’ll build the perfect LinkedIn
                target audience profile that’s specifically catered to your
                goals.
              </p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="text-center">
              <img
                src={ProfileAudience}
                className="img-fluid"
                height="540"
                width="400"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 bg-dark text-white AudienceApproach">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6} className="text-center">
              <img
                src={ProfileApproach1}
                className="img-fluid"
                width="451"
                height="451"
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <h2>
                Our <span className="text-primary">Approach</span>
              </h2>
              <div className="mt-3">
                <p>
                  You can have the perfect opening message, created by the best
                  writers around, but if you don’t know where best to send it,
                  what’s the point? We know exactly how to connect you with the
                  people who will want to do business with you. No trial, no
                  error, just results.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 AudienceHowItWorks">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={8}>
              <h2>How it Works</h2>
              <div className="mt-3">
                Creating the perfect LinkedIn target audience profile that’s
                guaranteed to get you business is a lengthy process that
                requires unrivalled expertise. Here’s how we do it.
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AudienceProfiling;
