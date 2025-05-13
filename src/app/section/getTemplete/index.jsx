import React from 'react'
import line from '../../asset/svg/line.svg'
import Sline from '../../asset/svg/shorterLine.svg'
import background from '../../asset/svg/background.svg'
import Image from 'next/image';
import Button from '../../components/button';

export default function GetTemplete() {
  return (
    <div className='relative flex justify-center items-center bg-[#080035] rounded-[24px] lg:rounded-[48px] w-full h-[556px] lg:h-[656px] container md:mx-auto px-16'>
        <div className=''>
<Image src={line} alt='' className='absolute top-0 right-[45%]' />
<Image src={Sline} alt=''  className='absolute top-0 right-[46%]'/>
        <h1 className='text-[40px] lg:text-[56px] text-[#EFEFEF] font-semibold text-center'>Boost your customer relationships today</h1>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 pt-6">
                  <Button className="bg-[#EFEFEF] text-black text-[16px] md:text-[18px] font-medium px-6 py-3 rounded-[8px] cursor-pointer">
                    Start Free Trial
                  </Button>
                  <Button className="border border-[#EFEFEF] text-white text-[16px] md:text-[18px] font-medium px-6 py-3 rounded-[8px]">
                    Get Template
                  </Button>
                </div>
                <Image src={background} alt='background' className='absolute z-10 top-0 hidden lg:block overflow-hidden'/>
        </div>
    </div>
  )
}
