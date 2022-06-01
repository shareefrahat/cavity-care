import React, { useEffect } from "react";
import treatment from "../../images/treatment.png";
import AOS from "aos";

const Feature = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, []);
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div data-aos="zoom-in-right">
          <img
            src={treatment}
            className="rounded w-full px-10 lg:w-[460px] mx-auto"
            alt=""
          />
        </div>
        <div
          data-aos="zoom-in-left"
          className="flex flex-col lg:items-start text-left w-full lg:w-[600px] px-10"
        >
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
