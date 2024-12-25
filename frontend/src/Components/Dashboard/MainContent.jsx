import React from "react";

const MainContent = () => {
    const exchangeRates = [
        {
          img: "images/flag/united-states.png",
          currency: "USD",
          name: "1 US Dollar",
          sell: "1.0931",
          buy: "1.0821"
        },
        {
          img: "images/flag/singapore.png",
          currency: "SGD",
          name: "1 Singapore Dollar",
          sell: "0.6901",
          buy: "0.6201"
        },
        {
          img: "images/flag/united-kingdom.png",
          currency: "GPD",
          name: "1 British Pound",
          sell: "1.1520",
          buy: "1.1412"
        },
        {
          img: "images/flag/australia.png",
          currency: "AUD",
          name: "1 Australian Dollar",
          sell: "0.6110",
          buy: "0.5110"
        },
        {
          img: "images/flag/european-union.png",
          currency: "EUR",
          name: "1 Euro",
          sell: "1.1020",
          buy: "1.1010"
        }
      ];
      
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
    <main className="flex-grow p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Overview</h1>
        <small className="text-gray-500">Hello Thomas, welcome back!</small>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-2/3 px-4">
          <div className="mb-6 p-4 bg-white rounded-lg shadow">
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
          <div className="mb-6 p-4 bg-white rounded-lg shadow">
            <h5 className="mb-4 text-xl font-bold">History</h5>
            <div id="pie-chart">History</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <div id="chart">chart</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow mt-6">
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
        </div>
        <div className="w-full lg:w-1/3 px-4">
          <div className="mb-6 p-4 bg-white rounded-lg shadow text-center">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <img
                src="images/medium-shot-happy-man-smiling.jpg"
                className="w-full h-full rounded-full"
                alt="Profile"
              />
              <a
                href="setting.html"
                className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full"
              >
                <i className="bi-pencil-square"></i>
              </a>
            </div>
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
          <div className="mb-6 p-4 bg-white rounded-lg shadow">
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
          <div className="p-4 bg-blue-600 rounded-lg shadow text-center">
            <h5 className="text-white mb-4">Send Money</h5>
            <div className="flex justify-center space-x-4 mb-4">
              <a href="#">
                <img
                  src="images/profile/young-woman-with-round-glasses-yellow-sweater.jpg"
                  className="w-12 h-12 rounded-full"
                  alt="Profile"
                />
              </a>
              <a href="#">
                <img
                  src="images/profile/young-beautiful-woman-pink-warm-sweater.jpg"
                  className="w-12 h-12 rounded-full"
                  alt="Profile"
                />
              </a>
              <a href="#">
                <img
                  src="images/profile/senior-man-white-sweater-eyeglasses.jpg"
                  className="w-12 h-12 rounded-full"
                  alt="Profile"
                />
              </a>
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center bg-white text-blue-600 rounded-full"
              >
                <i className="bi-plus"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
