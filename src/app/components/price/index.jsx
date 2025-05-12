import React from "react";
import Image from "next/image";
import tick from "@/app/asset/svg/tick.svg";
import white from "@/app/asset/svg/white-tick.svg";

const PriceCard = ({
  title,
  amount,
  duration,
  description,
  listItems,
  buttonLabel,
  variant = "default",
}) => {
  const isWhiteVariant = variant === "white";

  const handleClick = () => {
    window.open("https://calendly.com/fejiro-gospel/consultation", "_blank");
  };

  return (
    <div
      className={`flex flex-col rounded-[16px] p-6 w-full xl:w-[363px] text-start border border-[#ccc] transition-all duration-300
      ${
        isWhiteVariant
          ? "bg-[#080035] lg:h-[673px] -mt-6"
          : "bg-[#E3E3E3] lg:h-[625px] mt-0"
      }`}
    >
      <div
        className={`space-y-3 inter-font ${
          isWhiteVariant ? "text-[#EFEFEF]" : "text-[#212121]"
        }`}
      >
        <h3 className="text-[14px] lg:text-[18px] font-medium ">{title}</h3>
        <p className={`text-[22px] lg:text-[40px] font-medium${isWhiteVariant ? 'text-[#AAAAAA]' : 'text-[#212121]' }`}>{amount}<span className="text-[18px] font-medium">/{duration}</span></p>
        <p
          className={`text-[13px] lg:text-[16px] font-medium ${
            isWhiteVariant ? "text-[#AAAAAA]" : "text-[#525252]"
          }`}
        >
          {description}
        </p>
        <button
          onClick={handleClick}
          className={`cursor-pointer w-full py-3 rounded-md transition duration-300 text-[18px] ${
            isWhiteVariant
              ? "bg-white text-black"
              : "bg-[#080035] text-white"
          }`}
        >
          {buttonLabel}
        </button>
      </div>
      <div className="border-b border-[#CCC] py-2"></div>
      <div
        className={`w-full space-y-3 inter-font ${
          isWhiteVariant ? "text-[#EFEFEF]" : "text-[#212121]"
        }`}
      >
        <h3 className="text-[16px] lg:text-[20px] font-medium pt-8">
          Features
        </h3>
        {listItems.map((item, index) => (
          <div key={index} className="flex gap-2 mb-6">
            <Image
              src={isWhiteVariant ? white : tick}
              alt="Tick icon"
              width={16}
              height={16}
            />
            <p className={`text-[13px] lg:text-[16px] font-medium`}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;
