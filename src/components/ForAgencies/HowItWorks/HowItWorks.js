import React from "react";
import "./HowItWorks.css";
import { Card, Col, Container, Row } from "react-bootstrap";

import strategic from "../../../Assets/Icons/strategic.png";
import chat from "../../../Assets/Icons/strategic.png";
import execution from "../../../Assets/Icons/execution.png";

const HowItWorks = () => {
  return (
    <section className="py-3 py-sm-5 HowItWorks">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={7} lg={7}>
            <h1>
              How it <span className="text-primary">works</span>
            </h1>
            <div className="my-3 my-sm-4">
              <p>
                Formulating the perfect campaign needs a thorough approach that
                has been honed to perfection. Here’s how:
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
            <div className="p-3 shadow cardContainer">
              <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                <img src={strategic} className="img-fluid" width="90" />
                <h3 className="mt-3 mt-sm-2">Strategy</h3>
              </Card>
              <div className="mt-3 mt-sm-3 text-center">
                <p>
                  We will build the perfect marketing strategy that’s
                  specifically catered to your client’s goals. We know exactly
                  how to connect your client with the people who will want to do
                  business with them.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
            <div className="shadow p-3 cardContainer">
              <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                <img src={chat} className="img-fluid" width="90" />
                <h3 className="mt-3 mt-sm-2">Messaging</h3>
              </Card>
              <div className="mt-3 mt-sm-3 text-center">
                <p>
                  Our team will draft engaging content that makes your client
                  stand out from the crowd and addresses the pain points
                  client’s contacts may be facing, positioning them as a leader
                  in their respective industry.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
            <div className="shadow p-3 cardContainer">
              <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                <img src={execution} className="img-fluid" width="90" />
                <h3 className="mt-3 mt-sm-2">Execution</h3>
              </Card>
              <div className="mt-3 mt-sm-3 text-center">
                <p>
                  Conversing with prospects, fielding surface-level questions
                  and managing all conversions to ease the burden on your client
                  so they can focus on other aspects of their company.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorks;
