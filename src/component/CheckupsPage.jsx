import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShimmerCheckupsPage from "../component/shimmer/ShimmerCheckupsPage";

const CheckupsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulating API call
  }, []);

  if (loading) {
    return <ShimmerCheckupsPage />;
  }

  return (
    <div className="py-32">
      <h2 className="text-3xl font-bold text-center mb-6">Medical Checkups</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {[
          { name: "X-Ray", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSX8CsKwZ2VHYhbU_i7rVmeynD8RH0GewWBw&s" },
          { name: "CT Scan", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjiHTrBGHUFIIrPMo-0GXMLFfI4tdF9BXLQw&s" },
          { name: "MRI Scan", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3DE0upPS1m1sq0_NjSIhC0zBKHHPcYTQByw&s" },
          { name: "Ultrasound", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZzi_cGFC6QmsfvwvvwbeNHI-slz6mjJm8Q&s" },
          { name: "Blood Tests", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaFhDgiq2txxV8ykTlsK0Tn8bnEBoN3-oqag&s" },
          { name: "Mammography", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvzStTol74_YQPfTNBn1ycJ5sA9MAnRS8bOA&s" },
          { name: "Deca Scan (Bone Density)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKd0-wnYwf3Ps_9r42fIzjomI70ZykuKrqIw&s" },
          { name: "Pet Scan", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLfVtpkvqiMlOxz-D8H0khwzsxWx2fEbBTeg&s" },
          { name: "Kidney Function Test", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnf2irD7Bmb7RimFqR0d0C1WhVoWsfT2ULWA&s" },
          { name: "Liver Function Test", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVL8-fXpXx3CXGchGDizxFFBOYS9g6zJS-kw&s" },
          { name: "Electrocardiography (ECG)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPUJ5mF0KZdzl10ofW-DiKlgV0BVEb_kxCg&s" },
          { name: "Electroencephalography (EEG)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNoaDBlQAOx8vpa1Oec9qvLOBI6yAbQXxTqg&s" },
        ].map((test, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg text-center hover:bg-gray-100 transition">
            {test.img && <img src={test.img} alt={test.name} className="w-32 bg-cover mx-auto mb-2" />}
            <p className="font-semibold">{test.name}</p>
            <Link to='/app/checkup' state={{ fname: test.name }}>
              <button className="bg-green-600 text-white px-3 py-1 rounded mt-2 hover:bg-green-700 transition">
                Book Test
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckupsPage;
