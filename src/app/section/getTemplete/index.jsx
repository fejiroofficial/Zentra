import React from 'react';
import line from '../../asset/svg/line.svg';
import Sline from '../../asset/svg/shorterLine.svg';
import background from '../../asset/svg/background.svg';
import Image from 'next/image';
import Button from '../../components/button';

export default function GetTemplate() {
  return (
    <div className="container mx-auto relative bg-[#080035] rounded-[24px] lg:rounded-[48px] w-[90%] md:w-full h-[556px] lg:h-[656px] overflow-hidden">
      

      <Image
        src={background}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 hidden lg:block"
      />
      <div className="relative z-10 container mx-auto px-6 lg:px-16 flex flex-col justify-center items-center h-full text-center">
        <Image
          src={line}
          alt=""
          className="absolute top-0 right-[20%] md:right-[45%]"
        />
        <Image
          src={Sline}
          alt=""
          className="absolute top-0 right-[20%] md:right-[46%]"
        />

        <h1 className="text-[32px] md:text-[40px] lg:text-[56px] text-[#EFEFEF] font-semibold max-w-4xl leading-tight">
          Boost your customer relationships today
        </h1>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 pt-6">
          <Button className="bg-[#EFEFEF] text-black text-[16px] md:text-[18px] font-medium px-6 py-3 rounded-[8px] hover:bg-black hover:text-white">
            Start Free Trial
          </Button>
          <Button className="border border-[#EFEFEF] text-white text-[16px] md:text-[18px] font-medium px-6 py-3 rounded-[8px] hover:bg-white hover:text-black">
            Get Template
          </Button>
        </div>
      </div>
    </div>
  );
}
