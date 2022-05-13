import React from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../images/chair.png";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img
            src={chair}
            className="rounded-lg shadow-2xl w-[375px] lg:w-[600px] mx-auto"
            alt=""
          />
        </div>
        <div className="flex flex-col lg:items-start text-left w-[375px] lg:w-[600px]">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
