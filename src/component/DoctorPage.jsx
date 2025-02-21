import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../utils/Constant';
import Shimmer from './Shimmer';

const DoctorPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchDoctors = async () => {
      console.log("Fetching doctors from:", `${BASE_URL}/doctors`);
      try {
        const res = await axios.get(`${BASE_URL}/doctors`, { withCredentials: true });
        console.log("Doctors fetched:", res.data);
        setDoctors(res.data);
      } catch (error) {
        console.error("Error fetching doctors:", error.response?.data || error.message);
      }
      setLoading(false); // Set loading to false after fetch attempt
    };

    fetchDoctors();
  }, []);

  return (
    <div className="py-32">
      <h2 className="text-3xl font-bold text-center mb-6">Meet Our Specialists</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {loading ? (
          // Show shimmer placeholders when loading
          [...Array(4)].map((_, index) => <Shimmer key={index} />)
        ) : doctors.length > 0 ? (
          // Show actual doctor data
          doctors.map((doctor, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg text-center hover:bg-gray-100 transition">
              <img
                src={doctor.photoUrl}
                alt={`${doctor.firstName} ${doctor.lastName}`}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
              />
              <p className="text-xl font-bold">{doctor.firstName} {doctor.lastName}</p>
              <p className="text-gray-600">{doctor.specialty}</p>

              <Link to={`/app/appointment/${doctor._id}`} state={{ doctorName: `${doctor.firstName} ${doctor.lastName}`, doctorSpe: doctor.specialty, doctorId: doctor._id }}>
                <button className="bg-green-600 text-white px-4 py-2 rounded mt-3 hover:bg-green-700 transition">
                  Book Appointment
                </button>
              </Link>
            </div>
          ))
        ) : (
          // Show message if no doctors found
          <p className="text-center col-span-2 text-gray-500">No doctors available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default DoctorPage;
