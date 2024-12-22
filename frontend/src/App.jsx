import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetchTotalAmount();
  }, []);

  const fetchTotalAmount = async () => {
    axios.get("xyz")
      .then((res) => {
        console.log(res.data);
        const data = res.data.data;
        setTotalAmount(data);
      })
      .catch((error) => {
        console.log("!error");
      })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("xyz", {
      // name: name,
      // amount: amount,
    })
      .then((res) => {
        console.log(res.data);
        setMessage('Thank you for your donation!');
        setName('');
        setAmount('');
        fetchTotalAmount();
      })
      .catch((error) => {
        console.log("!error");
      })
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Fundraising Platform</h1>
        <p className="text-gray-700 mb-6">
          We are committed to raising funds to support our cause. Every contribution makes a difference!.We are hoping to collect $10,000.
        </p>
        <div className="bg-gray-100 p-4 rounded mb-6">
          <h2 className="text-xl font-semibold">Total Amount Raised: ${totalAmount}</h2>
        </div>
        {message && (
          <div className="bg-green-100 p-4 rounded mb-6">
            <p className="text-green-700">{message}</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
