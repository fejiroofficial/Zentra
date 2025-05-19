
'use client';

import React from 'react';
import { testimonials } from '../../components/data';
import TestimonialCard from '../../components/testimonialCard'
import TagLabel from '../../components/tagLabel';

const topRow = testimonials.filter((_, i) => i % 2 === 0);
const bottomRow = testimonials.filter((_, i) => i % 2 !== 0);

export default function Testimonial() {
  return (
    <div className="px-6 lg:px-16 pb-6 py-16">
      <div className="flex flex-col items-center text-center mb-10">
        <TagLabel text="testimonial" />
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold max-w-3xl mt-4 text-black">
          Real Stories from Growing Businesses
        </h2>
      </div>

      <div className="overflow-x-hidden space-y-10">
  {/* Top Row - scrolls left */}
  <div className="flex gap-6 w-max animate-testimonials">
    {[...topRow, ...topRow].map((item, id) => (
      <TestimonialCard key={`top-${id}`} item={item} />
    ))}
  </div>

  {/* Bottom Row - scrolls right */}
  <div className="flex gap-6 w-max animate-testimonials-reverse">
    {[...bottomRow, ...bottomRow].map((item, id) => (
      <TestimonialCard key={`bottom-${id}`} item={item} />
    ))}
  </div>
</div>

    </div>
  );
}