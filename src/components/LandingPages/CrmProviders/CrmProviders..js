import React from "react";
import "./CrmProviders.css";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// images
import Copper from "../../../Assets/Images/Copper.png";
import Zoho from "../../../Assets/Images/Zoho.png";
import Hubspot from "../../../Assets/Images/Hubspot.png";
import Salesforce from "../../../Assets/Images/Salesforce.png";
import Zapier from "../../../Assets/Images/Zapier.png";
import Pipedrive from "../../../Assets/Images/Pipedrive.jpeg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const CrmProviders = () => {
  return (
    <section className="CrmProviders bg-white py-3 py-sm-5">
      <Container>
        <h2 className="text-center">
          We Integrate with all Major CRM Providers
        </h2>
        <div className="Carousel my-3 my-sm-5">
          <Carousel
            responsive={responsive}
            autoPlay
            autoPlaySpeed={1000}
            infinite
          >
            <img src={Copper} />
            <img src={Zoho} />
            <img src={Hubspot} />
            <img src={Salesforce} />
            <img src={Zapier} />
            <img src={Pipedrive} />
          </Carousel>
        </div>
      </Container>
    </section>
  );
};
