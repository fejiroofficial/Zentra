"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import menu from "../../asset/svg/menu.svg";
import Image from "next/image";
import Button from "../button";


const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="relative">
      <button
        className="text-white lg:hidden"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <Image src={menu} alt="menu-icon" width={30} height={30}/>
      </button>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#080035] bg-opacity-80 flex justify-center z-50">
          <div className="flex flex-col justify-between items-center relative top-0 rounded-lg shadow-lg w-full h-1/2 p-6">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <AiOutlineClose size={24} />
            </button>
            <ul className="space-y-6 text-center ">
              <li>
                <a
                  href="#features"
                  className="text-white normal hover:text-[#40C2FF]"
                  onClick={toggleMenu}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#howItWorks"
                  className="block text-white normal hover:text-[#40C2FF]"
                  onClick={toggleMenu}
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="block text-white normal hover:text-[#40C2FF]"
                  onClick={toggleMenu}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="block text-white normal hover:text-[#40C2FF]"
                  onClick={toggleMenu}
                >
                  FAQ
                </a>
              </li>
            </ul>
            <div className="block lg:hidden">
              <Button className='bg-[#EFEFEF] text-black normal p-3 max-w-[170px] rounded-[8px]'>Start Free Trial </Button>
            </div>
          </div>
        </div>
      )}
      <ul className="hidden lg:flex gap-4">
        <li>
          <a href="#features" className="text-white text-[18px] hover:text-[#40C2FF] font-medium">
            Features
          </a>
        </li>
        <li>
          <a href="#howItWorks" className="text-white text-[18px] hover:text-[#40C2FF] font-medium">
            How it Works
          </a>
        </li>
        <li>
          <a href="#pricing" className="text-white text-[18px] hover:text-[#40C2FF] font-medium">
            Pricing
          </a>
        </li>
        <li>
          <a href="#faq" className="text-white text-[18px] hover:text-[#40C2FF]">
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
