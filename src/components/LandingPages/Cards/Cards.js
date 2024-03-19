import React from "react";
import "./Cards.css";
import { Card, Col, Container, Row } from "react-bootstrap";

const Cards = () => {
  return (
    <section className="Cards py-3 py-sm-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} lg={4} className="mb-3">
            <Card className="border-0 shadow">
              <i className="bi bi-person-circle"></i>
              <p className="mb-0">Profile Enhancement</p>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} className="mb-3">
            <Card className="border-0 shadow">
              <i className="bi bi-people-fill"></i>
              <p className="mb-0">Audience Identification</p>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} className="mb-3">
            <Card className="border-0 shadow">
              <i className="bi bi-person-fill-gear"></i>
              <p className="mb-0">Personalised Connections</p>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} lg={4} className="mb-3">
            <Card className="border-0 shadow">
              <i className="bi bi-gear-fill"></i>
              <p className="mb-0">Conversion Management</p>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} className="mb-3">
            <Card className="border-0 shadow">
              <i className="bi bi-card-heading"></i>
              <p className="mb-0">Content Marketing</p>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} className="mb-3">
            <Card className="border-0 shadow">
              <i className="bi bi-send-fill"></i>
              <p className="mb-0">Outreach Campaigns</p>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} className="mb-3">
            <Card className="border-0 shadow">
              <i className="bi bi-linkedin"></i>
              <p className="mb-0">linkedIn Paid Advertising</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cards;
