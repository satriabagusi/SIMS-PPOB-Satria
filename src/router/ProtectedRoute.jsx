import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({element}) => {
  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  return (
    isAuthenticated ? (
      element
    ) : (
      <Navigate to="/login" replace />
    )
  );
}

export default ProtectedRoute;