import Landing from "../Components/Landing";
import React ,{ useState } from "react";
import Donation from "../Components/Donation";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div>
      <div className="bg-gray-100">
        <Landing handleOpen={handleOpen} />
        {open && <Donation handleOpen={handleOpen} />}
      </div>
    </div>
  );
};

export default HomePage;
