import React from "react";
import avatar from "../../assets/avatar.png";

const Transaction = () => {
  const exchangeRates = [
    {
      img: avatar,
      currency: "USD",
      name: "1 US Dollar",
      sell: "1.0931",
      buy: "1.0821",
    },
    {
      img: avatar,
      currency: "SGD",
      name: "1 Singapore Dollar",
      sell: "0.6901",
      buy: "0.6201",
    },
    {
      img: avatar,
      currency: "GPD",
      name: "1 British Pound",
      sell: "1.1520",
      buy: "1.1412",
    },
    {
      img: avatar,
      currency: "AUD",
      name: "1 Australian Dollar",
      sell: "0.6110",
      buy: "0.5110",
    },
    {
      img: avatar,
      currency: "EUR",
      name: "1 Euro",
      sell: "1.1020",
      buy: "1.1010",
    },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow mt-4 w-full">
      <h5 className="mb-4 text-xl font-bold">Exchange Rate</h5>
      {exchangeRates.map((rate, index) => (
        <div key={index} className="flex items-center border-b pb-3 mb-3">
          <div className="flex items-center space-x-2">
            <img src={rate.img} className="w-8 h-8" alt={rate.currency} />
            <div>
              <p>{rate.currency}</p>
              <h6>{rate.name}</h6>
            </div>
          </div>
          <div className="ml-auto text-right">
            <small>Sell</small>
            <h6>{rate.sell}</h6>
          </div>
          <div className="ml-4 text-right">
            <small>Buy</small>
            <h6>{rate.buy}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transaction;
