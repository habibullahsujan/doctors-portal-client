import React, { useContext } from "react";
import { Vortex } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const location = useLocation();
  if (user) {
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Vortex
          visible={true}  
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["black", "gray", "slate", "white", "red", "blue"]}
        />
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
