import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { CiCircleQuestion } from "react-icons/ci";
import { LiaWalletSolid } from "react-icons/lia";
import { IoHomeOutline } from "react-icons/io5";
const Sidebar = ({issideOpen, sideOpen}) => {
  const multiItems = [
    {
      icon: <FaRegUser className="mr-2 text-[13px] w-[20px]" />,
      text: "Profile",
    },
    {
      icon: <LiaWalletSolid className="mr-2 text-[18px] w-[20px]" />,
      text: "Transaction",
    },
    {
      icon: <CiCircleQuestion className="mr-2 text-[20px] w-[20px]" />,
      text: "Help Center",
    },
  ];
  return (
    <nav className="w-64 bg-gray-100 py-4 flex-shrink-0">
      <div className="mb-4">
        <a
          className="flex items-center p-2 rounded bg-blue-600 text-white"
          href="index.html"
        >
          <IoHomeOutline className="mr-2 text-[18px] w-[20px]" /> Overview
        </a>
      </div>
      <ul className="space-y-2">
        {multiItems.map((item, index) => (
          <li
          onClick={() => issideOpen(item.text)}
            key={index}
            className={`flex items-center cursor-pointer p-2 rounded ${sideOpen === item.text ? 'bg-gray-400 text-white':''} `}
          >
            {item.icon}
            {item.text}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
