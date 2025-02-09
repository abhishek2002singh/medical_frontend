import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const specialties = [
  "World’s Best Cardiology Doctor",
  "Leading Cancer Specialist",
  "Top Neurosurgeon in the World",
  "Advanced Orthopedic Experts",
  "Renowned Pediatrician",
];

const Prelogin = () => {
  const [specialtyIndex, setSpecialtyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpecialtyIndex((prevIndex) => (prevIndex + 1) % specialties.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 transition-all duration-500 flex flex-col items-center justify-center px-6 py-10">
      {/* Header Section */}
      <header className="text-center mb-10">
        <Link to='/'>
        <h1 className="text-5xl font-extrabold text-white transition-transform duration-500 hover:scale-105">
          Welcome to <span className="text-yellow-300">MedCare</span>
        </h1>
        </Link>
        <p className="text-white text-xl mt-3 font-semibold">
          Your trusted <span className="text-yellow-300">healthcare</span> partner
        </p>
      </header>

      {/* Dynamic Specialty Text */}
      <h2 className="text-2xl font-bold text-yellow-300 transition-opacity duration-700 animate-fadeIn mb-5">
        {specialties[specialtyIndex]}
      </h2>

      {/* Login Button */}
      <Link to='/login'>
      <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-yellow-500 hover:scale-105 transition-all duration-300">
        Login
      </button>
      </Link>

      {/* Medical Equipment Section */}
      <section className="mt-12 w-full max-w-5xl">
        <h2 className="text-3xl font-semibold text-white mb-6 text-center">
          Advanced Medical Equipment
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Stethoscope", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR20G5SIfHLo0xpLkOHlGnDZQryZOYr54hwQ&s" },
            { name: "Thermometer", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4X1jDzcKj8y0Gx3_gyoO06jePqmaZ_HW4Ow&s" },
            { name: "Syringe", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeEmr4dQe-nbm06PDTjSJb3KKs-mMyXOUsRQ&s" },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <img src={item.img} alt={item.name} className="w-full rounded" />
              <p className="text-center mt-2 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="mt-12 w-full max-w-5xl">
        <h2 className="text-3xl font-semibold text-white mb-6 text-center">
          Our Top Doctors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Dr. John Doe", specialty: "World’s Best Cardiologist", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSGVuStFxj_Dnv9V9qlzkor22IRPIglGkVA&s" },
            { name: "Dr. Emily Smith", specialty: "Top Neurosurgeon", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRat5jcIguFJnh7MRuk07c5mghNy_sVYwQedw&s" },
          ].map((doctor, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md flex items-center transform hover:scale-105 transition duration-300 ">
              <img src={doctor.img} alt={doctor.name} className="rounded-full" />
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-700 ">{doctor.name}</h3>
                <p className="text-gray-500">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mt-12 w-full max-w-5xl">
        <h2 className="text-3xl font-semibold text-white mb-6 text-center">
          Why Choose <span className="text-yellow-300">MedCare?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "24/7 Emergency Care", desc: "Immediate response for critical cases.", img: "https://medanta.s3.ap-south-1.amazonaws.com/technologies/February2024/dzgawAFlBxhchg7l6ikBLPT3ntvWGB-metaUzdxelBGVVd1SDdRaDFsQXYxTmM4QnNVZzgxYXlWLW1ldGFkVWN6YzAxbGNVUlFPR0kxYlhKRVNqTlpXR0Y1Um5sdmNreHNPSGxpTFcxbGRHRlRWelV3V2xka2VWbFlVbXhhUTBKRFkyMUdhbUZJYkRCaFIxWjVXVmhDTlVsR1ZuVmhXRkYxVTJ4Q1NDMHVhbkJuLS5qcGc=-.jpg" },
            { title: "Top Specialists", desc: "Highly qualified and experienced doctors.", img: "https://medanta.s3.ap-south-1.amazonaws.com/technologies/February2024/fokL3D8sSOClOGRzJX3UEKuFHDGMeZ-metaQ3liZXItS25pZmVfNTE0eDQwMC5wbmc=-.png" },
            { title: "Modern Facilities", desc: "State-of-the-art medical infrastructure.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk_y5QxMeolGc_6ZoKtKSIL_I8ucLBhCGFZg&s" },
          ].map((facility, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <img src={facility.img} alt={facility.title} className="w-full rounded mb-3" />
              <h3 className="text-lg font-semibold">{facility.title}</h3>
              <p className="text-gray-600">{facility.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-12 w-full max-w-5xl">
        <h2 className="text-3xl font-semibold text-white mb-6 text-center">FAQs</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {[
            { question: "What services do you provide?", answer: "We offer online consultations, medical tests, and hospital bookings." },
            { question: "How can I book an appointment?", answer: "You can book an appointment via our website or mobile app." },
            { question: "Do you have emergency services?", answer: "Yes, we offer 24/7 emergency support for critical cases." },
          ].map((faq, index) => (
            <details key={index} className="mb-3">
              <summary className="font-semibold cursor-pointer transition duration-300 hover:text-blue-600">{faq.question}</summary>
              <p className="text-gray-600 mt-1">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Prelogin;
