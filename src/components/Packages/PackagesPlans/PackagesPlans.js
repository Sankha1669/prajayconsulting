import React from "react";
import "./PackagesPlans.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const PackagesPlans = () => {
  return (
    <section className="py-3 py-sm-5 PackagesPlans">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
            <Card className="border-0 px-3 py-4 shadow-lg bg-light text-center ">
              <h4>Fuel</h4>
              <div className="d-flex flex-column gap-3 mt-3 mt-sm-4 packagesDetails">
                <p>Up to 500 Connection Requests</p>
                <p>500 Prospects Messaged</p>
                <p>Full Profile Optimisation</p>
                <p>Dedicated Account Manager</p>
                <p>Proactive follow-up to all messaged connections</p>
                <p>Full Conversation Management</p>
                <p>Appointments booked in your schedule</p>
                <p>No Automation</p>
                <Button variant="primary" className="w-100 py-2 mt-2 mt-sm-4">
                  Find Out More
                </Button>
              </div>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
            <Card className="border-0  shadow-lg bg-light text-center ">
              <div className="bg-warning p-2 text-white fw-bold">
                Most Popular
              </div>
              <div className="px-3 py-4">
                <h4>Boost</h4>
                <div className="d-flex flex-column gap-3 mt-3 mt-sm-4 packagesDetails">
                  <p>Up to 500 Connection Requests</p>
                  <p>500 Prospects Messaged</p>
                  <p>Everything In the Fuel Package</p>
                  <p>Multiple Campaigns</p>
                  <p>One Thousand Word LinkedIn Article Per Month</p>
                  <p>100 Company Page Follow Invites</p>
                  <p>Prospect Engagement</p>
                  <p>Full CRM Integration</p>
                  <p>No Automation</p>
                  <Button
                    variant="primary"
                    className="w-100 py-2  mt-2 mt-sm-4"
                  >
                    Find Out More
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
            <Card className="border-0 px-3 py-4 shadow-lg bg-light text-center ">
              <h4>Velocity</h4>
              <div className="d-flex flex-column gap-3 mt-3 mt-sm-4 packagesDetails">
                <p>Up to 500 Connection Requests</p>
                <p>500 Prospects Messaged</p>
                <p>Everything In the Boost Package</p>
                <p>Cold Email Marketing Campaign to 1000 New Prospects</p>
                <p>2 Follow-Up Emails</p>
                <p>Tried & Tested Email Formula Included</p>
                <p>Free Calendly Subscription</p>
                <p>No Automation</p>
                <Button variant="primary" className="w-100 py-2 mt-2 mt-sm-4">
                  Find Out More
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PackagesPlans;
