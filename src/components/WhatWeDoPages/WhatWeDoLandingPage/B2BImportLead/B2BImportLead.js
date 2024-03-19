import React from "react";
import "./B2BImportLead.css";
import { Col, Container, Row } from "react-bootstrap";
import B2BImg2 from "../../../../Assets/Images/B2BImg2.png";

const B2BImportLead = () => {
  return (
    <section className="B2BImportLead bg-dark text-white py-3 py-sm-5">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={12} md={6} lg={6}>
            <img src={B2BImg2} className="img-fluid" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h2 className="subtitle">
              Why Is LinkedIn B2B Lead Generation{" "}
              <span className="text-primary">Important?</span>
            </h2>
            <div className="mt-3">
              <p>
                LinkedIn marketing is the ultimate method for boosting leads and
                revenue. Digital and direct with a 100% delivery rate, it allows
                you to bypass traditional roadblocks, avoid gatekeeping, and get
                you straight in front of the decision makers that matter.
              </p>
              <p>
                Is your business ready to take the next step? Get in touch and
                take advantage of our LinkedIn B2B Lead Generation services
                today.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="mt-3 mt-sm-5">
              <h2 className="subtitle">
                Why Choose{" "}
                <span className="text-primary">PranjayConsulting?</span>
              </h2>
              <div>
                <p>
                  When it comes to LinkedIn, knowledge is key. Agile and
                  adaptable, there’s nobody who knows how to leverage the
                  platform quite like us.
                </p>
                <p>
                  Using our unique skills, expertise and collection of
                  specialist LinkedIn B2B Lead Generation services, we will
                  construct the ideal lead generation strategy to generate
                  quality leads for your business. Plus, we’re the only company
                  in our sector to do this with absolutely no automation.
                  Whoever you are, whatever you do, we can help.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="mt-3 mt-sm-5">
              <h2 className="subtitle">
                A Personalised <span className="text-primary">Approach</span>
              </h2>
              <div>
                <p>
                  Get somebody in your corner who understands your market
                  inside-out. Our LinkedIn strategies are immersed in your firm
                  and go into minute detail to optimise your campaign for
                  prolonged success.
                </p>
                <p>
                  We also ensure that your audience knows they are engaging with
                  real people every step of the way. No hassle, just results.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default B2BImportLead;
