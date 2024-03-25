import React from "react";
import "./ProfileOptimization.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import ProfileOpt from "../../../Assets/Images/ProfileOpt.png";
import ProfileApproach from "../../../Assets/Images/ProfileApproach.png";
import ProfileChoose from "../../../Assets/Images/ProfileChoose.png";

import Evalute from "../../../Assets/Icons/execution.png";
import monitor from "../../../Assets/Icons/monitor.png";
import research from "../../../Assets/Icons/research.png";
import { Link } from "react-router-dom";

const ProfileOptimization = () => {
  return (
    <div>
      <section className="pt-3 pt-sm-5 ProfileOptimization">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6}>
              <h1>LinkedIn Profile Enhancement</h1>
              <p>
                The right messaging can completely revitalise your online
                presence and maximise connection opportunities. We’ll help you
                optimise your LinkedIn profile to encourage more interaction and
                give your business a boost.
              </p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="text-center">
              <img
                src={ProfileOpt}
                height="540"
                width="400"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 bg-dark text-white ProfilApproach">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6}>
              <img
                src={ProfileApproach}
                className="img-fluid text-center"
                width="350"
                height="524"
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <h2>
                Our <span className="text-primary">Approach</span>
              </h2>
              <p>
                With over 800 million users in over 200 countries around the
                world, LinkedIn can be a hard place to get noticed. If you
                optimise your LinkedIn profile, you are bound to stand out from
                the crowd and ensure that your profile is fit for purpose and
                firing on all cylinders.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 ProfileWork">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={6}>
              <h2>How it Works</h2>
              <p>
                Creating an enhanced LinkedIn profile can be a lengthy process
                that requires years of skill and expertise. Here’s how we do it:
              </p>
            </Col>
          </Row>
          <Row className="mt-3 mt-sm-5">
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={Evalute} className="img-fluid" width="90" />
                  <h3 className="mt-3 mt-sm-2 text-white">Evalute</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Review your current messaging and analyse your profile’s
                    performance, before devising a new strategy of improvement.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="shadow p-3 cardContainer">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={monitor} className="img-fluid" width="90" />
                  <h3 className="mt-3 mt-sm-2 text-white">Enhance</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Enhance your LinkedIn profile from top to bottom, ensuring
                    it appears attractive without coming across as too
                    sales-oriented.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="shadow p-3 cardContainer">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={research} className="img-fluid" width="90" />
                  <h3 className="mt-3 mt-sm-2 text-white">Embellish</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Create dedicated banners to advertise your business,
                    showcase your experience, and improve the aesthetic of your
                    profile.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 bg-dark text-white ProfileChoose">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6} className="text-center">
              <img
                src={ProfileChoose}
                className="img-fluid"
                height="501"
                width="500"
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <h2>
                Why Should You Choose{" "}
                <span className="text-primary">PrajayConsulting</span>
              </h2>
              <div className="mt-3">
                <p>
                  The sheer number of users on LinkedIn means it can be
                  extremely easy to blend into the background if your profile
                  isn’t eye-catching enough. That’s where StraightIn comes in.
                  As a product of our own success, we understand how to properly
                  leverage the platform’s potential to give you the best
                  possible chance of attracting business and cultivating growth.
                  We provide all of this, with absolutely no automation
                  whatsoever. Put your trust in us to enhance your LinkedIn
                  profile and take your business to the next level.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-3 mt-sm-5 align-items-center">
            <Col xs={12} sm={12} md={6} lg={6}>
              <h2>
                Have a <span className="text-primary">Question?</span>
              </h2>
              <p>
                Are you looking to optimise your LinkedIn profile and unlock its
                true potential? Nobody knows the platform better than us, which
                is why we’re so confident in our ability to provide you with a
                service above and beyond anything else available on the market.
              </p>
              <div className="mt-3">
                <p>Get in touch and discover what we can do for you.</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="text-center">
              <Button
                variant="primary"
                className="py-3 px-5"
                as={Link}
                to="/contactus"
              >
                Get in Touch
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ProfileOptimization;
