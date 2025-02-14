import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const DoctorDetailsPage = () => {
  const { id } = useParams(); // Get doctor ID from URL
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState({}); // Store appointments per patient
  const location = useLocation();
  const doctorId = location.state?.doctorid || id; // Get ID from Link state or URL params
  const appointmentId = localStorage.getItem("appointmentId");
console.log(appointmentId)

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:7777/doctors/${doctorId}`);
        setDoctor(response.data);
      } catch (error) {
        console.error("Error fetching doctor details:", error);
      }
    };
    fetchDoctorDetails();
  }, [doctorId]);

  // Fetch appointment details for each patient
  useEffect(() => {
    if (doctor && doctor[0]?.patients?.length > 0) {
      doctor[0].patients.forEach(async (patient) => {
        try {
          const response = await axios.get(`http://localhost:7777/appointments/${patient.patientId}`);
          setAppointments((prev) => ({
            ...prev,
            [patient.patientId]: response.data,
             // Store data by patient ID
          }));
        } catch (error) {
          console.error(`Error fetching appointment for Patient ID ${patient.patientId}:`, error);
        }
      });
    }
  }, [doctor]);

console.log(appointments)

  if (!doctor) {
    return <p className="text-center text-gray-500">Loading doctor details...</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <img
          src={doctor[0].photoUrl}
          alt={doctor[0].firstName}
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-2xl font-semibold text-center">
          Dr. {doctor[0].firstName} {doctor[0].lastName}
        </h1>
        <p className="text-gray-600 text-center mb-4">{doctor[0].specialty}</p>
        <hr />

        <div className="mt-4 space-y-3">
          <p><strong>Specialty:</strong> {doctor[0].specialty}</p>
          <p><strong>Patients:</strong> {doctor[0]?.patients?.length || 0}</p>

          {/* Display Patients & Appointments */}
          {doctor[0]?.patients?.length > 0 ? (
            <div className="mt-4">
              <h2 className="text-lg font-semibold">Patients</h2>
              <ul className="list-disc pl-5">
                {doctor[0].patients.map((patient , index) => (
                  <li key={patient.patientId} className="mb-4">
                    <p><strong>Patient ID:</strong> {patient.patientId}</p>
                    <p><strong>Appointment Date:</strong> {new Date(patient.timestamp).toLocaleDateString()}</p>

                    {/* Display Appointments if available */}
                  
                    {appointments[patient.patientId] ? (
                      
                      <div className="bg-gray-200 p-3 rounded-md mt-2">
                        
                        <h3 className="font-semibold">Appointment Details</h3>
                        <p><strong>Name :  </strong> {appointments[patient.patientId][0].firstName +' '}{appointments[patient.patientId][0].lastName} </p>
                       { console.log(appointments[patient.patientId][0]?.firstName)}
                       {console.log(index)}
                        
                        <p><strong>Reason:</strong> {appointments[patient.patientId][0].disease}</p>
                        <p><strong>Date :</strong> {appointments[patient.patientId][0].date}</p>
                        <p><strong>Mobile Number  :</strong> {appointments[patient.patientId][0].mobileNumber}</p>
                      </div>
                    ) : (
                      <p className="text-gray-500">Fetching appointment details...</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-gray-500">No patients assigned yet.</p>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default DoctorDetailsPage;
