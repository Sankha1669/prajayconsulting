import React from "react";
import "./WorkWithUs.css";
import { Card, Col, Container, Row } from "react-bootstrap";

const WorkWithUs = () => {
  return (
    <section className="py-3 py-sm-5 bg-dark WorkWithUs text-white">
      <Container>
        <h1 className="text-center">Choose how you work with us</h1>
        <Row className="justify-content-center mt-3 mt-sm-5">
          <Col xs={12} sm={12} md={5} lg={5} className="mb-3">
            <Card className="border-0 px-4 py-4 shadow text-center text-white">
              <h1>White Label</h1>
              <div className="mt-3">
                <p>
                  This method is where the client has no idea we exist, we
                  report only to you and keep client confidentiality at the
                  centre of what we do.
                </p>
              </div>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5} className="mb-3">
            <Card className="border-0 px-4 py-4 shadow text-center text-white">
              <h1>White Label</h1>
              <div className="mt-3">
                <p>
                  This method is where the client has no idea we exist, we
                  report only to you and keep client confidentiality at the
                  centre of what we do.
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorkWithUs;
