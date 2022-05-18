import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const { data: appointments, isLoading } = useQuery("appointment", () =>
    fetch(`https://cavity-care.herokuapp.com/bookings?patient=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
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
        {!appointments ? (
          <div>
            <Loading></Loading>
          </div>
        ) : (
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
        )}
      </section>
    </>
  );
};

export default MyAppointment;
