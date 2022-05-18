import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading/Loading";

const ManageDoctor = () => {
  const { data: doctors, isLoading } = useQuery("doctors", () =>
    fetch(`https://cavity-care.herokuapp.com/doctors`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <section>
        <h4 className="my-10 text-xl">Manage doctor </h4>
        <p>Total doctor: {doctors.length}</p>
      </section>
    </>
  );
};

export default ManageDoctor;
