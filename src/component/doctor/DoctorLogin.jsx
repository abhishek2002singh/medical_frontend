import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DoctorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "doctor@gmail.com" && password === "Doctor@1234") {
      localStorage.setItem("adminAuthenticated", "true");
      toast.success("Login Successful!");
      navigate("/doctor");
    } else {
      toast.error("Invalid Admin Credentials!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Doctor Login</h2>
        
        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button 
          onClick={handleLogin} 
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default DoctorLogin;
