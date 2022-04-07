import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./context";

const RequiresAuth = ({ children }) => {
  const location = useLocation();
  const {
    authState: { token },
  } = useAuth();

  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { RequiresAuth };
