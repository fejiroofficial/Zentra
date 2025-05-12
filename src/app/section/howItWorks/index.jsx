import Image from 'next/image';
import React from 'react'
import banner from '@/app/asset/svg/banner.svg'
import line from '@/app/asset/svg/line.svg'
import Sline from '@/app/asset/svg/shorterLine.svg'
// import TagLabel from '@/app/components/tagLabel';
import TagLabel from '../../components/tagLabel'
import Button from '@/app/components/button';

export default function HowItWorks() {
    const HowItWorksDetails = [
        {
          id: 'step 1',
          title: 'Sign Up & Set Up',
          description: 'Create an account, connect your favorite tools, import contacts, and get your CRM running in less than 10 minutes.',
        },
        {
          id: 'step 2',
          title: 'Customize & Automate',
          description: 'Tailor pipelines, set rules, and build automated workflows to handle repetitive tasks while your team focuses on high-impact work.',
        },
        {
          id: 'step 3',
          title: 'Track, Collaborate & Grow',
          description: 'Monitor deals, view real-time performance, share insights across teams, and scale operations with total visibility and zero data silos.',
        },
      ];
  return (
    <div className='container mx-auto py-16 px-6' id='howItWorks'>  
        <div className='flex flex-col items-center my-6'>
        <TagLabel text="How It works" />
            <h2 className="text-center max-w-2xl mt-4 text-black">Simple Setup. Powerful Results.</h2>
        </div>
            <div className="flex flex-col-reverse lg:flex-row justify-between items-stretch gap-2 bg-[#F4F4F5] p-2 lg:p-6 rounded-[40px] border border-[#CCCCCC]">
    <div className="flex flex-col h-full flex-1">
      {HowItWorksDetails.map((works, index) => {
        const isActive = index === 0;
  
        return (
          <div
            key={works.id}
            className={`relative p-4 lg:p-6 rounded-4xl text-start ${
              isActive ? 'bg-[#080035] text-white' : 'text-black'
            }`}
          >
            <div    className={`absolute right-0 top-0 ${
              isActive ? '' : 'hidden'
            }`}>

            <Image src={line} alt='line-svg' />
            </div>
            <div    className={`absolute right-0 top-0 ${
              isActive ? '' : 'hidden'
            }`}>

            <Image src={Sline} alt='line-svg' />
            </div>
            <div
              className={`max-w-[100px] rounded-[24px] px-4 py-2 text-center text-[14px] mb-4 ${
                isActive
                  ? 'text-white border border-[#40C2FF] '
                  : 'border border-[#626262]'
              }`}
            >
              {works.id}
            </div>
  
            <h3 className={`text-[20px] lg:text-[24px] font-bold lg:pt-2 ${isActive ? 'text-white': 'text-[#626262]'} `}>{works.title}</h3>
            <p className={`normal font-medium pt-2 ${isActive ? 'text-[#AAAAAA]': 'text-[#626262]'} `}>{works.description}</p>
          </div>
        );
      })}
    </div>
  
    <div className="flex justify-center items-center flex-1">
    <div className="relative w-full h-full min-h-[400px] md:min-h-[644px]">
      <Image
        src={banner}
        alt="banner-image"
        fill
        className="object-contain"
      />
    </div>
  </div>
  </div>
  <div className='flex justify-center py-8'>
            <Button className="w-full lg:w-[170px] bg-[#080035] text-[#EFEFEF] p-2 rounded-[8px] text-[18px]">Start Free Trial</Button>
        </div>
  </div>
  )
}
