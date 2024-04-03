import React from "react";
import "./LinkedInAdvertising.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import linkedInadv from "../../../Assets/Images/linkedInadv.png";
import linkedInadv1 from "../../../Assets/Images/linkedInadv1.png";
import linkedInadv2 from "../../../Assets/Images/linkedInadv2.png";

import examine from "../../../Assets/Icons/code.png";
import enhance from "../../../Assets/Icons/monitor.png";
import execute from "../../../Assets/Icons/checking.png";
import singleadd from "../../../Assets/Icons/singleadd.png";
import msgadd from "../../../Assets/Icons/msgadd.png";
import eventadd from "../../../Assets/Icons/eventadd.png";
import textadd from "../../../Assets/Icons/textadd.png";
import dynamicadd from "../.././../Assets/Icons/dynamicadd.png";
import { Link } from "react-router-dom";

const LinkedInAdvertising = () => {
  document.title = "LinkedIn Advertising";
  return (
    <div>
      <section className="pt-3 pt-sm-5 LinkedInAdvertising">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6}>
              <h1>LinkedIn Paid Advertising</h1>
              <p className="mt-3">
                LinkedIn paid advertising offers brands the opportunity to gain
                high-quality leads. The main benefit of LinkedIn paid Ads is
                that it gives business owners and marketers the ability to reach
                a specific goal.
              </p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="text-center">
              <img
                src={linkedInadv}
                className="img-fluid"
                height="540"
                width="400"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 bg-dark text-white LinkedInAdvertisingApproach">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6} className="text-center">
              <img
                src={linkedInadv1}
                className="img-fluid"
                width="350"
                height="524"
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <h2>
                Our <span className="text-primary">Approach</span>
              </h2>
              <div className="mt-3">
                <p>
                  If your company is B2B, LinkedIn is where you should be
                  spending your budget.
                </p>
                <p>
                  LinkedIn is arguably the best advertising platform for B2B’s.
                  Allowing you to reach and connect with audiences you’d like to
                  do business with, quickly and at high volumes.
                </p>
                <p>
                  Although this can come at a price, the quality of leads
                  generated makes it worth your while as you’re targeting the
                  right professionals who are ready to do business.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 LinkedInAdvertisingHow">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={7}>
              <h2>How it Works</h2>
              <p>
                Creating an enticing LinkedIn ad is essential, especially when
                you’re attracting the right decision-makers. Here’s how we do
                it:
              </p>
            </Col>
          </Row>
          <Row className="pt-3 pt-sm-5">
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={examine} className="img-fluid" width="90" />
                  <h3 className="mt-3 mt-sm-2 text-white">Examine</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Review your current strategy and analyse your profile’s
                    performance, before devising a new strategy of improvement.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={enhance} className="img-fluid" width="90" />
                  <h3 className="mt-3 mt-sm-2 text-white">Enhance</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Devise a targeted ad campaign that encourages responses and
                    engagement to give you the best chance of success.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={execute} className="img-fluid" width="90" />
                  <h3 className="mt-3 mt-sm-2 text-white">Execute</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Create a range of LinkedIn paid Ad campaigns to advertise
                    your business, showcase your services, and improve your
                    brand’s image.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 bg-dark text-white LinkedInAdvertisingType LinkedInAdvertisingHow">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={6}>
              <h2>
                LinkedIn Ads <span className="text-primary">Types</span>
              </h2>
              <p className="mt-3">
                Each ad type has a different feel and design to help you achieve
                your different goals.
              </p>
            </Col>
          </Row>
          <Row className="pt-3 pt-sm-5">
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer addCard">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={singleadd} className="img-fluid" width="180" />
                  <h3 className="text-white">Single Image Ads</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Simple image ads consists a LinkedIn ad copy and a singular
                    image.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer addCard">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={msgadd} className="img-fluid" width="180" />
                  <h3 className="text-white">Message Ads</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Message and Conversation ads allow businesses to send
                    messages right into a decision maker’s inbox.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer addCard">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={msgadd} className="img-fluid" width="180" />
                  <h3 className="text-white">Carousel Ads</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Carousel ads are a collection of at least 2 -10 image cards
                    that follow once after another.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer addCard">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={eventadd} className="img-fluid" width="180" />
                  <h3 className="text-white">Event Ads</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Event ads give businesses the opportunity to promote an
                    upcoming event.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer addCard">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={textadd} className="img-fluid" width="180" />
                  <h3 className="text-white">Text Ads</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Text-based ads show up in the right column of your feed, or
                    on top of the page.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
              <div className="p-3 shadow cardContainer addCard">
                <Card className="border-0 shadow px-2 px-sm-3 py-3 py-sm-4 d-flex align-items-center">
                  <img src={dynamicadd} className="img-fluid" width="180" />
                  <h3 className="text-white">Dynamic Ads</h3>
                </Card>
                <div className="mt-3 mt-sm-3 text-center">
                  <p>
                    Personalized ads that combine users’ profile data to draw
                    their attention.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 LinkedInAdvertisingWhy">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6} className="text-center">
              <img
                src={linkedInadv2}
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
                  StraightIn is Europe’s leading non-automated LinkedIn lead
                  generation agency. StraightIn will always maintain the ability
                  and expertise to operate on LinkedIn, overcoming every
                  challenge the other lead generation agencies cannot.
                </p>
                <p>
                  Every day we deliver results, overcome challenges, and find
                  new ways to fill in the gaps. That is why we are offering this
                  new service, as we know we can deliver non-stop results
                  through our growing team of specialists.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="pt-3 pt-sm-5 align-items-center">
            <Col xs={12} sm={12} md={6} lg={6}>
              <h2>
                Have a <span className="text-primary">Question?</span>
              </h2>
              <p className="mt-3">
                If you are looking for targeted digital advertisements to boost
                lead generation, increase sales, or otherwise help your business
                stand out from the crowd, StraightIn can help. Get in touch
                today to learn how we can devise bespoke LinkedIn Paid Ads
                guaranteed to delight your audience and boost your business.
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

export default LinkedInAdvertising;
