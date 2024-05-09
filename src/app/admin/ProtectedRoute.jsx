import useAuth from "@/hooks/useAuth";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { isFetching, user } = useAuth();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  const isUserAuthenticated =
    isAuthenticated || (user !== null && user !== undefined);

  return isUserAuthenticated ? children : <Navigate to="/login" />;
};
