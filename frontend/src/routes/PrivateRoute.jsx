import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children, roles }) => {
  const { currentUser } = useAuth();
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const hasRole = roles
    ? roles.some((role) => currentUser.roles.includes(role))
    : true;

  if (!hasRole) return <Navigate to="/" replace />;

  return children;
};

export default PrivateRoute;
