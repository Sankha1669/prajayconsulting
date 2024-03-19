import React from "react";
import "./OurBlog.css";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import OurBlogImg from "../../../Assets/Images/OurBlog.png";

const OurBlog = () => {
  return (
    <section className="py-3 py-sm-5 bg-dark text-white OurBlog">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={12} md={6} lg={6}>
            <h1>Our Blog</h1>
            <div className="mt-2 mt-sm-4">
              <p>
                Keep up to date with all things Linkedin marketing. Find out
                about maximising connections, attracting interest, and much
                more.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="text-center">
            <img
              src={OurBlogImg}
              className="img-fluid"
              height="540"
              width="400"
            />
          </Col>
        </Row>
        <Row className="mt-3 mt-sm-4">
          <Col xs={12} md={12}>
            <Card className="border-0 py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="bi bi-search"></i>
                <Form.Control
                  type="text"
                  placeholder="search"
                  className="pill"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurBlog;
