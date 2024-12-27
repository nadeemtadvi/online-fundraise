import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const SocialDropdown = () => {
  const socialLinks = [
    {
      name: "nadeem@gmail.com",
      img: (
        <IoMdMail className="text-gray-400  hover:text-blue-600 text-[1.9rem]" />
      ),
    },
    {
      name: "Github",
      img: (
        <FaGithub className="text-gray-400  hover:text-blue-600 text-[1.9rem]" />
      ),
    },
    {
      name: "LinkedIn",
      img: (
        <FaLinkedinIn className="text-gray-400  hover:text-blue-600 text-[1.9rem]" />
      ),
    },
    {
      name: "Instagram",
      img: (
        <FaInstagram className="text-gray-400  hover:text-blue-600 text-[1.9rem]" />
      ),
    },
    {
      name: "Whatsapp",
      img: (
        <IoLogoWhatsapp className="text-gray-400  hover:text-blue-600 text-[1.9rem]" />
      ),
    },

    {
      name: "Facebook",
      img: (
        <FaFacebookF className="text-gray-400  hover:text-blue-600 text-[1.9rem]" />
      ),
    },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <div className="grow relative px-6 py-4 mb-24">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Contact</h1>
          <small className="text-gray-500">Hello Thomas, welcome back!</small>
        </div>
        <div className="  mt-2 w-full bg-white shadow-lg rounded-lg p-2">
          <div className="grid grid-cols-3 gap-2 w-full">
            {socialLinks.map((link, index) => (
              <a key={index} className="p-10 text-center " href="#">
                <span className="inline-flex  w-16 h-16 mb-3 bg-gray-100 hover:bg-white rounded-full  items-center justify-center">
                  {link.img}
                </span>
                <span className="block text-md">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialDropdown;
