import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import SocialDropdown from "./SocialDropdown";
import Transaction from "./Transaction";



const Dashboard = () => {
  const [sideOpen, issideOpen] = useState('Profile')
  return (
    <div className="max-w-screen-xl mx-auto mb-20">
      <div className="container mx-auto flex mt-8">
        <Sidebar sideOpen={sideOpen} issideOpen={issideOpen} />
        {sideOpen === 'Profile' && <MainContent />}
        {sideOpen === 'Transaction' && <div className="px-6 w-full mb-20"><Transaction /></div>}
        {sideOpen === 'Help Center' && <SocialDropdown />}
      
      </div>
    </div>
  );
};

export default Dashboard;
