import React from "react";
import "./ConnectionMessage.css";
import { Card, Col, Container, Row } from "react-bootstrap";

import connectionmsg from "../../../Assets/Images/connectionmsg.png";
import connectionapproach from "../../../Assets/Images/connectionapproach.png";
import connectionmsgwhy from "../../../Assets/Images/connectionmsgwhy.png";

import plan from "../../../Assets/Icons/planning.png";
import position from "../../../Assets/Icons/position.png";
import purpose from "../../../Assets/Icons/message.png";

const ConnectionMessage = () => {
  document.title = "Connection Message";
  return (
    <div>
      <section className="pt-3 pt-sm-5 ConnectionMessage">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6}>
              <h1>LinkedIn Connection Messages</h1>
              <p className="mt-3">
                There are around 70 million decision-makers on LinkedIn. Getting
                through to them efficiently can be a problem. It’s all about
                making sure your messaging is reaching the people that matter
                most with StraightIn.
              </p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="text-center">
              <img
                src={connectionmsg}
                className="img-fluid"
                height="540"
                width="400"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 bg-dark text-white ConnectionApproach">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6}>
              <img
                src={connectionapproach}
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
                First impressions matter. That’s why we send a personalised
                LinkedIn connection message that gives each recipient a clear
                understanding of who you are, and what you can do to help. No
                jargon, just a concise introduction designed to get you noticed
                and get you appointments.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 ConnectionMessageWork">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={7}>
              <h2>How it Works</h2>
              <p>
                Creating the perfect LinkedIn connection message needs a
                meticulous process that has been honed to perfection. Here’s
                what we do:
              </p>
            </Col>
          </Row>
          <Row className="pt-3 pt-sm-5">
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={plan} className="img-fluid" width="90" />
                  <h3 className="mt-3 mt-sm-2 text-white">Plan</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Draft engaging content that makes you stand out from the
                    crowd. Explore the pain points your contact may be facing.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={position} className="img-fluid" width="90" />
                  <h3 className="mt-3 mt-sm-2 text-white">Position</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Introduce you and your services. Detail exactly what you
                    offer, and position your firm as the ideal solution to any
                    issues.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={purpose} className="img-fluid" width="90" />
                  <h3 className="mt-3 mt-sm-2 text-white">Propose</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Encourage your recipients to find out more, engage with your
                    brand, and book an appointment.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 bg-dark text-white ConnectionMessageWhy">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6} className="text-center">
              <img
                src={connectionmsgwhy}
                className="img-fluid"
                width="500"
                height="501"
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <h2>
                Why Should You Choose{" "}
                <span className="text-primary">PrajayConsulting?</span>
              </h2>
              <div className="mt-3">
                <p>
                  With the sheer number of active users on LinkedIn it can be
                  easy to blend into the scenery. Being distinct and noticeable
                  can be your secret weapon to attracting responses and
                  interest.
                </p>
                <p>
                  You only get one opportunity to make a good first impression,
                  and the LinkedIn connection message is it. Years of experience
                  mean we know how to pique someone’s interest. After all,
                  you’re here aren’t you?
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ConnectionMessage;
