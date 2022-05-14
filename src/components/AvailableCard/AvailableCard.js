import { format } from "date-fns";
import React, { useState } from "react";
import useServices from "../../hooks/useServices";
import BookingCard from "../BookingCard/BookingCard";
import BookingModal from "../BookingModal/BookingModal";

const AvailableCard = ({ date }) => {
  const [services] = useServices();
  const [treatment, setTreatment] = useState(null);

  return (
    <div className="my-10">
      <h4 className="text-xl text-secondary text-center my-12">
        Available Appointments on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <BookingCard
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></BookingCard>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableCard;
