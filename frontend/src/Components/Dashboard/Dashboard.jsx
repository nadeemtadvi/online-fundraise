import React from "react";
import "tailwindcss/tailwind.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";



const Dashboard = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="container mx-auto flex">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
