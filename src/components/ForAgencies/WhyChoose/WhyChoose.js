import React from "react";
import "./WhyChoose.css";
import { Col, Container, Row } from "react-bootstrap";

const WhyChoose = () => {
  return (
    <section className="text-white bg-dark py-3 py-sm-5 WhyChoose">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={7} lg={7}>
            <h2>
              Why Choose <span className="text-primary">PrajayConsulting</span>
            </h2>
            <div className="mt-3">
              <p>
                The team at StraightIn are specialists; specialists in lead
                generation, specialists in giving your business an advantage on
                the competition, specialists in getting results. Using our
                expertise we can create the perfect strategy for you to open up
                a whole new avenue of opportunity for your business. All of
                this, with absolutely no automation — fact.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChoose;
