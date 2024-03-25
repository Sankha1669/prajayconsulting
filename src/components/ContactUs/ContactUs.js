import React from "react";
import "./ContactUs.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const ContactUs = () => {
  document.title = "Contact Us";
  return (
    <section className="py-3 py-sm-5 bg-dark text-white ContactUs">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={12} md={6} lg={6}>
            <h1>Contact Us</h1>
            <div className="mt-3">
              <p>
                The StraightIn service is designed to generate new business by
                getting you in front of the right people at the right time.
                Contact us to change your company’s future for the better.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Form>
              <Row>
                <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
                  <Form.Control type="text" placeholder="Full Name" />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
                  <Form.Control type="text" placeholder="Company Name" />
                </Col>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <small>
                    Message<span className="text-danger"> *</span>
                  </small>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter your message"
                  />
                  <Button variant="primary py-2 mt-4 w-100">Submit</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
