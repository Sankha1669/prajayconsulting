import React from "react";
import "./ContentMarketing.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import contentmarket from "../../../Assets/Images/contentmarket.png";
import contentmarket2 from "../../../Assets/Images/contentmarket2.png";
import contentmarket3 from "../../../Assets/Images/contentmarket3.png";

import immerse from "../../../Assets/Icons/immersion.png";
import investigate from "../../../Assets/Icons/search-file.png";
import initate from "../../../Assets/Icons/contract.png";
import { Link } from "react-router-dom";

const ContentMarketing = () => {
  document.title = "Content Marketing";
  return (
    <div>
      <section className="pt-3 pt-sm-5 ContentMarketing">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6}>
              <h1>LinkedIn Content Marketing</h1>
              <p className="mt-3">
                Assurance that your business appears as one of the main thought
                leaders of your industry with our LinkedIn Content Marketing
                service. Maintain a knowledgeable, reliable, and engaging tone
                within your network.
              </p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="text-center">
              <img
                src={contentmarket}
                className="img-fluid"
                height="540"
                width="400"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 bg-dark text-white ContentMarketingApproach">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6}>
              <img
                src={contentmarket2}
                className="img-fluid"
                width="350"
                height="524"
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <h2>
                Our <span className="text-primary">Approach</span>
              </h2>
              <p className="mt-3">
                One thing more important than excellent content is consistency.
                We regularly create articles that are designed to impress and
                educate readers, while also maintaining the tone people are
                accustomed to. Keep your finger on the pulse and get yourself
                noticed.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 ContentMarketingHow">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={6}>
              <h2>How it Works</h2>
              <p className="mt-3">
                Devising the perfect LinkedIn content marketing strategy takes
                years of experience and know-how. Here’s how we do it:
              </p>
            </Col>
          </Row>
          <Row className="pt-3 pt-sm-5">
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={immerse} className="img-fluid" width="90" />
                  <h3 className="mt-3 mt-sm-2 text-white">Immerse</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Our expert team immerses themselves into the culture of your
                    business, to replicate your tone and ensure a seamless
                    service across the board.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={investigate} className="img-fluid" width="90" />
                  <h3 className="mt-3 mt-sm-2 text-white">Investigate</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Conducting thorough research into your specific industry
                    will allow us to devise a content marketing strategy
                    guaranteed to delight your audience.
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
                    Produce a range of 1000-word articles that advertise your
                    company as a thought leader and promote you as a business
                    your clients will want to work with.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 bg-dark text-white ContentMarketingWhy">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6} className="text-center">
              <img
                src={contentmarket3}
                width="500"
                height="501"
                className="img-fluid"
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <h2>
                Why Should You Choose{" "}
                <span className="text-primary">PrajayConsulting?</span>
              </h2>
              <div className="mt-3">
                <p>
                  Creating bespoke content that your audience will enjoy is an
                  integral part of promoting your business on Linkedin. Doing so
                  can be incredibly time consuming, especially when it comes to
                  fast-paced industries.
                </p>
                <p>
                  StraightIn’s LinkedIn content marketing service provides you
                  with a regular supply of SEO-optimised articles that are
                  tailor-made for you. From industry news, to thought leadership
                  pieces, we have all the tools you need to help get you
                  noticed.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="pt-3 pt-sm-5 align-items-center">
            <Col xs={12} sm={12} md={6} lg={6}>
              <h2>
                Have a <span className="text-primary">Question?</span>
              </h2>
              <p className="mt-3">
                If you’re looking for targeted and optimised content designed to
                help your company stand out from the crowd, you’ve certainly
                come to the right place. Get in touch to find out how we can
                devise a bespoke LinkedIn content marketing strategy that will
                delight your audience and boost your business. All with
                absolutely no automation, and that’s a promise.
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

export default ContentMarketing;
