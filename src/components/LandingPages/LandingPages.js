import React from "react";
import Banner from "../../components/LandingPages/Banner/Banner";
import Clients from "../../components/LandingPages/Clients/Clients";
import ReqCallback from "../../components/LandingPages/ReqCallBack/ReqCallback";
import LeadGenService from "../../components/LandingPages/LeadGenService/LeadGenService";
import Cards from "../../components/LandingPages/Cards/Cards";
import GeneratedLeads from "../../components/LandingPages/GeneratedLeads/GeneratedLeads";
import OurProcess from "../../components/LandingPages/OurProcess/OurProcess";
import TrustedBy from "../../components/LandingPages/TrustedBy/TrustedBy";
import OurClients from "../../components/LandingPages/OurClients/OurClients";
import { CrmProviders } from "./CrmProviders/CrmProviders.";

const LandingPages = () => {
  document.title = "PrajayConsulting";
  return (
    <div>
      <Banner />
      <Clients />
      <ReqCallback />
      <LeadGenService />
      <Cards />
      <GeneratedLeads />
      <OurProcess />
      <TrustedBy />
      <OurClients />
      <CrmProviders />
    </div>
  );
};

export default LandingPages;
