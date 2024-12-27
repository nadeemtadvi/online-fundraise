import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DashboardPage from "./Pages/DashboardPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SocialDropdown from "./Components/Dashboard/SocialDropdown";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard/" element={<DashboardPage />} />
          <Route path="/contact" element={<SocialDropdown />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
