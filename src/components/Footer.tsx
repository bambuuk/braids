import React from 'react'
import Navigation from './Navigation'
import SocialNetwork from './SocialNetwork'

const Footer = () => {
  return (
    <footer className='w-full pt-[70px] pb-[15px] bg-[#1F0B0B]'>
      <div className="max-w-[1240px] w-full h-full m-auto px-[16px] sm:[25px] md:px-[50px] xl:px-0">
        <div className='flex flex-col gap-[70px]'>
          <div className='flex flex-col gap-[30px] items-center'>
            <h2 className='text-[#FFBE42] font-outfit text-[24px] font-black leading-normal'>Braid Space</h2>
            <Navigation color='yellow' />
            <SocialNetwork place="footer" />
          </div>

          <div className='mt-[15px] text-[#FFBE42] font-raleway text-sm font-normal flex flex-col gap-[16px] 
          md:gap-0 md:flex-row justify-between'>
            <div className='flex text-start flex-wrap'>
              2023 created by&nbsp;
              <a
                href='https://www.linkedin.com/in/asetu-poplavska/'
                target='_blank'
                className='underline lg:no-underline lg:hover:underline transition-all duration-300'
              >
                Asetu Poplavska
              </a>
              <span className="block max-w-full bg-transparent group-hover:bg-[#FFBE42] 
            transition-all ease-in-out duration-275 h-0.5">
              </span>
              &nbsp;and&nbsp;
              <a
                href='https://www.linkedin.com/in/ivan-korobka-328b77208/'
                target='_blank'
                className='underline lg:no-underline lg:hover:underline transition-all duration-300'
              >
                Ivan Korobka
              </a>
              . All rights reserved
            </div>

            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
