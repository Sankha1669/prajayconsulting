import React from "react";
import "./B2BOurProcess.css";
import { Card, Col, Container, Row } from "react-bootstrap";

const B2BOurProcess = () => {
  return (
    <div className="py-3 py-sm-5 B2BOurProcess">
      <Container>
        <h2>
          Our <span className="text-primary">Process</span>
        </h2>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div>
              <p className="mt-2">
                The secret of StraightIn’s success. Thanks to our unique
                approach, and range of specialist LinkedIn B2B lead generation
                services, we have the skills and knowhow needed to boost your
                business.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="py-3 py-sm-5 justify-content-center">
          <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
            <Card className="px-3 py-3 py-sm-5 border-0 shadow bg-primary text-white B2BCards">
              <h3 className="mb-0">Profile Enhancement</h3>
              <p className="mt-2">
                Building a solid for growth is essential. To achieve this, we'll
                optimise your LinkedIn profile to improve your ranking, appear
                in more searches, and extends your reach. More connections means
                more opportunities.
              </p>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
            <Card className="px-3 py-3 py-sm-5 border-0 shadow bg-primary text-white B2BCards">
              <h3 className="mb-0">Audience Identification</h3>
              <p className="mt-2">
                Target your ressources where they'll matter most. Working with
                you, we'll identify your ideal combination of business types and
                job titles to help your meet your goals. Simply point us in the
                right direction and we'll take care of the rest.
              </p>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
            <Card className="px-3 py-3 py-sm-5 border-0 shadow bg-primary text-white B2BCards">
              <h3 className="mb-0">Personalised Connections</h3>
              <p className="mt-2">
                Make your first impression count and show your prospects you
                mean business. Through Personalised connection message, we'll
                engage with your contacts to capture their interest and initiate
                further conversation.
              </p>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
            <Card className="px-3 py-3 py-sm-5 border-0 shadow bg-primary text-white B2BCards">
              <h3 className="mb-0">Conversation Management</h3>
              <p className="mt-2">
                From start to finish, we'll manage all conversations on your
                behalf, with a view to nurturing relationships and turning them
                into leads. We'll also fully integrate your sale processes into
                our strategy to ensure continuity.
              </p>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
            <Card className="px-3 py-3 py-sm-5 border-0 shadow bg-primary text-white B2BCards">
              <h3 className="mb-0">Content Marketing</h3>
              <p className="mt-2">
                Keep your engaged with optimised and relevant content for your
                business. Using our unique blend of self-produced content,
                infographics and more, we'll keep you at the forefornt of your
                audience's minds.
              </p>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
            <Card className="px-3 py-3 py-sm-5 border-0 shadow bg-primary text-white B2BCards">
              <h3 className="mb-0">Outreach Campaigns</h3>
              <p className="mt-2">
                As a results-driven business, we never like to give up on lead.
                This is why we regularly monitor prospects that may have gone
                cold and follow up on conversations to re-spark their interest
                and improve your return on investment.
              </p>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} className="mb-3">
            <Card className="px-3 py-3 py-sm-5 border-0 shadow bg-primary text-white B2BCards">
              <h3 className="mb-0">LinkedIn Advertising</h3>
              <p className="mt-2">
                As a result-driven business, we want you standout from the
                crowd. Our LinkedIn paid ads offer brands the opportunity to
                gain highly-quality leads. The main benifits of LinkedIn paid
                Ads is that given business owners and marketers the ability to
                reach a specific goa;.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default B2BOurProcess;
