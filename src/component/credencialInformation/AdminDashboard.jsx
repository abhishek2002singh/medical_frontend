import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    toast.info("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-600">Admin Dashboard</h2>

        <button 
          onClick={() => navigate("/admin/add-employee")} 
          className="w-full bg-green-500 text-white p-3 rounded-lg mb-4 hover:bg-green-600 transition"
        >
          Add Employee
        </button>

        <Link to='/admin/addDoctor'>
        <button 
          className="w-full bg-blue-500 text-white p-3 rounded-lg mb-4 hover:bg-blue-600 transition"
        >
          Add Doctor
        </button>
        </Link>

        <button 
          onClick={handleLogout} 
          className="w-full bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
