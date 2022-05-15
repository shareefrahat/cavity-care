import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Loading from "../../components/Loading/Loading";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [user] = useAuthState(auth);
  const { data: appointments, isLoading } = useQuery("appointment", () =>
    fetch(`http://localhost:5000/bookings?patient=${user?.email}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  let serial = 1;
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
              {appointments?.map((appointment) => (
                <tr key={appointment._id}>
                  <th>{serial++}</th>
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
