import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/Constant";
import { Link } from "react-router-dom";


const Checkup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    refDoctor: "",
    scanningPart: "",
    mobileNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [check ,setcheck]=useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
        const response = await axios.post(
            BASE_URL+"/checkup",
            formData, // Send formData correctly
            {
              withCredentials: true, // Allow cookies to be sent
            }
          );
        // const response = await axios.post(`${BASE_URL}/appointment`, {}, { withCredentials: true });
        //   console.log("API URL:", BASE_URL + "/appointment");


      setMessage(response.data.message);
      setcheck(true)
      setFormData({ firstName: "", lastName: "", age: "", gender: "", refDoctor: "", scanningPart: "", mobileNumber: "" });
    } catch (error) {
      setMessage("Error booking appointment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-40">
      <h2 className="text-2xl font-semibold text-center mb-4">Book an CheckUp</h2>
      {message && <p className="text-center text-green-600 mb-4">{message}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded-md"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded-md"
            required
          />
        </div>

        <div className="flex gap-4">
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded-md"
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded-md"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <input
          type="text"
          name="refDoctor"
          placeholder="Doctor's Name"
          value={formData.refDoctor}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />

        <input
          type="text"
          name="scanningPart"
          placeholder="Disease"
          value={formData.scanningPart}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />

        <input
          type="tel"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />

        

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Booking..." : "Book Appointment"}
        </button>
        
      </form>
      {check && <div>
    <Link to='/app/gettoken'>
        <div className="bg-green-600 w-40 text-center text-white mx-auto px-3 py-3 rounded mt-8  hover:bg-green-700 transition">
            <h4>Click To See Your Token </h4>
        </div>
        </Link>
</div>}
    </div>
  );
};

export default Checkup;
