import { format } from "date-fns";
import React from "react";

const AvailableCard = ({ date }) => {
  return (
    <div className="my-10">
      <h4 className="text-xl text-secondary text-center my-12">
        Available Appointments on {format(date, "PP")}
      </h4>
      {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                ></Service>)
            }
        </div>
        {treatment && <BookingModal
            date={date}
            treatment={treatment}
            setTreatment={setTreatment}
        ></BookingModal>} */}
    </div>
  );
};

export default AvailableCard;
