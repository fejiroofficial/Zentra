import React from 'react'
import Image from 'next/image'
import X from '../../asset/social/x.svg'
import discord from '../../asset/social/discord.svg'
import facebook from '../../asset/social/facebook.svg'
import linkdln from '../../asset/social/linkdln.svg'
import zentra from '../../asset/svg/zentra.svg'

export default function Footer() {
  return (
    <>
      <div className='container mx-auto py-16 px-6'>
        <div className='flex flex-col lg:flex-row justify-between lg:items-center text-[#212121] gap-12'>
          <div className='lg:text-left space-y-6'>
            <h2>Zentra</h2>
            <h2 className='text-[30px] lg:text-[40px] font-bold leading-tight text-wrap max-w-md'>
              Sell smarter. Move faster.
              Stay <span className='text-gradient-dark-blue'>ahead</span>
            </h2>
          </div>

          <div className='flex flex-col lg:items-end gap-6 justify-between lg:space-y-8'>
            <div className='flex flex-col lg:flex-row gap-4 lg:gap-6'>
              <p className='text-[18px] font-medium'>Features</p>
              <p className='text-[18px] font-medium'>How it Works</p>
              <p className='text-[18px] font-medium'>Pricing</p>
              <p className='text-[18px] font-medium'>FAQs</p>
              <p className='text-[18px] font-medium'>Contact Us</p>
              <p className='text-[18px] font-medium'>Get Template</p>
            </div>

            <div className='flex gap-6 items-end'>
              <Image src={X} alt='x-icon' className='w-[33px] h-[30px]' />
              <Image src={discord} alt='discord-icon' className='w-[33px] h-[30px]' />
              <Image src={facebook} alt='facebook-icon' className='w-[33px] h-[30px]' />
              <Image src={linkdln} alt='linkedin-icon' className='w-[33px] h-[30px]' />
            </div>
          </div>
        </div>

    
        <div className='border-b border-[#AAAAAA] my-8' />

  
        <div className='text-center py-4'>
          <h3 className='text-[#626262] text-[16px] font-medium'>
            © {new Date().getFullYear()}. Copyright DesignOrah
          </h3>
        </div>
      </div>
      <div className='w-full overflow-hidden px-2'>
        <Image src={zentra} alt='zentra' className='w-full' />
      </div>
    </>
  )
}
