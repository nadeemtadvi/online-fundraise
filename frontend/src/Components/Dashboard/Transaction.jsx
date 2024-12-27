import React from "react";
import avatar from "../../assets/avatar.png";

const Transaction = ({ response }) => {
  console.log("donations trasact");

  return (
    <div className="p-4 bg-white  mt-4 w-full">
      <h5 className="mb-4 text-xl font-bold">Contribution</h5>
      {response && response.length > 0 ? (
        response.map((rate, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b pb-3 mb-3"
          >
            <div className="flex items-center space-x-2">
              <img src={avatar} className="w-8 h-8" alt="Campaign Avatar" />
              <div>
                <p>{rate.name}</p>
              </div>
            </div>
            <div className="ml-4 text-right">
              <small>Paid Amt</small>
              <h6>{rate.amount ? rate.amount * 100 : "0"} Rs</h6>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No donation details found.</p>
      )}
      
    </div>
  );
};

export default Transaction;
