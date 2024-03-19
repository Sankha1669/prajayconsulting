import React from "react";
import Foragencies from "./Foragencies/Foragencies";
import ReqCallback from "../LandingPages/ReqCallBack/ReqCallback";
import WorkWithUs from "./WorkWithUs/WorkWithUs";
import HowItWorks from "./HowItWorks/HowItWorks";
import WhyChoose from "./WhyChoose/WhyChoose";

const ForAgencies = () => {
  document.title = "For Agencies";
  return (
    <div>
      <Foragencies />
      <ReqCallback />
      <WorkWithUs />
      <HowItWorks />
      <WhyChoose />
    </div>
  );
};

export default ForAgencies;
