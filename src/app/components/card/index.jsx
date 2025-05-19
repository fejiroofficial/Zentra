import React from "react";
import two from "../../asset/features/two.svg";
import Image from "next/image";
export default function CardFeatures({ tittle, description, image }) {
  return (
    <div className="relative flex flex-col justify-between items-center p-4 md:p-6 md:w-[418px] h-[379px] md:h-[442px] rounded-[40px] bg-[#080035]">
      <div className="flex items-center justify-center ">

      <Image src={image} alt="image" className="object-contain absolute top-4" />
      </div>
      <div className="">
        <h3 className="sub-tittle">{tittle}</h3>
        <p className="normal text-[#AAA]">{description}</p>
      </div>
    </div>
  );
}
