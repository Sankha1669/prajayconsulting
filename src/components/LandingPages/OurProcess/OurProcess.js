import React from "react";
import "./OurProcess.css";
import { Card, Col, Container, Row } from "react-bootstrap";

// icons
import targetAudience from "../../../Assets/Icons/focus-group.png";
import designThinking from "../../../Assets/Icons/design-thinking.png";
import Rocket from "../../../Assets/Icons/rocket.png";
import conversation from "../../../Assets/Icons/conversation.png";
import onboarding from "../../../Assets/Icons/onboarding.png";

const OurProcess = () => {
  return (
    <section className="OurProcess bg-light pt4 pt-sm-5">
      <Container>
        <h2>
          Our <span className="text-primary">Process</span>
        </h2>
        <Row className="my-3 my-sm-5">
          <Col className="mb-3">
            <Card className="d-flex justify-content-center align-items-center border-0 shadow text-center ">
              <img src={targetAudience} width="90px" />
              <p>Target Market Identification</p>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card className="d-flex justify-content-center align-items-center border-0 shadow text-center ">
              <img src={designThinking} width="90px" />
              <p>Strategy Creation</p>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card className="d-flex justify-content-center align-items-center border-0 shadow text-center ">
              <img src={Rocket} width="90px" />
              <p>Strategy Creation</p>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card className="d-flex justify-content-center align-items-center border-0 shadow text-center ">
              <img src={conversation} width="90px" />
              <p>Strategy Creation</p>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card className="d-flex justify-content-center align-items-center border-0 shadow text-center ">
              <img src={onboarding} width="90px" />
              <p>Strategy Creation</p>
            </Card>
          </Col>
        </Row>
      </Container>
      <Row className="bg-dark p-0 m-0">
        <Col lg={10}>
          <div className="mt-4 mt-sm-5 py-4 py-sm-5 sylineGraphics"></div>
        </Col>
      </Row>
    </section>
  );
};

export default OurProcess;
