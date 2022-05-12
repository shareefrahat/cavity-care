import React from "react";
import clock from "../../icons/clock.svg";
import marker from "../../icons/marker.svg";
import phone from "../../icons/phone.svg";
import InfoCard from "../InfoCard/InfoCard";

const Info = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <InfoCard
          cardTitle="Opening Hours"
          bgClass="bg-gradient-to-r from-secondary to-primary"
          img={clock}
        ></InfoCard>
        <InfoCard
          cardTitle="Our Locations"
          bgClass="bg-[#3A4256]"
          img={marker}
        ></InfoCard>
        <InfoCard
          cardTitle="Contact Us"
          bgClass="bg-gradient-to-r from-secondary to-primary"
          img={phone}
        ></InfoCard>
      </div>
    </>
  );
};

export default Info;
