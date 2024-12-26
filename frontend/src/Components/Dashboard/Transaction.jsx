import React from "react";
import avatar from "../../assets/avatar.png";

const Transaction = () => {
  const exchangeRates = [
    {
      img: avatar,
      currency: "Child campaign",
      name: "USA",
      buy: "10821",
    },
    {
      img: avatar,
      currency: "Education campaign",
      name: "Singapore",
      buy: "6201",
    },
    {
      img: avatar,
      currency: "labour campaign",
      name: "England",
      buy: "11412",
    },
    {
      img: avatar,
      currency: "Env  campaign",
      name: "Australia",
      buy: "5110",
    },
    {
      img: avatar,
      currency: "Study campaign",
      name: "Europe",
      buy: "1010",
    },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow mt-4 w-full">
      <h5 className="mb-4 text-xl font-bold">Contribution</h5>
      {exchangeRates.map((rate, index) => (
        <div key={index} className="flex items-center justify-between border-b pb-3 mb-3">
          <div className="flex items-center space-x-2">
            <img src={rate.img} className="w-8 h-8" alt={rate.currency} />
            <div>
              <p>{rate.currency}</p>
              <h6>{rate.name}</h6>
            </div>
          </div>
          
          <div className="ml-4 text-right">
            <small>Pay Amt</small>
            <h6>{rate.buy} Rs</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transaction;
