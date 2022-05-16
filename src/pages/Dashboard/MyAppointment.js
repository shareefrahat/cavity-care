import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Loading from "../../components/Loading/Loading";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [user] = useAuthState(auth);
  const { data: appointments, isLoading } = useQuery("appointment", () =>
    fetch(`http://localhost:5000/bookings?patient=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      {" "}
      <section>
        <h4 className="text-xl">User: {user?.email}</h4>
        <h4 className="text-xl">Total Appointment: {appointments.length}</h4>
      </section>
      <section>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Appointment Name</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {appointments?.map((appointment, index) => (
                <tr key={appointment._id}>
                  <th>{index + 1}</th>
                  <td>{appointment.treatment}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.slot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default MyAppointment;
