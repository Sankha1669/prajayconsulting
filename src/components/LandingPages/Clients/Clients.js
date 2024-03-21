import React from "react";
import "./Clients.css";
import { Col, Container, Row } from "react-bootstrap";

import automationPhone from "../../../Assets/Images/automation-phone-1.png";

const Clients = () => {
  return (
    <section className="Clients py-5">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={12} md={7} lg={7}>
            <h2>
              Connecting You with Your <br />{" "}
              <span className="text-primary">Ideal Clients</span> on LinkedIn
            </h2>
            <div className="mt-5">
              <p>
                Generating sales leads on LinkedIn is the most cost-effective
                way to attract new business — provided it’s done correctly.
              </p>
              <p>
                <span>That’s where we come in. </span>
                As Europe’s leading LinkedIn marketing company, and the only one
                not to use automation, we know a thing or two about success
                <span>
                  . Our targeted approach gets you straight in with the people
                  that matter.{" "}
                </span>
              </p>
              <p>
                Using your personal profile, we’ll connect you with the key
                decision makers for your industry and implement a bespoke
                LinkedIn B2B lead generation strategy that’s designed to bring
                in new clients.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5}>
            <img
              className="img-fluid mb-3 mb-sm-0"
              src={automationPhone}
              alt="automationphone"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Clients;
