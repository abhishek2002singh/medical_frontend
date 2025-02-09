import React from "react";
import { FaStethoscope, FaAmbulance, FaHeartbeat, FaUserMd } from "react-icons/fa";

const service = [
  { id: 1, name: "Emergency Care", icon: <FaAmbulance size={40} />, description: "24/7 emergency services with expert doctors." },
  { id: 2, name: "Cardiology", icon: <FaHeartbeat size={40} />, description: "Advanced heart treatments and cardiac care." },
  { id: 3, name: "General Checkup", icon: <FaStethoscope size={40} />, description: "Routine health checkups and medical tests." },
  { id: 4, name: "Specialist Consultation", icon: <FaUserMd size={40} />, description: "Expert doctors available for specialized treatments." },
];

const Services = () => {
  return (
    <div className="max-h-full mt-20">
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {service.map((service) => (
          <div key={service.id} className="p-6 bg-white shadow-md rounded-lg text-center">
            <div className="text-blue-600 mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold">{service.name}</h2>
            <p className="mt-2 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Services;
