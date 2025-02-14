import React, { useEffect } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import checkPrivateRoute from "../functions/routeCheck/checkPrivateRoute";

const PrivateRouteCheck = () => {
  const navigate = useNavigate();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const location = useLocation();
  useEffect(() => {
    const result = checkPrivateRoute(location.pathname);
    if (result == "private") {
      if (!accessToken) {
        navigate("/");
      }
    } else if (result == "public") {
      if (accessToken) {
        navigate("/dashboard");
      }
    }
  }, [location]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRouteCheck;
