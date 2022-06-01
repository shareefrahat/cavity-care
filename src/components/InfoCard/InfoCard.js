import React, { useEffect } from "react";
import AOS from "aos";

const InfoCard = ({ img, cardTitle, bgClass, aos }) => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos={aos}
      className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}
    >
      <figure className="p-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-white text-center lg:text-left">
        <h2 className="text-2xl font-semibold">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
