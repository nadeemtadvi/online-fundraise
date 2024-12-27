import React from "react";
import { Link } from "react-router";

const Header = () => {
  const navLink = [
    { nav: "HOME", link: "/" },
    { nav: "DASHBOARD", link: "/dashboard" },
    { nav: "CONTACT", link: "/contact" },
  ];
  return (
    <header className="bg-blue-600 text-white p-3">
      <nav className="container mx-auto flex flex-wrap justify-between items-center">
        <Link to={"/"} className="text-xl font-bold">
          Rise Funding
        </Link>
        <ul className="md:mt-0 flex space-x-4 md:space-x-14">
          {navLink.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer relative group hover:font-semibold `}
            >
              <Link to={item.link}>{item.nav}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
