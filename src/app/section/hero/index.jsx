import Image from "next/image";
import React from "react";
import avatar from "@/app/asset/svg/avatar.svg";
import companyLogos from "@/app/asset/svg/company.svg";
import Button from "@/app/components/button";

export default function Hero() {
  return (
    <main className="flex flex-col justify-between flex-1 items-center text-center py-16 px-4">
      <div className="flex flex-col items-center justify-center gap-6 pt-10">
        <div className="flex items-center gap-2">
          <Image src={avatar} alt="avatar-img" />
          <p className="text-[14px] font-medium text-white opacity-70 text-start">
            Trusted by over 5k people <br/> worldwide
          </p>
        </div>

        <h1 className="text-[40px] md:text-[56px] font-bold max-w-[650px] leading-tight text-white">
          Grow Better with Your All in One CRM Platform
        </h1>

        <h4 className="text-[16px] md:text-[18px] font-medium max-w-[598px] text-white opacity-80">
          Unify your sales, marketing, and support teams with one easy-to-use
          platform built to scale with your business.
        </h4>

        <div className="flex flex-wrap justify-center gap-6 pt-6 pb-16">
          <Button className="bg-[#EFEFEF] text-black text-[16px] md:text-[18px] font-medium px-6 py-3 rounded-[8px] cursor-pointer">
            Start Free Trial
          </Button>
          <Button className="border border-[#EFEFEF] text-white text-[16px] md:text-[18px] font-medium px-6 py-3 rounded-[8px]">
            Get Template
          </Button>
        </div>
      </div>

  
      <footer className="mt-16 flex flex-col items-center gap-2">
        <h4 className="text-white text-[16px] font-medium">Trusted by:</h4>
        <Image src={companyLogos} alt="Company Logos" />
      </footer>
    </main>
  );
}
