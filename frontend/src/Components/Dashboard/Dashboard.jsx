import React from "react";
import "tailwindcss/tailwind.css";
import DashHeader from "./DashHeader";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";



const Dashboard = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <DashHeader />
      <div className="container mx-auto flex">
        <Sidebar />
        <MainContent />
      </div>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container text-center">
          <p className="mb-0">
            Copyright © Mini Finance 2048 - Design:{" "}
            <a
              href="https://www.tooplate.com"
              target="_blank"
              rel="sponsored"
              className="text-blue-400"
            >
              Tooplate
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
