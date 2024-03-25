import React from "react";
import "./Testimonials.css";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";

import testimonials from "../../../Assets/Images/testimonials.png";
import TrustedBy from "../../LandingPages/TrustedBy/TrustedBy";
import { Link } from "react-router-dom";

const Testimonials = () => {
  document.title = "Testimonials";
  return (
    <div>
      <section className="pt-3 pt-sm-5 bg-dark text-white Testimonials">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6}>
              <h1>Testimonials</h1>
              <div className="mt-3 mt-sm-4">
                <p>
                  At StraightIn we provide a world class service that supports
                  your business growth efforts. Hear from a selection of valued
                  clients and see for yourself what we can do for you.
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="text-center">
              <img
                src={testimonials}
                className="img-fluid"
                height="540"
                width="400"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 TestimonialsCarousal">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={8}>
              <Carousel>
                <Carousel.Item>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <span class="text-primary">
                    <strong>Victor Pryshlyak</strong>,{" "}
                    <span>Managing Partner - United Software</span>
                  </span>
                </Carousel.Item>

                <Carousel.Item>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <span class="text-primary">
                    <strong>Victor Pryshlyak</strong>,{" "}
                    <span>Managing Partner - United Software</span>
                  </span>
                </Carousel.Item>

                <Carousel.Item>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <span class="text-primary">
                    <strong>Victor Pryshlyak</strong>,{" "}
                    <span>Managing Partner - United Software</span>
                  </span>
                </Carousel.Item>

                <Carousel.Item>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <span class="text-primary">
                    <strong>Victor Pryshlyak</strong>,{" "}
                    <span>Managing Partner - United Software</span>
                  </span>
                </Carousel.Item>

                <Carousel.Item>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <span class="text-primary">
                    <strong>Victor Pryshlyak</strong>,{" "}
                    <span>Managing Partner - United Software</span>
                  </span>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="pt-3 pt-sm-5 bg-dark">
        <TrustedBy />
      </div>

      <section className="py-3 py-sm-5 bg-dark text-white TestimonialsCarousal">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={8}>
              <Carousel>
                <Carousel.Item>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <span class="text-primary">
                    <strong>Victor Pryshlyak</strong>,{" "}
                    <span>Managing Partner - United Software</span>
                  </span>
                </Carousel.Item>

                <Carousel.Item>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <span class="text-primary">
                    <strong>Victor Pryshlyak</strong>,{" "}
                    <span>Managing Partner - United Software</span>
                  </span>
                </Carousel.Item>

                <Carousel.Item>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <span class="text-primary">
                    <strong>Victor Pryshlyak</strong>,{" "}
                    <span>Managing Partner - United Software</span>
                  </span>
                </Carousel.Item>

                <Carousel.Item>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <span class="text-primary">
                    <strong>Victor Pryshlyak</strong>,{" "}
                    <span>Managing Partner - United Software</span>
                  </span>
                </Carousel.Item>

                <Carousel.Item>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <p>
                    <q>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </q>
                  </p>
                  <span class="text-primary">
                    <strong>Victor Pryshlyak</strong>,{" "}
                    <span>Managing Partner - United Software</span>
                  </span>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-sm-5 TestimonialsThink">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={8} lg={5}>
              <h2>
                Think StraightIn is Right for{" "}
                <span className="text-primary">You?</span>
              </h2>
              <p>
                Speak to the StraightIn team to learn more about how we can help
                you.
              </p>
              <Button
                variant="primary"
                className="py-2 px-4"
                as={Link}
                to="/contactus"
              >
                Get in Touch
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Testimonials;
