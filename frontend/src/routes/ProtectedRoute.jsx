import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token"); // Check for stored token

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
