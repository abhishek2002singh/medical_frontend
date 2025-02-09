import React, { useState } from "react";
import { Link } from "react-router-dom";

const MedantaLanding = () => {
  const [tokenNumber, setTokenNumber] = useState(Math.floor(1000 + Math.random() * 9000));

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://medanta.s3.ap-south-1.amazonaws.com/banners/June2024/BJhO0wTyQt4Dpld58W7e9PKFoBiAmA-metaTGFuZGluZy1QYWdlXzE5MjB4NTAwICgzKS5qcGc=-.jpg"
          alt="Medanta Hospital"
          className="w-full h-[300px] md:h-[450px] object-cover shadow-lg"
        />
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 p-6 text-center">
        {[
          { count: "300+", label: "Experienced Doctors", color: "text-blue-600", bg: "hover:bg-blue-100" },
          { count: "900+", label: "Beds", color: "text-green-600", bg: "hover:bg-green-100" },
          { count: "500+", label: "Trained Staff", color: "text-red-600", bg: "hover:bg-red-100" },
          { count: "20+", label: "Superspecialities", color: "text-purple-600", bg: "hover:bg-purple-100" },
        ].map((item, index) => (
          <div
            key={index}
            className={`bg-white shadow-md p-6 rounded-lg transition transform hover:scale-105 ${item.bg}`}
          >
            <p className={`text-3xl font-bold ${item.color}`}>{item.count}</p>
            <p className="text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>



       {/* Token Session */}
       
      <div className="py-8 text-center bg-yellow-100 shadow-md rounded-lg mx-4 md:mx-20 p-6">
        <h2 className="text-2xl font-bold">Your Token Number is</h2>
        
        <Link to='/app/gettoken'>
        <button className="bg-yellow-500 text-white px-6 py-2 rounded mt-4 hover:bg-yellow-600 transition">
          See token number for meet Doctor
        </button>
        </Link>
        <Link to='/app/getcheckup'>
        <br />
        <button className="bg-yellow-500 text-white px-6 py-2 rounded mt-4 hover:bg-yellow-600 transition">
          See token number Medical Checkups
        </button>
        </Link>
      </div>



        {/* Doctors Specialties Section */}
        <div className="py-8 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Meet Our Specialists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Dr. Abhishek Yadav",
              specialty: "Neurosurgery",
              img: "https://res.cloudinary.com/deddyojnd/image/upload/v1739078810/photo_gijz9c.jpg",
            },
            {
              name: "Dr. Raj Pal Chaudhari",
              specialty: "Gastroenterology",
              img: "https://res.cloudinary.com/deddyojnd/image/upload/v1739081340/WhatsApp_Image_2025-02-09_at_11.00.04_hcfygl.jpg",
            },
          ].map((doctor, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg text-center hover:bg-gray-100 transition">
              <img src={doctor.img} alt={doctor.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md" />
              <p className="text-xl font-bold">{doctor.name}</p>
              <p className="text-gray-600">{doctor.specialty}</p>
              <Link to="/app/appointment">
                <button className="bg-green-600 text-white px-4 py-2 rounded mt-3 hover:bg-green-700 transition">
                  Book Appointment
                </button>
              </Link>
            </div>
          ))}
        </div>
        <Link to='/app/doctorPage'>
        <div className="bg-green-600 w-40 text-center text-white mx-auto px-3 py-3 rounded mt-8  hover:bg-green-700 transition">
            <h4>See More ....</h4>
        </div>
        </Link>
      </div>

      

      {/* Specialities Section */}
      <div className="py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Our Specialities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {[
            { name: "Cardiac Care", img: "https://medanta.s3.ap-south-1.amazonaws.com/spacialities/January2024/iTfnXswt8SpCvU8prfkOIaqeQ8dFSU-metaQ2FyZGlhYyBDYXJlLnBuZw==-.png" },
            { name: "Cancer Care", img: "https://medanta.s3.ap-south-1.amazonaws.com/spacialities/January2024/8dlSvHvAt4XLA06qCA1bD7WD3a2Dlh-metaQ2FuY2VyIGNhcmUucG5n-.png" },
            { name: "ENT (Ear, Nose, Throat)" ,img:"https://medanta.s3.ap-south-1.amazonaws.com/spacialities/January2024/DlLPYNoYXC4dIXhYJ3qxLpDPX9aSNv-metaRU5ULCBIZWFkICYgTmVjayBTdXJnZXJ5LnBuZw==-.png" },
            { name: "Renal Care"  ,img:"https://medanta.s3.ap-south-1.amazonaws.com/spacialities/January2024/eTl9efu2E24Ovx5HB8iubKwLR5o66k-metacmVuYWwgY2FyZSBncmV5LnBuZw==-.png" } 
          ].map((speciality, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-lg text-center hover:bg-gray-100 transition">
              {speciality.img && <img src={speciality.img} alt={speciality.name} className="w-16 mx-auto mb-2" />}
              <p className="font-semibold">{speciality.name}</p>
              <button className="text-blue-600 hover:text-blue-800 transition">Know More</button>
              <br />
              <Link to='/app/appointment'>
              <button className="bg-green-600 text-white px-3 py-1 rounded mt-2 hover:bg-green-700 transition">
                Book Appointment
              </button>
              </Link>
            </div>
          ))}
        </div>
        <Link to='/app/specialitiesPages'>
        <div className="bg-green-600 w-40 text-center text-white mx-auto px-3 py-3 rounded mt-8  hover:bg-green-700 transition">
            <h4>See More ....</h4>
        </div>
        </Link>
      </div>


      {/* Medical Checkups Section */}
<div className="py-8">
  <h2 className="text-3xl font-bold text-center mb-6">Medical Checkups</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
    {[
      { name: "X-Ray", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSX8CsKwZ2VHYhbU_i7rVmeynD8RH0GewWBw&s" },
      { name: "CT Scan", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjiHTrBGHUFIIrPMo-0GXMLFfI4tdF9BXLQw&s" },
      { name: "MRI Scan", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3DE0upPS1m1sq0_NjSIhC0zBKHHPcYTQByw&s" },
      { name: "Ultrasound", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZzi_cGFC6QmsfvwvvwbeNHI-slz6mjJm8Q&s" },
    ].map((test, index) => (
      <div key={index} className="bg-white shadow-md p-4 rounded-lg text-center hover:bg-gray-100 transition">
        {test.img && <img src={test.img} alt={test.name} className="w-32 bg-cover mx-auto mb-2" />}
        <p className="font-semibold">{test.name}</p>
        <Link to='/app/checkup'>
          <button className="bg-green-600 text-white px-3 py-1 rounded mt-2  hover:bg-green-700 transition">
            Book Test
          </button>
        </Link>
      </div>
    ))}
  </div>
  <Link to='/app/checkupsPage'>
  <div className="bg-green-600 w-40 text-center text-white mx-auto px-3 py-3 rounded mt-8  hover:bg-green-700 transition">
    <h4>See More ....</h4>
  </div>
  </Link>
</div>



      {/* Patient Reviews Section */}
      <div className="py-8 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Patients Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              name: "Rahul Sharma",
              review: "The doctors at Medanta are truly exceptional. My treatment was smooth and the facilities are world-class!",
            },
            {
              name: "Pooja Verma",
              review: "I had the best experience at Medanta. The staff is extremely caring and the hospital is very well-maintained.",
            },
            {
              name: "Amit Gupta",
              review: "Highly recommend Medanta for their expert doctors and top-notch medical services!",
            },
          ].map((patient, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg w-80 text-center">
              <p className="text-gray-600 italic">"{patient.review}"</p>
              <p className="mt-2 font-bold">{patient.name}</p>
              <div className="flex justify-center mt-2">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          ))}
        </div>
      </div>

                {/* our branches */}
      <div className="py-8 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">MedCare Network</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "MedCare - The Medicity, Gurugram",
              specialty: "Located in Gurugram, Haryana, this flagship hospital offers a wide range of specialties, including Cardiology, Neurology, Gastroenterology, and Oncology. It has been recognized as the Best Private Hospital in India for multiple consecutive years",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwB0joMxIpLrgLG2ZQxDubkfVdJdevk9zow&s",
            },
            {
              name: " MedCare Super Specialty Hospital, Lucknow",
              specialty: "Situated in Sushant Golf City, Lucknow, Uttar Pradesh, this hospital is one of the largest in the state, spread over 12.58 acres. It provides advanced medical services across various specialties. ",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStk5KrVdEk5yxwZJlGIUhenJRVWS3lzwNpoQ&s",
            },
          ].map((doctor, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg text-center hover:bg-gray-100 transition">
              <img src={doctor.img} alt={doctor.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md" />
              <p className="text-xl font-bold">{doctor.name}</p>
              <p className="text-gray-600">{doctor.specialty}</p>
              
            </div>
          ))}
        </div>
      </div>


   
    </div>
  );
};

export default MedantaLanding;
