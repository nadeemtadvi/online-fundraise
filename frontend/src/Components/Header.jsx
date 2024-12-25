import React from "react";

const Header = ({setTab, tab}) => {
  return (
    <header className="bg-blue-600 text-white p-3">
    <nav className="container mx-auto flex flex-wrap justify-between items-center">
      <a href="index.html" className="text-xl font-bold">
      RiseFunding
      </a>
      <ul className="mt-4 md:mt-0 flex space-x-4 md:space-x-14">
        {["HOME","DASHBOARD", "CONTACT"].map(
          (item, index) => (
            <li key={index} onClick={() => setTab(item)}  className={`cursor-pointer relative group ${
              tab === item ? "font-bold underline" : ""
            }`}>
              <a
               
                href="#"
              >
                {item}
              </a>
             
            </li>
          )
        )}
      </ul>
    </nav>
  </header>
  );
};

export default Header;
