import { useSelector } from "react-redux";
import { selectLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};