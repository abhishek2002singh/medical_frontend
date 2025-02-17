import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/Constant";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShimmerGetToken from "../component/shimmer/ShimmerGetToken";

const GetToken = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const checkToken = useSelector((state) => state.aptoken);
  console.log(checkToken?.appointment?._id)

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
            BASE_URL+"/appointments",
            
            {
              withCredentials: true, // Allow cookies to be sent
            }
          );

        

       
        setAppointments(response?.data?.appointments);
        console.log(response)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  console.log(appointments?.length)

  if (loading) return <p className="text-center text-gray-500"><ShimmerGetToken /></p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto mt-32 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
        Your Appointment Tokens
      </h2>
     
      {appointments?.length === 0 ? (
        <p className="text-center text-gray-500">No appointments found</p>
      ) : (
        <div className="space-y-4">
          {appointments.map((appointment, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-md bg-blue-50"
            >
              
              <p className="text-lg font-semibold text-gray-700">
                Doctor: <span className="text-blue-600">{appointment.doctorName}</span>
              </p>
              <p className="text-lg font-semibold text-gray-700">
                Patient: <span className="text-blue-600">{appointment.firstName+" "+appointment.lastName}</span>
              </p>
              <p className="text-lg font-semibold text-gray-700">
                Age: <span className="text-blue-600">{appointment.age}</span>
              </p>
              <p className="text-lg font-semibold text-gray-700">
              mobileNumber: <span className="text-blue-600">{appointment.mobileNumber}</span>
              </p>
              <p className="text-lg font-semibold text-gray-700">
                Disease: <span className="text-blue-600">{appointment.disease}</span>
              </p>
              <p className="text-lg font-semibold text-gray-700">
                Token Number: <span className="text-red-600 font-bold text-xl">{index+1}</span>
              </p>
            </div>
          ))}
        </div>
      )}
      <Link to='/app'>

         <button
           
           className="w-full mt-9 p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          
         >Home Page
           
         </button>
      </Link>


    </div>
  );
};

export default GetToken;
