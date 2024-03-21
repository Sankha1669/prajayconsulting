import React from "react";
import "./Careers.css";
import { Button, Col, Container, Row } from "react-bootstrap";

import careers from "../../../Assets/Images/Careers.png";
import { Link } from "react-router-dom";

const Careers = () => {
  document.title = "Careers";
  return (
    <div>
      <section className="pt-3 pt-sm-5 bg-dark text-white Careers">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6}>
              <h1>Careers</h1>
              <div className="mt-3 mt-sm-4">
                <p>
                  StraightIn is one of the fastest-growing LinkedIn Lead
                  Generation companies in the world. We help companies grow
                  their network, generate high-quality leads and build valuable,
                  profitable relationships through LinkedIn.
                </p>
                <p>
                  We are confident that every business to business organization
                  can benefit from our services and are looking to add members
                  to our team to help achieve that goal.
                </p>
                <p>
                  If you’re on the lookout for a role working in a fast-paced,
                  engaging environment that encourages personal growth and
                  professional development, a career at StraightIn could be
                  perfect for you.
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="text-center">
              <img
                src={careers}
                className="img-fluid"
                height="540"
                width="400"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 CareersOpportunities">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={8}>
              <h2>
                Current <span className="text-primary">Opportunities</span>
              </h2>
              <p>
                Want to work within a young and dynamic company? We are looking
                for a Sales Development Representative and Account Managers to
                join our vibrant and rapidly expanding team in Central
                Manchester and Chicago. Sound interesting? Take look and decide
                where you fit!
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 bg-dark text-white CareersWorking">
        <Container>
          <Row className="justify-content-end">
            <Col xs={12} sm={12} md={6} lg={6}>
              <h2>
                Working at{" "}
                <span className="text-primary">PrajayConsulting</span>
              </h2>
              <p>
                If you are the type of person who likes to be responsible for
                their own success, somebody who likes the sound of working for
                an energetic business with a global presence, StraightIn could
                be the perfect fit for you.
              </p>
              <p>
                Our company boasts a world-class team full of ambitious
                professionals looking to make their mark. It can be hard work,
                but as a results-driven business you are able to see the
                tangible difference you make on the lives and businesses of
                every client you work with.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-3 pt-sm-5 bg-dark text-white CareersFit">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={8} lg={5}>
              <h2>
                Think You’re a Good <span className="text-primary">Fit?</span>
                <Button
                  variant="primary"
                  className="getInTouch"
                  as={Link}
                  to="/contactus"
                >
                  Get in Touch
                </Button>
              </h2>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Careers;
