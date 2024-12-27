import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import SocialDropdown from "./SocialDropdown";
import Transaction from "./Transaction";

const Dashboard = () => {
  const [sideOpen, issideOpen] = useState("Profile");
  const [response, setResponse] = useState("");
  const getIdFromUrl = () => {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams.get("id");
  };

  const id = getIdFromUrl();

  useEffect(() => {
    console.log("Fetching payment status for:", id);
    const fetchPaymentStatus = async () => {
      try {
        const res = await axios.get(
          // `https://online-fundraise.onrender.com/api/donate/getdonation/${id}`
          `http://localhost:8000/api/donate/getdonation/${id}`
        );
        setResponse(res.data);
      } catch (error) {
        console.error("Error fetching payment status:", error);
      }
    };
    if (id) {
      fetchPaymentStatus();
    } else {
      console.log("No payment ID available for fetching status");
    }
  }, [id]);

  return (
    <div className="max-w-screen-xl mx-auto mb-20">
      <div className="container mx-auto flex mt-8">
        <Sidebar sideOpen={sideOpen} issideOpen={issideOpen} />
        {sideOpen === "Profile" && <MainContent />}
        {sideOpen === "Transaction" && (
          <div className="px-6 w-full mb-20">
            <Transaction />
          </div>
        )}
        {sideOpen === "Help Center" && <SocialDropdown />}
      </div>
    </div>
  );
};

export default Dashboard;
