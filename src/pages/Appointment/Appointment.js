import React, { useState } from "react";
import AppointmentBanner from "../../components/AppointmentBanner/AppointmentBanner";
import AvailableCard from "../../components/AvailableCard/AvailableCard";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <section>
        <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      </section>
      <section className="max-w-screen-xl px-10 lg:px-0 mx-auto">
        <AvailableCard date={date}></AvailableCard>
      </section>
    </>
  );
};

export default Appointment;
