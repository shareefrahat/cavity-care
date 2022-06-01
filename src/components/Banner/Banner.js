import React, { useEffect } from "react";
import chair from "../../images/chair.png";
import AOS from "aos";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, []);
  return (
    <div className="hero min-h-screen w-fit mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div data-aos="fade-left">
          <img
            src={chair}
            className="rounded-lg shadow-2xl w-[300px] lg:w-[600px] mx-auto"
            alt=""
          />
        </div>
        <div
          data-aos="fade-right"
          className="flex flex-col lg:items-start text-left w-[300px] lg:w-[600px]"
        >
          <h1 className="text-3xl w- lg:text-5xl font-bold">
            Your New Smile Starts Here
          </h1>
          <p className="py-6 ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
