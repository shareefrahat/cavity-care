import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <h1 className="text-2xl text-primary font-bold text-left">Dashboard</h1>
        <label
          for="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Sidebar
        </label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Appointment</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Review</Link>
          </li>
          <li>
            <Link to="/dashboard/history">History</Link>
          </li>
          {admin && (
            <>
              <li>
                <Link to="/dashboard/allUsers">All User</Link>
              </li>
              <li>
                <Link to="/dashboard/addDoctor">Add Doctor</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
