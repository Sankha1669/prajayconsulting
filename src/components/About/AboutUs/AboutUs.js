import React from "react";
import "./AboutUs.css";
import { Button, Col, Container, Row } from "react-bootstrap";

import abotUS from "../../../Assets/Images/abotUS.png";
import OurClients from "../../LandingPages/OurClients/OurClients";

const AboutUs = () => {
  document.title = "About";
  return (
    <div>
      <section className="pt-3 pt-sm-5 bg-dark text-white AboutUs">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6}>
              <h1>About Us</h1>
              <div className="mt-3 mt-sm-4">
                <p>
                  can be tricky. That’s why you need specialist assistance from
                  somebody who knows the platform inside out and how best to
                  leverage it. You need to work with StraightIn.
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="text-center">
              <img
                className="img-fluid"
                src={abotUS}
                alt="aboutus"
                height="540"
                width="400"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-3 py-sm-5 AboutUsBgImg">
        <Container>
          <Row className="justify-content-end align-items-center">
            <Col xs={12} sm={12} md={6} lg={6}>
              <h2>
                What Makes Us <span className="text-primary">Different</span>
              </h2>
              <div className="mt-2">
                <p>
                  With thousands of successful campaigns under our belt, we know
                  how to get results.Unlike all other companies in the sector,
                  there’s absolutely no automation. Just a personalised approach
                  that guarantees a 100% delivery rate to the people your
                  business needs to speak to.
                </p>
                <p>
                  Our LinkedIn marketing agency was built using the exact same
                  service we provide, so we know first-hand just how well it can
                  work for your business.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-3 py-sm-5 bg-dark text-white AboutWhatWeDo">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <h1>
                What We <span className="text-primary">Do</span>
              </h1>
              <div className="mt-2">
                <p>
                  LinkedIn is a crowded market. Making sure you’re able to get
                  noticed in a crowded environment can be tough. A LinkedIn B2B
                  marketing campaign from StraightIn is designed to act as a
                  spotlight aimed directly at you. So no matter how crowded the
                  room might be, you can always stand out.
                </p>
              </div>
              <Button variant="primary" className="py-2 px-4 mt-2">
                Find out more
              </Button>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}></Col>
          </Row>
        </Container>
      </section>
      <OurClients />
    </div>
  );
};

export default AboutUs;
