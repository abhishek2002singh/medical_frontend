import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("https://medical-backend-y6pm.onrender.com"+"/doctors"); // Update API URL if needed
        setDoctors(response.data);
        setFilteredDoctors(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };
    fetchDoctors();
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredDoctors(doctors);
    } else {
      const filtered = doctors.filter((doctor) =>
        `${doctor.firstName} ${doctor.lastName}`.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredDoctors(filtered);
    }
  }, [search, doctors]);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold text-center mb-4">Find a Doctor</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name..."
          className="w-full p-3 mb-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <div key={doctor._id} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={doctor.photoUrl}
                  alt={doctor.firstName}
                  className="w-20 h-20 rounded-full mx-auto mb-2"
                />
                <h2 className="text-lg font-semibold text-center">
                  {doctor.firstName} {doctor.lastName}
                </h2>
                <p className="text-gray-600 text-center">{doctor.specialty}</p>
                {/* <p>{doctor._id}</p> */}
                <Link to={`/doctor/datails/${doctor._id}`} state={{doctorid:doctor._id}}>
              <button className="bg-green-600 text-white px-4 py-2 rounded mt-3 hover:bg-green-700 transition">
                Open
              </button>
            </Link>
              </div>
              
            ))
          ) : (
            <p className="text-center text-gray-500">No doctors found</p>
          )}
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
