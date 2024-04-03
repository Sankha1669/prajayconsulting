import React from "react";
import "./OutreachMarketing.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import outreachmarket from "../../../Assets/Images/outreachmarket.png";
import outreachmarket1 from "../../../Assets/Images/outreachmarket1.png";
import outreachmarket2 from "../../../Assets/Images/outreachmarket2.png";

import review from "../../../Assets/Icons/review.png";
import revive from "../../../Assets/Icons/message.png";
import revitalise from "../../../Assets/Icons/revitalise.png";
import { Link } from "react-router-dom";

const OutreachMarketing = () => {
  document.title = "Outreach Marketing";
  return (
    <div>
      <section className="pt-3 pt-sm-5 OutreachMarketing">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6}>
              <h1>LinkedIn Outreach Marketing</h1>
              <p className="mt-3">
                Business is tough, we understand that. With a constantly growing
                to-do list it can be easy for some things to fall through the
                cracks. This is why our outreach marketing service is designed
                to maximise your company’s potential and increase your capacity
                to generate new leads.
              </p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="text-center">
              <img
                src={outreachmarket}
                className="img-fluid"
                height="540"
                width="400"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 bg-dark text-white OutreachMarketingApproach">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6} className="text-center">
              <img
                src={outreachmarket1}
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
                As a results-oriented business, StraightIn leaves no stone
                unturned in our efforts to boost your firm’s chance of success.
                Years of perfecting the ideal LinkedIn outreach strategy means
                we know exactly how to pique interest and reignite stalled
                leads, so you can be confident that you are in safe hands.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 OutreachMarketingHow">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={6}>
              <h2>How it Works</h2>
              <p className="mt-3">
                Creating the ideal LinkedIn outreach marketing strategy is a
                complex process that requires skill and expertise. Here’s how we
                do it:
              </p>
            </Col>
          </Row>

          <Row className="pt-3 pt-sm-5">
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={review} className="img-fluid" width="90" />
                  <h3 className="mt-3 mt-sm-2 text-white">Review</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Routinely monitor progress to identify any prospects that
                    have gone cold, so we can reignite conversations and turn
                    them into leads.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={revive} className="img-fluid" width="90" />
                  <h3 className="mt-3 mt-sm-2 text-white">Revive</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Devise a targeted outreach marketing strategy that
                    encourages responses and revives dropped conversations to
                    give you the best chance of success.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={revitalise} className="img-fluid" width="90" />
                  <h3 className="mt-3 mt-sm-2 text-white">Revitalise</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Draft engaging content designed to revitalise interest in
                    your services and convert cold leads into active
                    opportunities for us to pursue.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 bg-dark text-white OutreachMarketingWhy">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6} className="text-center">
              <img
                src={outreachmarket2}
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
              <div className="mt-3">
                <p>
                  The world of LinkedIn marketing is constantly evolving. If you
                  want to get ahead, it’s essential to work with a business
                  that’s proactive, agile, and responsive. You need to work with
                  PrajayConsulting.
                </p>
                <p>
                  With our fingers always on the pulse of the latest
                  developments in the industry, we’re able to react to any
                  future changes that may occur before our competitors even know
                  about them. From building the perfect LinkedIn outreach
                  strategy, to creating thought-leading content, we have you
                  covered. This ensures that you are always primed for success.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="pt-3 pt-sm-5 align-items-center">
            <Col xs={12} sm={12} md={6} lg={6}>
              <h2>
                Have a <span className="text-primary">Question?</span>
              </h2>
              <div className="mt-3">
                <p>
                  If it’s a detailed, results-oriented service that you’re
                  after, StraightIn is perfect for you. Providing you with a
                  strong return on investment, our outreach marketing service is
                  designed to efficiently funnel leads and turn them into
                  clients. What’s more, we’re the only company in our sector to
                  use no automation whatsoever — guaranteeing a more
                  personalised approach.
                </p>
                <p className="mt-2">
                  Fill in the form and a member of our team will contact you as
                  soon as possible.
                </p>
              </div>
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

export default OutreachMarketing;
