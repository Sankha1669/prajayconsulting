import React from "react";
import "./TrustedBy.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// images
import Ticketmaster from "../../../Assets/Images/Ticketmaster.png";
import Raukten from "../../../Assets/Images/Raukten.png";
import Storm from "../../../Assets/Images/Storm.png";
import Indeed from "../../../Assets/Images/Indeed.png";
import Pantone from "../../../Assets/Images/Pantone.png";
import Usg from "../../../Assets/Images/Usg.png";
import Altery from "../../../Assets/Images/Altery.png";
import Worldline from "../../../Assets/Images/Worldline.png";
import Revolut from "../../../Assets/Images/Revolut.png";
import Ufc from "../../../Assets/Images/Ufc.png";
import { Container } from "react-bootstrap";

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

const TrustedBy = () => {
  return (
    <section className="TrustedBy bg-dark pb-4 pb-sm-5">
      <Container>
        <h2 className="text-white text-center">
          <span className="text-primary">Trusted</span> By
        </h2>
        <div className="Carousel mt-3 mt-sm-5">
          <Carousel
            responsive={responsive}
            autoPlay
            autoPlaySpeed={1000}
            infinite
          >
            <img src={Ticketmaster} />
            <img src={Raukten} />
            <img src={Storm} />
            <img src={Indeed} />
            <img src={Pantone} />
            <img src={Usg} />
            <img src={Altery} />
            <img src={Worldline} />
            <img src={Revolut} />
            <img src={Ufc} />
          </Carousel>
          ;
        </div>
      </Container>
    </section>
  );
};

export default TrustedBy;
