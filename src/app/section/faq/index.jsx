'use client';

import TagLabel from '@/app/components/tagLabel';
import React, { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

const faqs = [
  {
    question: 'What makes your CRM different from others?',
    answer:
      "Most projects are completed in 10–14 days, depending on complexity and feedback rounds. We'll agree on a timeline before starting.",
  },
  {
    question: 'How long does it take to get started?',
    answer:
      'Yes our system works whether your traffic comes from SEO, social media, partnerships, or paid ads. We focus on making sure the funnel converts, regardless of how visitors find you.',
  },
  {
    question: 'Can I import contacts from another CRM?',
    answer:
      'No problem. We can audit and improve your existing assets, or start from scratch if needed. The goal is to make everything work better together.',
  },
  {
    question: 'Is your CRM secure?',
    answer:
      "We're flexible. We typically work with platforms like Webflow, Next.js, or Framer for pages, and tools like ConvertKit, or custom setups for email. If you already use something else, we’ll adapt.",
  },
  {
    question: 'Can I customize workflows and pipelines?',
    answer:
      'Yes. Every package includes a post-launch check-in. For ongoing optimization, consulting, or scaling support, our Growth Funnel tier includes long-term collaboration.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'Yes. Every package includes a post-launch check-in. For ongoing optimization, consulting, or scaling support, our Growth Funnel tier includes long-term collaboration.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-between container mx-auto px-6 lg:px-16 py-16">
     <TagLabel text='FAQs' />
      <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-center mt-4 text-black leading-tight">
      You Asked, Zentra <br /> Answered
      </h2>

      <div className="mb-18 flex flex-col gap-6 w-full max-w-3xl pt-12">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="rounded-2xl border border-[#212121] overflow-hidden">
              <button
                className={`w-full flex justify-between items-center p-4 text-left text-lg font-medium transition ${
                  isOpen ? 'rounded-t-2xl' : 'rounded-2xl'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-[16px] lg:text-[18px] font-medium">{faq.question}</span>
                {isOpen ? (
                  <RiArrowDropUpLine size={28} />
                ) : (
                  <RiArrowDropDownLine size={28} />
                )}
              </button>
              <div
                className={`transition-all duration-300 bg-white ${
                  isOpen ? 'max-h-30 rounded-b-2xl' : 'max-h-0'
                } overflow-hidden`}
              >
                <p className="text-[14px] lg:text-[18px] font-normal p-6">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
