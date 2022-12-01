import { createBrowserRouter } from "react-router-dom";
import Appointments from "../Components/Appointments/Appointments";
import AddDoctor from "../Components/Dashboard/AddDoctor";
import AllUser from "../Components/Dashboard/AllUser";
import Dashboard from "../Components/Dashboard/Dashboard";
import ManageDoctors from "../Components/Dashboard/ManageDoctors";
import Payment from "../Components/Dashboard/Payment";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/appointments", element: <Appointments /> },
      { path: "/login", element: <Login /> },
      { path: "/signUp", element: <SignUp /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      {
        path: "/dashboard/payment/:id",
        loader: ({ params }) =>
          fetch(
            `https://doctors-portal-server-beta.vercel.app/dashboard/payment/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/allUser",
        element: (
          <AdminRoute>
            {" "}
            <AllUser />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-doctor",
        element: (
          <AdminRoute>
            {" "}
            <AddDoctor />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage_doctors",
        element: (
          <AdminRoute>
            {" "}
            <ManageDoctors />{" "}
          </AdminRoute>
        ),
      },
    ],
  },
]);
