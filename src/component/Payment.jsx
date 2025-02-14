import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [feeType, setFeeType] = useState("normal");
  const navigate = useNavigate();

  const feeAmount = feeType === "emergency" ? 2500 : 1500;

  const handlePayment = () => {
    alert(`Payment of ₹${feeAmount} successful!`);
    navigate("/app/gettoken"); // Redirect to token page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-center mb-4">Choose Payment Type</h2>
        
        {/* Selection Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`p-3 rounded-lg w-32 ${
              feeType === "normal" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFeeType("normal")}
          >
            Normal ₹1500
          </button>
          <button
            className={`p-3 rounded-lg w-32 ${
              feeType === "emergency" ? "bg-red-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFeeType("emergency")}
          >
            Emergency ₹2500
          </button>
        </div>

        {/* Display Fee */}
        <div className="text-center text-lg font-medium mb-6">
          <span>Total Fee: ₹{feeAmount}</span>
        </div>

        {/* Payment Button */}
        <button
          className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition"
          onClick={handlePayment}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
