'use client';

import React from 'react';
import Image from 'next/image';
import { testimonials } from '../../components/data';
import TagLabel from '../../components/tagLabel';

export default function Testimonial() {
  return (
    <div className="px-6 lg:px-16 pb-6 py-16">
      <div className="flex flex-col items-center text-center mb-10">
        <TagLabel text="testimonial" />
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold max-w-3xl mt-4 text-black">
          Real Stories from Growing Businesses
        </h2>
      </div>

      <div className="overflow-x-hidden">
        <div
          className="grid grid-rows-2 grid-flow-col gap-6 w-max animate-testimonials"
        >
          {testimonials.map((item, id) => (
            <div
              key={id}
              className="rounded-3xl p-6 bg-[#E3E3E3] w-[335px] md:w-[419px] h-[346px] flex flex-col justify-between"
            >
              <h3 className="text-[20px] lg:text-[24px] font-semibold text-[#212121] mb-2">
                {item.title}
              </h3>
              <p className="text-[#212121] mb-4">{item.description}</p>
              <div className="flex items-center gap-3 mt-auto pt-6">
                <Image
                  src={item.avatar}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="space-y-1">
                  <h4 className="font-semibold text-[18px] text-black">
                    {item.avaterName}
                  </h4>
                  <p className="text-[16px] text-[#626262]">{item.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
