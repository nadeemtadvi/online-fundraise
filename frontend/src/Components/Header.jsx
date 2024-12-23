import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-3">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="index.html" className="text-xl font-bold">
          SADAKA
        </a>
        <ul className="flex space-x-4">
          {["HOME", "ABOUT", "CAUSES", "GALLERY", "CONTACT"].map(
            (item, index) => (
              <li key={index} className="relative group">
                <a
                  className="hover:underline"
                  href={item.toLowerCase() + ".html"}
                >
                  {item}
                </a>
                {item === "CAUSES" && (
                  <ul className="absolute hidden group-hover:block bg-blue-600 text-white mt-2 space-y-2">
                    <li>
                      <a
                        href="causes.html"
                        className="block px-4 py-2 hover:bg-blue-500"
                      >
                        Causes list
                      </a>
                    </li>
                    <li>
                      <a
                        href="causes-single.html"
                        className="block px-4 py-2 hover:bg-blue-500"
                      >
                        Single cause
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
