import React from "react";
import "./LeadGenService.css";
import { Container } from "react-bootstrap";

const LeadGenService = () => {
  return (
    <section className="LeadGenService text-center py-4 py-sm-5">
      <Container>
        <h2>
          Our LinkedIn B2B Lead Generation{" "}
          <span className="text-primary">Services</span>
        </h2>
        <p className="mt-3 w-75 mx-auto mt-sm-4">
          Our range of non- automated LinkedIn B2B lead generation services have
          been specifically created to boost your business. Increasing your
          online presence, whilst reflecting your brand and positioning as a
          trustworthy leader in your industry. Here’s what we do:
        </p>
      </Container>
    </section>
  );
};

export default LeadGenService;
