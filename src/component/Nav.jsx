import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../utils/Constant';
import { removeUser } from "../utils/userSlice";
import { logout } from "../utils/loginSlice";
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, userInfo } = useSelector((state) => state.login);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Auto logout if token expires
  useEffect(() => {
    const expiryTime = localStorage.getItem("expiryTime");
    if (expiryTime && Date.now() > expiryTime) {
      handleLogout();
    }
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true });
      dispatch(logout());
      dispatch(removeUser());
      navigate("/login");
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className="bg-white text-black p-4 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Brand Name */}
       
        <div className="flex items-center gap-3">
        <Link to="/app" className="text-2xl font-bold text-blue-700">
          <img
            src="https://medanta.s3.ap-south-1.amazonaws.com/technologies/February2024/fokL3D8sSOClOGRzJX3UEKuFHDGMeZ-metaQ3liZXItS25pZmVfNTE0eDQwMC5wbmc=-.png"
            alt="Logo"
            className="h-12 w-12 rounded-full"
          />
          </Link>
          <Link to="/app" className="text-2xl font-bold text-blue-700">
            MedCare
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/app" className="hover:text-blue-500">Home</Link>
          <Link to="/app/abouts" className="hover:text-blue-500">About</Link>
          <Link to="/app/services" className="hover:text-blue-500">Services</Link>
          <Link to="/app/contact" className="hover:text-blue-500">Contact</Link>

          {/* User Info */}
          {token && userInfo ? (
            <div className="relative">
              <button
                className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg hover:bg-gray-200"
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              >
                <img
                  src={userInfo.data.photoUrl || '/default-user.png'}
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
                <FaUserCircle className="text-xl text-blue-700" />
              </button>

              {/* Profile Dropdown */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2">
                  <Link to="/app/profile" className="block px-4 py-2 hover:bg-gray-100">
                    Profile
                  </Link>
                  <Link to="/Appointment" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Book Appointment</Link>
                  
                  <Link to='/'>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-end">
          <div className="w-64 bg-white h-full p-6">
            <button className="text-xl" onClick={() => setIsMenuOpen(false)}>
              <FaTimes />
            </button>

            <div className="flex flex-col mt-6 space-y-4">
              <Link to="/app" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/app/abouts" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/app/services" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link to="/app/contact" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Contact</Link>

              {token && userInfo ? (
                <>
                  <Link to="/profile" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Profile</Link>.
                  <Link to="/Appointment" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Book Appointment</Link>
                  
                  <Link to='/'>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="text-red-600"
                  >
                    Logout
                  </button>
                  </Link>
                </>
              ) : (
                <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
