import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L15UzHV7MVM9BNLOXryqdXkftGRYRa9fRDrKEXzZnw54jYTucKFjsGAbezDquxD4sZeLmWJFxKOPNLrtHvtWUj700eBFKXNrA"
);

const Payment = () => {
  const { id } = useParams();

  const url = `http://localhost:5000/bookings/${id}`;
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <section>
        <div className="p-5 border border-primary shadow-lg w-fit mx-auto text-xl rounded text-left">
          <h4 className="text-xl text-secondary font-bold">
            Hello, {appointment.patientName}
          </h4>
          <h4 className="text-xl font-bold">
            Please pay for {appointment.treatment}
          </h4>
          <p>
            Schedule: {appointment.date} at {appointment.slot}
          </p>
          <p>
            Total Amount:{" "}
            <span className="text-red-700">${appointment.price}</span>
          </p>
        </div>
      </section>
      <section>
        <div className="p-5 border border-primary shadow-lg w-full lg:w-1/2 mx-auto text-xl rounded text-left my-10">
          <div className="mb-5">Payment Gateway</div>
          <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm appointment={appointment} />
            </Elements>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
