'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { testimonials } from '@/app/components/data';
import TagLabel from '@/app/components/tagLabel';

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const testimonialsCount = testimonials.length;
  const extendedTestimonials = [...testimonials, testimonials[0]];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // loop reset logic
  useEffect(() => {
    if (currentIndex === testimonialsCount) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500); // match transition duration
      return () => clearTimeout(timeout);
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex, testimonialsCount]);

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
          className={`grid grid-rows-2 grid-flow-col gap-6 w-max ${
            isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''
          }`}
          style={{
            transform: `translateX(-${currentIndex * 419}px)`,
          }}
        >
          {extendedTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-6 bg-[#E3E3E3] w-[419px] flex flex-col justify-between"
            >
              <h3 className="text-[24px] font-medium text-[#212121] mb-2">
                {item.title}
              </h3>
              <p className="text-[18px] text-[#212121] mb-4 font-medium">
                {item.description}
              </p>
              <div className="flex items-center gap-3 mt-auto pt-6">
                <Image
                  src={item.avatar}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="space-y-1">
                  <h4 className="font-semibold text-[18px]">
                    {item.avatarName}
                  </h4>
                  <p className="text-[16px] text-[#626262]">
                    {item.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
