import React from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../images/chair.png";

const AppointmentBanner = ({ date, setDate }) => {
  const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid #0FCFEC;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: #0FCFEC;
    color: #19D3AE;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: #0FCFEC;
  }
`;
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
          <style>{css}</style>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            modifiersClassNames={{
              selected: "my-selected",
              today: "my-today",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
