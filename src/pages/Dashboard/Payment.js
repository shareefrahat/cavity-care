import React from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { id } = useParams();
  return <div>payment of {id}</div>;
};

export default Payment;
