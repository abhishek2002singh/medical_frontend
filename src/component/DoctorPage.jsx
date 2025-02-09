import React from 'react'
import { Link } from 'react-router-dom'

const DoctorPage = () => {
  return (
    <div>
         <div className="py-32 px-6">
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
            {
                name: "Dr. William A. Abdu (USA)",
                specialty: "Orthopedic Surgery",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPe3rxFQWGhamk6ojsGLX2-RHlhNLpFezcw&s",
            },
            {
                name: ". Dr. Devi Shetty (India)",
                specialty: "Cardiac Surgery",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSq8rlo2Tk8V8fJarauIs_IaKtfNcP171kWQ&s",
            },
            {
                name: " Dr. Paolo Macchiarini (Sweden/Italy)",
                specialty: "Regenerative Medicine",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkA8unXahdFxyavyB65lqCFUkW_P-R0LrxA&s",
              },
              {
                name: "Dr. Sanjay Gupta (USA)",
                specialty: " Neurosurgery & Medical Journalism",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWxxSRAwCS_iHlKU79OsSHD1X-g3mrA9PbA&s",
              },
              {
                  name: "Dr. Christiaan Barnard (South Africa)",
                  specialty: "Cardiac Surgery",
                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBqSMDsr-iUhjEkvT-1KwDNg_2jch6mabIYA&s",
              },
              {
                  name: "Dr. P. Raghu Ram (India)",
                  specialty: "Breast Oncology",
                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBkM0Piov2to8Gsp9HPPUs7jqrw9tnwTLdA&s",
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
        
      </div>
    </div>
  )
}

export default DoctorPage