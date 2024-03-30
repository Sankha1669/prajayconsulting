import React from "react";
import "./AudienceProfiling.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import ProfileAudience from "../../../Assets/Images/ProfileAudience.png";
import ProfileApproach1 from "../../../Assets/Images/ProfileApproach1.png";
import AudienceProfilingWhy from "../../../Assets/Images/AudienceProfilingWhy.png";

import immersion from "../../../Assets/Icons/immersion.png";
import identity from "../../../Assets/Icons/identity.png";
import initate from "../../../Assets/Icons/contract.png";
import { Link } from "react-router-dom";

const AudienceProfiling = () => {
  document.title = "Target Profiling";
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
                <p>
                  Creating the perfect LinkedIn target audience profile that’s
                  guaranteed to get you business is a lengthy process that
                  requires unrivalled expertise. Here’s how we do it.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-3 mt-sm-4">
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={immersion} className="img-fluid" width="90" />
                  <h3 className="mt-3 mt-sm-2 text-white">Immerse</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Gain a thorough understanding of your company, its goals,
                    and what we can do to help.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={identity} className="img-fluid" width="90" />
                  <h3 className="mt-3 mt-sm-2 text-white">Identity</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Build a profile of your ideal target audience, so you’re
                    always focusing on the right people.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={initate} className="img-fluid" width="90" />
                  <h3 className="mt-3 mt-sm-2 text-white">Initate</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Create a comprehensive list of potential recipients and
                    share our findings to make sure you’re satisfied.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 bg-dark text-white AudienceWhy">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6} className="text-center">
              <img
                src={AudienceProfilingWhy}
                className="img-fluid"
                width="500"
                height="500"
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <h2>
                Why Should You Choose{" "}
                <span className="text-primary">PrajayConsulting?</span>
              </h2>
              <p>
                Devising effective marketing campaigns can be tough, however you
                attempt it. Buying data is extremely expensive, and can be
                time-consuming to manage. With so much filtering, campaign
                building, and other repetitive tasks to carry out, it’s
                difficult to get it right. The same can be said for most
                LinkedIn strategies, which are often highly automated, poorly
                targeted, and struggle to stand out.
              </p>
              <p>
                This is where StraightIn can help. Years of experience mean we
                know exactly who you should be speaking to, even if you don’t.
                We’re experts at creating the perfect LinkedIn target audience
                profile and innovative campaigns that cut through the noise and
                get you noticed by the people that matter. In addition, we’re
                the only company in our sector that uses absolutely no
                automation. A personalised service is guaranteed.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center py-3 py-sm-5">
            <Col xs={12} sm={12} md={6} lg={6}>
              <h2>
                Have a <span className="text-primary">Question?</span>
              </h2>
              <p className="mt-3">
                If you’re looking for a hands on service that’s dedicated to
                delivering, StraightIn is the perfect choice. You don’t just buy
                our time, you benefit from our unrivalled knowledge and
                expertise. From creating the perfect target audience profile, to
                generating thought-leading content, we have everything you need
                under one roof. To find out more, fill in the form and a member
                of our team will contact you as soon as possible.
              </p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="text-center">
              <Button
                variant="primary"
                className="py-3 px-5"
                as={Link}
                to="/contactus"
              >
                Get In Touch
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AudienceProfiling;
