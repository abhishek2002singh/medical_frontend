import React from 'react'
import { Link } from 'react-router-dom'

const SpecialitiesPages = () => {
  return (
    <div>
              <div className="py-32">
        <h2 className="text-3xl font-bold text-center mb-6">Our Specialities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {[
            { name: "Cardiac Care", img: "https://medanta.s3.ap-south-1.amazonaws.com/spacialities/January2024/iTfnXswt8SpCvU8prfkOIaqeQ8dFSU-metaQ2FyZGlhYyBDYXJlLnBuZw==-.png" },
            { name: "Cancer Care", img: "https://medanta.s3.ap-south-1.amazonaws.com/spacialities/January2024/8dlSvHvAt4XLA06qCA1bD7WD3a2Dlh-metaQ2FuY2VyIGNhcmUucG5n-.png" },
            { name: "ENT (Ear, Nose, Throat)" ,img:"https://medanta.s3.ap-south-1.amazonaws.com/spacialities/January2024/DlLPYNoYXC4dIXhYJ3qxLpDPX9aSNv-metaRU5ULCBIZWFkICYgTmVjayBTdXJnZXJ5LnBuZw==-.png" },
            { name: "Renal Care"  ,img:"https://medanta.s3.ap-south-1.amazonaws.com/spacialities/January2024/eTl9efu2E24Ovx5HB8iubKwLR5o66k-metacmVuYWwgY2FyZSBncmV5LnBuZw==-.png" },
            { name: "Neurosciences", img: "https://medanta.s3.ap-south-1.amazonaws.com/spacialities/January2024/rdYFIBA7zDwXp09GIukfOnOzytfUXz-metaTmV1cm9zY2llbmNlLnBuZw==-.png" },
            { name: "Gastrosciences", img: "https://medanta.s3.ap-south-1.amazonaws.com/spacialities/January2024/HrHNLtYFzQE7ePXB7qv85TdDrd6Tq9-metaR2FzdHJvc2NpZW5jZXMucG5n-.png" },
            { name: "Orthopaedics" ,img:"https://medanta.s3.ap-south-1.amazonaws.com/spacialities/January2024/NUycpCU8Z6r8vu7TIHo4w66BlkUh6w-metaT3J0aG9wYWVkaWNzLnBuZw==-.png" },
            { name: "Renal Care"  ,img:"https://medanta.s3.ap-south-1.amazonaws.com/spacialities/January2024/eTl9efu2E24Ovx5HB8iubKwLR5o66k-metacmVuYWwgY2FyZSBncmV5LnBuZw==-.png" }  
          ].map((speciality, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-lg text-center hover:bg-gray-100 transition">
              {speciality.img && <img src={speciality.img} alt={speciality.name} className="w-16 mx-auto mb-2" />}
              <p className="font-semibold">{speciality.name}</p>
              <button className="text-blue-600 hover:text-blue-800 transition">Know More</button>
              <br />
              
            </div>
          ))}
        </div>
        <Link to='/app'>
                <div className="bg-green-600 w-40 text-center text-white mx-auto px-3 py-3 rounded mt-8  hover:bg-green-700 transition">
                  <h4>Home Page ....</h4>
                </div>
                </Link>
      </div>
    </div>
  )
}

export default SpecialitiesPages