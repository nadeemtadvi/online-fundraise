import React from "react";
import NotificationDropdown from "./NotificationDropdown";
import SocialDropdown from "./SocialDropdown";
import ProfileDropdown from "./ProfileDropdown";

const DashHeader = () => {
  return (
    <header className="navbar sticky-top flex items-center justify-between px-4 py-2 bg-blue-600 text-white">
      <a className="text-xl font-bold" href="index.html">
        <i className="bi-box"></i> Mini Finance
      </a>
      <form className="flex-grow mx-4" action="#" method="get">
        <input
          className="form-control w-full p-2 rounded"
          name="search"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      <div className="flex items-center space-x-4">
        {/* <NotificationDropdown />
        <SocialDropdown />
        <ProfileDropdown /> */}
      </div>
    </header>
  );
};

export default DashHeader;
