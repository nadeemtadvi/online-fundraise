import React from "react";
import avatar from "../../assets/avatar.png"
import Transaction from "./Transaction";

const MainContent = () => {

      const transactions = [
        {
          img: "images/profile/senior-man-white-sweater-eyeglasses.jpg",
          name: "Daniel Jones",
          type: "C2C Transfer",
          date: "05/12/2023",
          amount: "-$250",
          amountType: "text-danger"
        },
        {
          img: "images/profile/young-beautiful-woman-pink-warm-sweater.jpg",
          name: "Public Bank",
          type: "Mobile Reload",
          date: "22/8/2023",
          amount: "+$280",
          amountType: "text-success"
        },
        {
          img: "images/profile/young-woman-with-round-glasses-yellow-sweater.jpg",
          name: "Store",
          type: "Payment Received",
          date: "22/8/2023",
          amount: "+$280",
          amountType: "text-success"
        }
      ];
      
  return (
    <main className="flex-grow py-4 px-6">
     
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-2/3 px-4">
          <div className="mb-4 p-4 bg-white rounded-lg shadow">
            <small>Your Balance</small>
            <h2 className="mt-2 mb-3 text-3xl font-bold">$254,800</h2>
            <div className="flex items-center space-x-2">
              <span>****</span>
              <span>****</span>
              <span>****</span>
              <p>2560</p>
            </div>
            <div className="flex justify-between mt-4">
              <div>
                <small>Valid Date</small>
                <p>12/2028</p>
              </div>
              <div>
                <small>Card Holder</small>
                <p>Thomas</p>
              </div>
            </div>
          </div>
          <div className="mb-4 p-4 bg-white rounded-lg shadow">
            <h5 className="mb-4 text-xl font-bold">History</h5>
            <div id="pie-chart">History</div>
          </div>
          
         <Transaction/>
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
                  className="w-12 h-12 rounded-full"
                  alt={transaction.name}
                />
                <div className="ml-3">
                  <p>
                    <a href="transaction-detail.html">{transaction.name}</a>
                  </p>
                  <small className="text-gray-500">{transaction.type}</small>
                </div>
                <div className="ml-auto text-right">
                  <small>{transaction.date}</small>
                  <strong className={`d-block ${transaction.amountType}`}>
                    {transaction.amount}
                  </strong>
                </div>
              </div>
            ))}
            <div className="border-t pt-4 text-center">
              <a href="wallet.html" className="btn btn-primary">
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
