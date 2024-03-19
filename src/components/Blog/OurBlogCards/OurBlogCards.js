import React from "react";
import "./OurBlogCards.css";
import { Col, Container, Row } from "react-bootstrap";

import OurBlog1 from "../../../Assets/Images/OurBlog1.png";
import OurBlog2 from "../../../Assets/Images/OurBlog2.png";
import OurBlog3 from "../../../Assets/Images/OurBlog3.png";
import OurBlog4 from "../../../Assets/Images/OurBlog4.png";
import OurBlog5 from "../../../Assets/Images/OurBlog5.png";
import OurBlog6 from "../../../Assets/Images/OurBlog6.png";
import OurBlog7 from "../../../Assets/Images/OurBlog7.png";
import OurBlog8 from "../../../Assets/Images/OurBlog8.png";

const OurBlogCards = () => {
  return (
    <section className="py-3 py-sm-5 bg-dark text-white OurBlogCards">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
            <img src={OurBlog1} className="img-fluid" />
            <div className="bg-white text-dark p-3 pt-sm-4 border-top">
              <h4>
                Leveraging Personal Branding for Senior Leadership Success
              </h4>
              <p className="links">
                By <a href="#">Abbey Coleman</a> | February 26, 2024 |{" "}
                <a href="#">Lead Generation</a>
              </p>
              <p>
                "Why bother with personal branding?" you might wonder. Well,
                let's unpack that. In today's cutthroat digital landscape,
                personal branding isn't just a trendy term—it's a vital
                strategy. As professionals navigate industries marked by
                relentless change [...]
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
            <img src={OurBlog2} className="img-fluid" />
            <div className="bg-white text-dark p-3 pt-sm-4 border-top">
              <h4>Elevating Your Thought Leadership on LinkedIn</h4>
              <p className="links">
                By <a href="#">Abbey Coleman</a> | February 23, 2024 |{" "}
                <a href="#">Marketing</a>
              </p>
              <p>
                "Why bother with personal branding?" you might wonder. Well,
                let's unpack that. In today's cutthroat digital landscape,
                personal branding isn't just a trendy term—it's a vital
                strategy. As professionals navigate industries marked by
                relentless change [...]
              </p>
            </div>
          </Col>

          <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
            <img src={OurBlog3} className="img-fluid" />
            <div className="bg-white text-dark p-3 pt-sm-4 border-top">
              <h4>Hashtags: How Useful Are They On LinkedIn?</h4>
              <p className="links">
                By <a href="#">Abbey Coleman</a> | February 26, 2024 |{" "}
                <a href="#">News</a>
              </p>
              <p>
                When we talk about hashtags, Twitter usually comes to mind
                first, sorry X, as it's where they're most commonly used. You're
                probably familiar with using hashtags on platforms like TikTok
                and Instagram as well, where [...]
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
            <img src={OurBlog4} className="img-fluid" />
            <div className="bg-white text-dark p-3 pt-sm-4 border-top">
              <h4>Should you use Generative AI to write LinkedIn Articles?</h4>
              <p className="links">
                By <a href="#">Joe Brown</a> | February 23, 2024 |{" "}
                <a href="#">Marketing</a>
              </p>
              <p>
                Generative AI has become a hot topic of discussion over the past
                few years, and it's no surprise why. With its ability to
                autonomously generate text, images, and even music, it has
                captured the imagination [...]
              </p>
            </div>
          </Col>

          <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
            <img src={OurBlog5} className="img-fluid" />
            <div className="bg-white text-dark p-3 pt-sm-4 border-top">
              <h4>
                Crafting Your Identity: Maintaining Credibility on LinkedIn
              </h4>
              <p className="links">
                By <a href="#">Abbey Coleman</a> | February 26, 2024 |{" "}
                <a href="#">Marketing</a>
              </p>
              <p>
                When it comes to professional networking, LinkedIn stands as out
                as the go-to platform for showcasing one’s expertise, building
                meaningful connections, and promoting career growth. Why?
                Because LinkedIn is the only social media platform for [...]
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
            <img src={OurBlog6} className="img-fluid" />
            <div className="bg-white text-dark p-3 pt-sm-4 border-top">
              <h4>
                Strategic Guide: Maximising Advertising Services on LinkedIn
              </h4>
              <p className="links">
                By <a href="#">Joe Brown</a> | February 23, 2024 |{" "}
                <a href="#">Marketing</a>
              </p>
              <p>
                LinkedIn has emerged as the preferred platform for professionals
                and has become an essential tool for businesses and advertisers
                seeking to connect with a targeted and engaged audience. Using
                LinkedIn's advertising services can significantly benefit [...]
              </p>
            </div>
          </Col>

          <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
            <img src={OurBlog7} className="img-fluid" />
            <div className="bg-white text-dark p-3 pt-sm-4 border-top">
              <h4>
                The most common LinkedIn mistakes stopping you from getting
                leads
              </h4>
              <p className="links">
                By <a href="#">Abbey Coleman</a> | February 26, 2024 |{" "}
                <a href="#">Lead Generation</a>
              </p>
              <p>
                LinkedIn is a fantastic platform for lead generation - in fact,
                according to a study by LinkedIn, it is the number one platform
                for lead generation, with 4 out of 5 of its members driving
                business [...]
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
            <img src={OurBlog8} className="img-fluid" />
            <div className="bg-white text-dark p-3 pt-sm-4 border-top">
              <h4>
                A Strategic Guide to LinkedIn Ads for B2B Marketing Success
              </h4>
              <p className="links">
                By <a href="#">Joe Brown</a> | February 23, 2024 |{" "}
                <a href="#">Marketing</a>
              </p>
              <p>
                LinkedIn ads might seem a bit on the pricey side, but there's a
                reason for it. Firstly, it's not a traditional media channel
                like Google Ads or Bing, where users might be looking for
                information [...]
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurBlogCards;
