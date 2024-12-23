import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [responseId, setResponseId] = useState("");
  const [responseState, setResponseState] = useState([]);
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

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
      const response = await axios.post("http://localhost:8000/api/donate/create", donationData);
      handleRazorpayScreen(response.data);
    } catch (error) {
      console.error("Error creating donation order:", error);
    }
  };

  const handleRazorpayScreen = async (orderData) => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Some error at Razorpay screen loading");
      return;
    }

    const options = {
      key: 'rzp_test_WHOcSYU5xuY2x4',
      amount: orderData.amount,
      currency: 'INR',
      name: "Donation Portal",
      description: "Donation for a cause",
      image: "https://example.com/logo.png",
      order_id: orderData.order_id,
      handler: function (response) {
        setResponseId(response.razorpay_payment_id);
      },
      prefill: {
        name: name,
        email: "donor@example.com",
        contact: mobile,
      },
      theme: {
        color: "#F4C430"
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  useEffect(() => {
    
      console.log("Fetching payment status for:", responseId);
      const fetchPaymentStatus = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/donate/getdonation/${responseId}`);
          setResponseState(response.data);
        } catch (error) {
          console.error("Error fetching payment status:", error);
        }
      };
      if (responseId) {
      fetchPaymentStatus();
    }else {
      console.log("No payment ID available for fetching status");
    }
  }, [responseId]);

  return (
    <div className="App flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Donate to the Cause</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Mobile Number:</label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your mobile number"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Donation Amount (INR):</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter amount"
          />
        </div>

        <button
          onClick={createDonationOrder}
          className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Donate Now
        </button>

        {responseId && <p className="mt-4 text-center text-gray-600">Payment ID: <span className="font-semibold text-indigo-600">{responseId}</span></p>}
        {responseState ? (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Payment Status:</h2>
          <ul className="mt-3  text-gray-700 grid grid-cols-2">
            <li className='py-1.5'>Name:</li>
            <li className='py-1.5 font-semibold capitalize'>{responseState.name}</li>
            <li className='py-1.5'>Amount:</li>
            <li className='py-1.5 font-semibold'> {responseState.amount ? `${responseState.amount} Rs.` : ''}</li>
            <li className='py-1.5'>Payment Method:</li>
            <li className='py-1.5 font-semibold uppercase'> {responseState.method}</li>
            <li className='py-1.5'>Order ID:</li>
            <li className='py-1.5 font-semibold'> {responseState.orderId}</li>
            <li className='py-1.5'>Status:</li>
            <li className='py-1.5 font-semibold'> {responseState.status}</li>
          </ul>
        </div>) : (
        <p>Loading...</p>
      )}
      </div>
    </div>
  );
}

export default App;
