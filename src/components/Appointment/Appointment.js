import React from "react";
import doctor from "../../images/doctor-small.png";
import appointment from "../../images/appointment.png";

const Appointment = () => {
  return (
    <div className=" min-h-screen my-40">
      <div
        style={{ backgroundImage: `url(${appointment})` }}
        className="flex flex-col lg:flex-row justify-center items-center bg-no-repeat bg-cover h-[475px]"
      >
        <div>
          <img
            src={doctor}
            className="rounded-lg hidden lg:block lg:w-[600px] mx-auto mb-24"
            alt=""
          />
        </div>
        <div className="flex flex-col lg:items-start text-left items-center lg:w-[600px] p-10">
          <h1 className="text-primary text-2xl my-4 font-semibold">
            Appointment
          </h1>
          <h1 className="text-3xl font-bold text-white">
            Make an appointment Today
          </h1>
          <p className="py-6 text-white">
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

export default Appointment;
