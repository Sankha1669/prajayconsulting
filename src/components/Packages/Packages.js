import React from "react";
import OurPackages from "./OurPackages/OurPackages";
import PackagesPlans from "./PackagesPlans/PackagesPlans";

const Packages = () => {
  document.title = "Packages";
  return (
    <div>
      <OurPackages />
      <PackagesPlans />
    </div>
  );
};

export default Packages;
