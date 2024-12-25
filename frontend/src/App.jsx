import "./App.css";
import Landing from "./Components/Landing";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer";
import { useState } from "react";
import Donation from "./Components/Donation";

const App = () => {
  const [tab, setTab] = useState("HOME");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="bg-gray-100">
      <Header tab={tab} setTab={setTab} />
      {tab === "HOME" && <Landing handleOpen={handleOpen} />}
      {tab === "DASHBOARD" && <Dashboard />}
      {tab === "CONTACT" && (
        <div className="p-8">Contact Page Coming Soon!</div>
      )}
      <Footer />
      {open && <Donation handleOpen={handleOpen} />}
    </div>
  );
};

export default App;
