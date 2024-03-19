import React from "react";
import "./GeneratedLeads.css";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import WbImage from "../../../Assets/Images/Warner_Bros_logo.png";
import RollsImage from "../../../Assets/Images/Rolls.png";
import McLaren from "../../../Assets/Images/McLaren.png";
import CocaCola from "../../../Assets/Images/CocaCola.png";
import Tesla from "../../../Assets/Images/Tesla.png";
import Addidas from "../../../Assets/Images/Adidas.png";
import Meta from "../../../Assets/Images/Meta.png";
import Chelsea from "../../../Assets/Images/Chelsea.png";
import Rolex from "../../../Assets/Images/Rolex.png";
import Sainsburys from "../../../Assets/Images/Sainsburys.png";
import Google from "../../../Assets/Images/Google.png";
import Barclays from "../../../Assets/Images/Barclays.png";

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

const GeneratedLeads = () => {
  return (
    <section className="GeneratedLeads bg-light py-4 py-sm-5">
      <Container>
        <h2 className="text-center">
          <span className="text-primary">Leads Generated</span> With
        </h2>
        <div className="Carousel mt-3 mt-sm-5">
          <Carousel
            responsive={responsive}
            autoPlay
            autoPlaySpeed={1000}
            infinite
          >
            <img src={WbImage} width="178px" />
            <img src={RollsImage} width="178px" />
            <img src={McLaren} width="178px" />
            <img src={CocaCola} width="178px" />
            <img src={Tesla} width="178px" />
            <img src={Addidas} width="178px" />
            <img src={Meta} width="178px" />
            <img src={Chelsea} width="178px" />
            <img src={Rolex} width="178px" />
            <img src={Sainsburys} width="178px" />
            <img src={Google} width="178px" />
            <img src={Barclays} width="178px" />
          </Carousel>
          ;
        </div>
      </Container>
    </section>
  );
};

export default GeneratedLeads;
