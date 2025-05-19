import React from "react";
import Link from "next/link";
import NavBar from "../../components/navbar";
import Button from "../../components/button";

const Header = () => {
  return (
    <div className="lg:container lg:mx-auto">
      <header className="lg:py-6 rounded-md lg:px-2 lg:mx-20">
        <div className="flex justify-between items-center px-2 md:px-6 py-4 lg:px-2 lg:py-2">
          <Link href="/" className="flex items-center gap-2">
            <p className="text-[30px] font-medium text-[#EFEFEF] pl-3">
              Zentra
            </p>
          </Link>

          <div className=" hidden lg:flex items-center lg:fixed lg:top-8 left-1/2 -translate-x-1/2 z-50 bg-[#080035] border border-[#40C2FF] px-6 py-4 rounded-[30px] max-h-[42px]">
            <NavBar />
          </div>

          <div className="hidden lg:block">
            <Button className="bg-[#EFEFEF] text-black normal p-3 max-w-[170px] rounded-[8px] hover:bg-black hover:text-white cursor-pointer">
              Start Free Trial
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
