import React from "react";
import avatar from "../../assets/avatar.png";
import Transaction from "./Transaction";

const MainContent = ({ response, issideOpen }) => {
  const transactions = [
    {
      img: avatar,
      name: "Thomas",
      type: "Bk Transfer",
      date: "05/12/2023",
      amount: "-250",
      amountType: "text-danger",
    },
    {
      img: avatar,
      name: "Thomas",
      type: "UPI",
      date: "22/8/2023",
      amount: "+280",
      amountType: "text-success",
    },
    {
      img: avatar,
      name: "Thomas",
      type: "Card",
      date: "22/8/2023",
      amount: "+280",
      amountType: "text-success",
    },
  ];

  return (
    <main className="flex-grow py-4 px-6 bg-gray-100">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-2/3 px-4">
          <div className="mb-4 p-4 bg-white rounded-lg shadow">
            <small>Your Balance</small>
            <h2 className="mt-2 mb-3 text-3xl font-bold">$254,800</h2>
            <div className="flex items-center space-x-2">
              <span>****</span>
              <span>****</span>
              <span>****</span>
              <p>2025</p>
            </div>
            <div className="flex justify-between mt-4">
              <div>
                <small>Valid Date</small>
                <p>12/2028</p>
              </div>
              <div>
                <p>Thomas</p>
              </div>
            </div>
          </div>
          <div className="mb-4 p-4 bg-white ">
            <h5 className="mb-4 text-xl font-bold">History</h5>
            <div id="pie-chart">History</div>
          </div>

          <div className="p-4 bg-white rounded-lg shadow mt-4 w-full">
            <h5 className="mb-4 text-xl font-bold">Contribution</h5>
            {response && response.length > 0 ? (
              response.slice(0, 2).map((rate, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pb-3 mb-3"
                >
                  <div className="flex items-center space-x-2">
                    <img
                      src={avatar}
                      className="w-8 h-8"
                      alt="Campaign Avatar"
                    />
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
              <p className="text-center text-gray-600">
                No donation details found.
              </p>
            )}
            <div className=" text-end">
             <button
            onClick={() => issideOpen('Transaction')}
            className="mt-4 text-sm inline-block text-blue-500 underline rounded-md hover:text-gray-700"
          >
            View More
          </button>
          </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 mt-4 lg:mt-0 px-4 md:pr-4">
          <div className="mb-4 p-4 bg-white rounded-lg shadow ">
            <div className=" text-center relative w-24 h-24 mx-auto mb-4">
              <img
                src={avatar}
                className="w-full h-full rounded-full"
                alt="Profile"
              />
            </div>
            <div className="flex justify-center items-center">
              <div>
                <p className="mb-2">
                  <strong>Name:</strong> Thomas Edison
                </p>
                <p className="mb-2">
                  <strong>Email:</strong> <a href="#">thomas@site.com</a>
                </p>
                <p className="mb-0">
                  <strong>Phone:</strong> <a href="#">(60) 12 345 6789</a>
                </p>
              </div>
            </div>
          </div>
          <div className="mb-4 p-4 bg-white rounded-lg shadow">
            <h5 className="mb-4 text-xl font-bold">Recent Transactions</h5>
            {transactions.map((transaction, index) => (
              <div key={index} className="flex items-center mb-4">
                <img
                  src={transaction.img}
                  className="w-8 h-8"
                  alt={transaction.name}
                />
                <div className="ml-3">
                  <p>
                    <a href="#">{transaction.name}</a>
                  </p>
                  <small className="text-gray-500">{transaction.type}</small>
                </div>
                <div className="ml-auto text-right">
                  <small>{transaction.date}</small>
                  <strong className={`d-block ml-1 ${transaction.amountType}`}>
                    {transaction.amount} Rs
                  </strong>
                </div>
              </div>
            ))}
            <div className="border-t pt-4 text-center">
              <a href="#" className="btn btn-primary hover:text-blue-600">
                View all transactions{" "}
                <i className="bi-arrow-up-right-circle-fill ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
