import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  // Check if admin is authenticated (stored in localStorage)
  const isAdminAuthenticated = localStorage.getItem("isAdmin") === "true";

  if (!isAdminAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default PrivateRoute;