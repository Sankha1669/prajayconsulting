import React from "react";
import "./OurClients.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const OurClients = () => {
  return (
    <section className="OurClients bg-white p-0 pb-0">
      <div className="d-flex flex-column flex-md-row">
        <div className="flex-1 p-3 p-sm-5 bg-dark">
          <div className="text-center text-sm-end pe-3 pe-sm-5 d-flex justify-content-end flex-column">
            <h2 className="text-white">Our Clients</h2>
            <h2 className="text-primary">Says</h2>
          </div>
        </div>
        <div className="flex-1 p-3 p-sm-5">
          <Carousel>
            <Carousel.Item>
              <p className="text-white text-center">
                <q>
                  “I highly recommend Georgia, she has been outstanding in
                  qualifying meaningful contacts and increasing the size of my
                  network.
                </q>
              </p>
              <p className="text-white text-center">
                <q>
                  She helped me build a pipeline with over 150+ qualified leads
                  in a short period of time. Her regular status reports and
                  pursuit lists make the task of turning leads into sales very
                  precise. I have found her to be an excellent communicator who
                  cares and drives our success.”
                </q>
              </p>
              <p className="text-primary author">
                <strong>Sanjiv Purba</strong>, <span>Prodigy Labs</span>
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <p className="text-white text-center">
                <q>
                  “StraightIn successfully built us a LinkedIn network precisely
                  focused on our specific target group.
                </q>
              </p>
              <p className="text-white text-center">
                <q>
                  Their service also converted this network into valuable leads.
                  They are as effective in their work as they are friendly and
                  forthcoming when interacting with us.”
                </q>
              </p>
              <p className="text-primary author">
                <strong>Marcus Schuller</strong>,{" "}
                <span>Panthera Solutions</span>
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <p className="text-white text-center">
                <q>
                  “We have seen very fast results from Emily and the team at
                  Straight in, leading to 2 pitches and some quality potentials
                  that are beginning to help fill the voids in our sales
                  pipeline. Highly recommended.”
                </q>
              </p>
              <p className="text-primary author">
                <strong>Susanne Bell </strong>,{" "}
                <span>Marketing Services Director </span>
                <div>- Ledgard Jepson</div>
              </p>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
