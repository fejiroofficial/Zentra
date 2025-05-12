import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/asset/svg/logo.svg";
import Button from "../../components/Button";
import NavBar from "@/app/components/navbar";

const Header = () => {
  return (
    <div className="container lg:mx-auto">
    <header className=" lg:py-6 rounded-md lg:px-2 lg:mx-20">
 

      <div className="flex justify-between items-center px-2 lg:px-6">
        <Link href="/" className="flex items-center gap-2">
     <p className="text-[40px] font-medium text-[#EFEFEF]">LOGO</p>
       
        </Link>
        <div className="lg:border-[1px] border-[#40C2FF] px-6 py-2 rounded-[30px] max-h-[42px]">

        <NavBar />
        </div>
<div className="hidden lg:block">

        <Button className={'bg-[#EFEFEF] text-black text-[18px] font-medium p-3 max-w-[170px] rounded-[8px]'}>Start Free Trial</Button>
</div>
      </div>
    </header>
    </div>

  );
};

export default Header;
