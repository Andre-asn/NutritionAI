import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
  const { isSignedIn } = useUser();
  return isSignedIn ? children : <Navigate to="/" />;
}
