import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Feed from "./Feed";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token"); // Get token from localStorage
  const navigate = useNavigate();
  console.log('token in pro '+token)

  useEffect(() => {
    if (!token) {
      navigate("/login"); // Redirect to login if token is missing
    }
  }, [token, navigate]);

  return token ? <Feed /> : null; // Render Feed only if token exists
};

export default ProtectedRoute;
