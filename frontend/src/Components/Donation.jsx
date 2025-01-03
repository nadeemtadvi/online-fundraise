import React, { useState } from "react";
import axios from "axios";

const Donation = ({ handleOpen }) => {
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const createDonationOrder = async () => {
    const donationData = {
      amount: amount,
      name: name,
      mobile: mobile,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/donate/create",
        donationData
      );
      handleRazorpayScreen(response.data);
    } catch (error) {
      console.error("Error creating donation order:", error);
    }
  }; 

  const handleRazorpayScreen = async (orderData) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Some error occurred while loading Razorpay screen");
      return;
    }

    const options = {
      key: "rzp_test_WHOcSYU5xuY2x4",
      amount: orderData.amount,
      currency: "INR",
      name: "Donation Portal",
      description: "Donation for a cause",
      image: "https://example.com/logo.png",
      order_id: orderData.order_id,
      handler: async function (response) {
        setResponseId(response.razorpay_payment_id);
      },
      prefill: {
        name: name,
        email: "donor@example.com",
        contact: mobile,
      },
      theme: {
        color: "#F4C430",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="fixed z-10 top-0 left-0 w-full h-full bg-[#00000045]">
      <div className="absolute bg-white z-20 left-[50%] -translate-x-2/4 -translate-y-2/4 top-[50%] p-6 m-3 rounded-lg w-full max-w-lg">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
            Donate
          </h1>
          <span
            onClick={() => handleOpen()}
            className="text-2xl text-violet-800"
          >
            CLOSE
          </span>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Mobile Number:
          </label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your mobile number"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Donation Amount (INR):
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
          />
        </div>

        <button
          onClick={createDonationOrder}
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default Donation;
