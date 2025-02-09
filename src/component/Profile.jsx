import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const userInfo = useSelector((state) => state.login.userInfo.data);
  console.log(userInfo)

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-28">
      <h2 className="text-2xl font-semibold text-center mb-4">User Profile</h2>

      {userInfo ? (
        <div className="space-y-4">
          <p><strong>Name:</strong> {userInfo.firstName} {userInfo.lastName}</p>
          <p><strong>Email:</strong> {userInfo.emailId}</p>
          <p><strong>Mobile:</strong> {userInfo.mobileNumber}</p>
          <p><strong>Gender:</strong> {userInfo.gender}</p>
          <div>
          <Link to='/app/edit-profile'>
        <div className="bg-green-600 w-auto text-center text-white mx-auto px-3 py-3 rounded mt-8  hover:bg-green-700 transition">
            <h4>EDIT PROFILE ...</h4>
        </div>
        </Link>
          </div>
        </div>
        
      ) : (
        <p className="text-center text-red-600">No user information available.</p>
      )}
    </div>
  );
};

export default Profile;
