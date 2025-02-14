import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddDoctor = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    photoUrl: "",
    specialty: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:7777"+"/add-doctor", formData);
      toast.success(response.data.message);
      setFormData({ firstName: "", lastName: "", photoUrl: "", specialty: "" });
    } catch (error) {
      toast.error("Error adding doctor");
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <ToastContainer />
      <h2 className="text-3xl font-bold mb-6">Add New Doctor</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <label className="block mb-2 font-semibold">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md mb-4"
          required
        />

        <label className="block mb-2 font-semibold">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md mb-4"
          required
        />

        <label className="block mb-2 font-semibold">Photo URL</label>
        <input
          type="text"
          name="photoUrl"
          value={formData.photoUrl}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md mb-4"
        />

        <label className="block mb-2 font-semibold">Specialty</label>
        <input
          type="text"
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md mb-4"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
