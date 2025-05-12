import React from "react";

const TagLabel = ({ text }) => {
  return (
    <div className="flex justify-center items-center border border-[#CCCCCC] rounded-[33px] bg-[#F6F5FF] px-6 py-2 max-w-fit mx-auto">
      <p className="text-[18px] text-center font-medium text-[#212121]">
        {text}
      </p>
    </div>
  );
};

export default TagLabel;
