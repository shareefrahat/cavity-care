import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
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
                  <th>Price</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {appointments?.map((a, index) => (
                  <>
                    <tr key={a._id}>
                      <th>{index + 1}</th>
                      <td>{a.treatment}</td>
                      <td>${a.price}</td>
                      <td>{a.date}</td>
                      <td>{a.slot}</td>
                      <td>
                        {a.price && !a.paid ? (
                          <Link to={`/dashboard/payment/${a._id}`}>
                            <button className="btn btn-xs btn-error">
                              Pay
                            </button>
                          </Link>
                        ) : (
                          <span className="btn btn-xs btn-success">Paid</span>
                        )}
                      </td>
                    </tr>
                  </>
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
