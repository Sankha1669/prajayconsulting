import React from "react";
import "./ConversationManagement.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import convmsg from "../../../Assets/Images/convmsg.png";
import convmsg2 from "../../../Assets/Images/convmsg2.png";
import convmsg3 from "../../../Assets/Images/convmsg3.png";

import combine from "../../../Assets/Icons/chart.png";
import chat from "../../../Assets/Icons/chat.png";
import convert from "../../../Assets/Icons/monitor.png";
import { Link } from "react-router-dom";

const ConversationManagement = () => {
  document.title = "Conversation Management";
  return (
    <div>
      <section className="pt-3 pt-sm-5 ConversationManagement">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6}>
              <h1>LinkedIn Conversation Management</h1>
              <p className="mt-3">
                Running a business can be time-consuming. That’s why our
                LinkedIn conversation management service is designed to take the
                weight off your shoulders and generate results. No drama, just
                an innovative solution designed to deliver.
              </p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="text-center">
              <img
                src={convmsg}
                className="img-fluid"
                height="540"
                width="400"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 bg-dark text-white ConversationManagementApproach">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6} className="text-center">
              <img
                src={convmsg2}
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
                Our account managers will immerse themselves into your business
                and engage with all contacts on your behalf, while also taking
                into account the tone and message of your business to create a
                consistent message across the board.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 ConversationManagementHow">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={6}>
              <h2>How it Works</h2>
              <p className="mt-3">
                Effective LinkedIn conversation management takes time and a
                well-defined process. Here’s how we do it:
              </p>
            </Col>
          </Row>
          <Row className="pt-3 pt-sm-5">
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={combine} className="img-fluid" width="90" />
                  <h3 className="mt-3 mt-sm-2 text-white">Combine</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Understand your sales process and seamlessly integrate it
                    into our strategy, to provide a holistic service that you
                    know you can rely on.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={chat} className="img-fluid" width="90" />
                  <h3 className="mt-3 mt-sm-2 text-white">Converse</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Field surface level questions and manage all conversations
                    to ease the burden on you, so you can focus on other aspects
                    of your company.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={convert} className="img-fluid" width="90" />
                  <h3 className="mt-3 mt-sm-2 text-white">Convert</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Each and every one of our conversations has the same goal in
                    mind, to lead the recipient into a meeting that can get you
                    new business.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 bg-dark text-white ConversationManagementWhy">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6} className="text-center">
              <img
                src={convmsg3}
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
              <p className="mt-3">
                Creating a rapport with potential connections is essential to
                succeeding on LinkedIn. Being distinct, memorable, and concise
                can be your secret weapon to attracting responses and piquing
                interest. With thousands of successful campaigns under our belt,
                we know how to conduct effective conversation management
                designed to get results.
              </p>
            </Col>
          </Row>
          <Row className="pt-3 pt-sm-5 align-items-center">
            <Col xs={12} sm={12} md={6} lg={6}>
              <h2>
                Have a <span className="text-primary">Question?</span>
              </h2>
              <p className="mt-3">
                If you’re on the lookout for a bespoke service that’s dedicated
                to increasing your revenue, then you’re in the right place. We
                know exactly how to manage conversations, generate interest, and
                convert opportunities into meetings. No automation, just a
                world-class offering that really delivers.
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

export default ConversationManagement;
