import React from "react";
import "./ReqCallback.css";
import {
  Col,
  Container,
  Row,
  FloatingLabel,
  Form,
  Button,
} from "react-bootstrap";
import reqCallBackImg from "../../../Assets/Images/request-callback.png";

const ReqCallback = () => {
  return (
    <section className="ReqCallback bg-light pt-5 pt-sm-5 pb-5 pb-sm-5">
      <Container>
        <h2 className="mt-2 text-primary text-center">Request a Callback</h2>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} sm={12} md={6} lg={6}>
            <img src={reqCallBackImg} className="img-fluid" />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control type="text" placeholder="Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Control type="text" placeholder="Phone Number" />
            </Form.Group>
            <Button className="w-100" variant="primary">
              Send Request
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ReqCallback;
