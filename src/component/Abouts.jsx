import React from "react";


const Abouts = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700">About Our Hospital</h1>
      <div className="flex flex-col md:flex-row items-center mt-8">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTclph9IdDF8vg7EHbifOybIQhngR1qQWpLBQ&s"
          alt="Hospital"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
          <p className="text-lg text-gray-700">
            Welcome to our world-class hospital, where patient care is our top priority.
            We provide high-quality medical services with state-of-the-art facilities.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Our team of experienced doctors, nurses, and medical staff ensures the best 
            treatment for our patients. We specialize in emergency care, surgery, 
            and various medical treatments.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
