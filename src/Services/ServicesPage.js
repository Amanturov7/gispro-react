import React from "react";
import MyNavbar from "../components/MyNavbar";
import FooterSection from "../components/footer2";
import ServicesDetails from "./compopnent/ServicesDetails";

const ServicesPage = () => {
  return (
    <div>
        <MyNavbar />
      <ServicesDetails />

      <FooterSection />
    </div>
  );
};

export default ServicesPage;
