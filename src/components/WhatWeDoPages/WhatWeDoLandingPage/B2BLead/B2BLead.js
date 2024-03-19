import React from "react";
import "./B2BLead.css";
import { Col, Container, Row } from "react-bootstrap";
import B2bImg from "../../../../Assets/Images/B2bImg.png";

const B2BLead = () => {
  document.title = "What We Do";
  return (
    <div className="bg-dark pt-3 pt-sm-5 text-white B2BLead">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={12} md={6} lg={6} className="text-center">
            <img src={B2bImg} className="img-flui" height="540" width="400" />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className="pt-5 pt-sm-0 pb-5 pb-sm-0"
          >
            <h1>LinkedIn B2B Lead Generation Services</h1>
            <div className="mt-3 mt-sm-5">
              <p>
                LinkedIn is thriving. With over 700 million users on LinkedIn,
                getting yourself in front of the people that matter can be
                tricky. That’s where StraightIn comes in. Our LinkedIn B2B Lead
                Generation services are designed to get you noticed and generate
                leads via a bespoke campaign tailor-made for you.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default B2BLead;
