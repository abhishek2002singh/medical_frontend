import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/Constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setCredentials } from "../utils/loginSlice";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const showToast = (message, type = "success") => {
    toast[type](message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/login`, { emailId, password }, { withCredentials: true });
      dispatch(addUser(res.data));
    
      dispatch(setCredentials({ token: res.data.token, userInfo: res.data }));
      console.log(res?.data?.token)
      console.log(res.data)
      localStorage.setItem("token", res.data.token)
      showToast("Login Successful!");
      console.log(res.data)
      navigate("/app");
    } catch (err) {
      console.error(err);
      console.log(err)
      showToast("Login Failed. "+ err?.response?.data);
    }
    setLoading(false);
  };

  const handleSignup = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/signup`, { firstName, lastName, emailId, password }, { withCredentials: true });
      dispatch(addUser(res.data));
      dispatch(setCredentials({ token: res.data.token, userInfo: res.data }));
      showToast("Signup Successful!");
      navigate("/app");
    } catch (err) {
      console.error(err);
      showToast("Signup Failed. "+ err?.response?.data);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <ToastContainer />
      <header className="w-full top-0 fixed bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-5 shadow-lg">
        <h1 className="text-3xl font-bold">Welcome to MedCare</h1>
        <p className="text-sm mt-1">Login, Signup & Explore the Best Specialty</p>
      </header>

      <section className="bg-white shadow-xl border-4 border-blue-400 rounded-lg p-8 mt-8 w-full max-w-md transition duration-300 hover:shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-6">{isSignup ? "Sign Up" : "Log In"}</h2>

        {isSignup && (
          <>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              className="text-sm w-full px-4 py-2 border border-gray-400 rounded mb-4 focus:border-blue-500 focus:ring focus:ring-blue-200"
              type="text"
              placeholder="Enter First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              className="text-sm w-full px-4 py-2 border border-gray-400 rounded mb-4 focus:border-blue-500 focus:ring focus:ring-blue-200"
              type="text"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

           
          </>
        )}

        <label className="block text-sm font-medium mb-1">Email ID</label>
        <input
          className="text-sm w-full px-4 py-2 border border-gray-400 rounded mb-4 focus:border-blue-500 focus:ring focus:ring-blue-200"
          type="email"
          placeholder="Enter Email ID"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
        />

        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          className="text-sm w-full px-4 py-2 border border-gray-400 rounded mb-6 focus:border-blue-500 focus:ring focus:ring-blue-200"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="text-center">
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 mb-4 w-full"
            onClick={isSignup ? handleSignup : handleLogin}
          >
            {loading ? "Processing..." : isSignup ? "Sign Up" : "Login"}
          </button>
          <p className="text-sm">
            {isSignup ? "Already have an account?" : "Don't have an account?"}
            <button className="text-blue-500 font-semibold ml-1" onClick={() => setIsSignup(!isSignup)}>
              {isSignup ? "Log In" : "Sign Up"}
            </button>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
