import Image from "next/image";
import React from "react";
import avatar from "../../asset/svg/avatar.svg";
import Button from "../../components/button";
import piggy from "../../asset/header/piggy.svg";
import axa from "../../asset/header/axa.svg";
import flutter from "../../asset/header/flutter.svg";
import talent from "../../asset/header/talentQL.svg";
import kora from "../../asset/header/kora.svg";

export default function Hero() {
  return (
    <main className="flex flex-col justify-between flex-1 items-center text-center py-6 md:py-16 px-4">
      <div className="flex flex-col items-center justify-center gap-6 md:pt-10">
        <div className="flex items-center gap-2">
          <Image src={avatar} alt="avatar-img" />
          <p className="text-[14px] font-medium text-white opacity-70 text-start">
            Trusted by over 5k people <br/> worldwide
          </p>
        </div>

        <h1 className="text-[40px] md:text-[56px] font-bold max-w-[650px] leading-tight text-white">
          Grow Better with Your All in One CRM Platform
        </h1>

        <h4 className="normal max-w-[598px] text-white opacity-80">
          Unify your sales, marketing, and support teams with one easy-to-use
          platform built to scale with your business.
        </h4>

        <div className="flex flex-wrap justify-center gap-6 pt-6 pb-16">
          <Button className="w-full lg:w-[170px] bg-[#EFEFEF] text-black normal px-6 py-3 rounded-[8px] hover:bg-black hover:text-white">
            Start Free Trial
          </Button>
          <Button className="w-full lg:w-[170px] border border-[#EFEFEF] text-white hover:bg-white hover:text-black normal px-6 py-3 rounded-[8px]">
            Get Template
          </Button>
        </div>
      </div>

  
      <footer className="w-full lg:w-1/2 md:mt-20 flex flex-col items-center gap-2 overflow-scroll">
  <h4 className="text-white text-[16px] font-medium mb-2">Trusted by:</h4>
  <div className="relative w-full overflow-x-scroll">
    <div className="flex gap-[24px] lg:gap-[40px] justify-center items-center whitespace-nowrap lg:w-full">
      <Image src={piggy} alt="Piggy" width={150} height={40} className="w-[151px] lg:w-[225px] h-[40px]" />
      <Image src={flutter} alt="Flutter" width={150} height={40} className="w-[151px] lg:w-[225px] h-[40px]" />
      <Image src={axa} alt="AXA" width={150} height={40} className="w-[151px] lg:w-[225px] h-[40px]" />
      <Image src={kora} alt="Kora" width={150} height={40} className="w-[151px] lg:w-[225px] h-[40px]" />
      <Image src={talent} alt="TalentQL" width={50} height={40} className="w-[151px] lg:w-[225px] h-[40px]" />
    </div>
  </div>
</footer>

    </main>
  );
}
