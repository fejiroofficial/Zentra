import Image from "next/image";
import React from "react";
import image from "@/app/asset/svg/about.svg";
import icon from '@/app/asset/svg/tick.svg';
import Button from "@/app/components/button";
// import TagLabel from "@/app/components/tagLabel";
import TagLabel from '../../components/tagLabel'
export default function About() {
    const features = [
        "A centralized hub where all customer interactions and data live",
        "A platform that automates busywork, not adds to it",
        "A system that's easy to learn and enjoyable to use",
        "Insights to help you understand and grow your business"
      ];
      
  return (
    <div className="container mx-auto text-black py-16" id="about">
      <div className="text-center flex flex-col gap-8 px-4">
      <TagLabel text="About Zentra" />

        <h2>What does Zentra do?</h2>

        <div className="flex flex-col lg:flex-row md:items-center justify-between gap-10 lg:mt-8">
          <div className="max-w-xl text-left space-y-6">
            <h3 className="text-[24px] md:text-[30px] font-semibold">
              Disconnected tools are costing your team time, money, and customers.
            </h3>
            <h4 className="normal text-gray-700">
              Growing businesses often cobble together multiple apps for sales tracking, marketing emails, customer support, and task management and that leads to chaos. 
            </h4>
            <p>What your business really needs is...</p>
            <div className="space-y-4">
      {features.map((text, index) => (
        <div key={index} className="flex items-center gap-3">
          <Image src={icon} alt="icon" />
          <h3 className="text-base">{text}</h3>
        </div>
      ))}
    </div>
    <div >
            <Button className="w-full lg:w-[170px] bg-[#080035] text-[#EFEFEF] p-2 rounded-[8px] text-[18px]">Start Free Trial</Button>
        </div>
          </div>

          <div className="max-w-sm">
            <Image src={image} alt="About Zentra illustration" className="w-[490px] h-auto lg:h-[550px]"/>
          </div>
        </div>
     
      </div>
    </div>
  );
}
