import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Components/Common/Header";
import { AuthContext } from "../Context/UserContext";
import useAdmin from "../Hooks/userAdmin";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  return (
    <div>
      <Header />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <Link to={"/dashboard"}>My Appointment</Link>
            </li>
            {isAdmin && (
              <>
              
              <li>
                <Link to={"/dashboard/allUser"}>All Users</Link>
              </li>
              
              <li>
                <Link to={"/dashboard/add-doctor"}>Add Doctor</Link>
              </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
