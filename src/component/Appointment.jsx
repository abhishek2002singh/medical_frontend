import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/Constant";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAppointment } from "../utils/appointmentSlice";

const Appointment = () => {
  const location = useLocation();

  const doctorName = location.state?.doctorName || "";
  const doctorSpe = location.state?.doctorSpe || "";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    doctorName: doctorName,
    disease: doctorSpe,
    mobileNumber: "",
    date: "",
  });

  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkToken = useSelector((state) => state.aptoken);

  console.log(checkToken);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        `${BASE_URL}/appointment`,
        formData,
        { withCredentials: true }
      );

      setMessage(response.data.message);
      dispatch(addAppointment(response.data));
      setCheck(true);
      setFormData({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        doctorName: "",
        disease: "",
        mobileNumber: "",
        date: "",
      });

      // Redirect to get token page after successful booking
      navigate("/app/gettoken");
    } catch (error) {
      setMessage("Error booking appointment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-40">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Book an Appointment
      </h2>
      {message && <p className="text-center text-green-600 mb-4">{message}</p>}

      <div className="space-y-4">
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
          name="doctorName"
          placeholder="Doctor's Name"
          value={formData.doctorName}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />

        <input
          type="text"
          name="disease"
          placeholder="Disease"
          value={formData.disease}
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

        {/* Calendar Input for Appointment Date */}
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />

        <button
          onClick={handleSubmit}
          className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Booking..." : "Book Appointment"}
        </button>
      </div>
    </div>
  );
};

export default Appointment;
