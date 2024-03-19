import React from "react";
import "./Foragencies.css";
import { Col, Container, Row } from "react-bootstrap";
import B2BImg from "../../../Assets/Images/B2bImg.png";

const Foragencies = () => {
  return (
    <section className="pt-3 pt-sm-5 text-white bg-dark Foragencies">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={12} md={6} lg={6}>
            <h1>For Agencies</h1>
            <div className="my-3 my-sm-5">
              <p>
                We strive to help as many people and businesses as we can. To do
                so, we partner with more than 100 marketing agencies globally,
                giving them the ability to run world-class LinkedIn Marketing
                campaigns for their clients.
              </p>
            </div>
            <div>
              <h4>
                We <span className="text-primary">help</span> you focus on what
                you do best, while we on what we do{" "}
                <span className="text-primary">best</span>{" "}
              </h4>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="text-center">
            <img src={B2BImg} className="img-fluid" height="540" width="400" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Foragencies;
