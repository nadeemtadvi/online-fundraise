import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import SocialDropdown from "./SocialDropdown";
import axios from "axios";
import Transaction from "./Transaction";

const Dashboard = () => {
  const [sideOpen, issideOpen] = useState("Profile");
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(true);

  console.log("donation", response);

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/donate/getdonation`
        );
        setResponse(res.data);
        console.log("res.data", res.data);
      } catch (error) {
        console.error("Error fetching payment status:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentStatus();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto mb-20">
      <div className="container mx-auto flex pt-8">
        <Sidebar sideOpen={sideOpen} issideOpen={issideOpen} />
        {sideOpen === "Profile" && <MainContent response={response} issideOpen={issideOpen} />}
        {sideOpen === "Transaction" && (
          <div className="px-6 w-full mb-20">
            <div className="p-4 bg-white rounded-lg shadow mt-4 w-full">
              <h5 className="mb-4 text-xl font-bold">Contribution</h5>
              {loading ? (
                <p className="text-center text-gray-600">Loading donation...</p>
              ) : (
                <>
                
                  <Transaction response={response} />
                </>
              )}
            </div>
          </div>
        )}
        {sideOpen === "Help Center" && <SocialDropdown />}
     
      </div>
    </div>
  );
};

export default Dashboard;
