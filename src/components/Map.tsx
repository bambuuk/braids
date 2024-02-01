'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';

const Map = () => {
  const { isMobile, isSmallTablet, isTablet, isDesktop } = useMediaQuery();
  const [imgSrc, setImgSrc] = useState("/map-tablet.png");

  useEffect(() => {
    setImgSrc(
      isDesktop
        ? "/map.png"
        : isSmallTablet
          ? "/map-tablet.png"
          : isMobile
            ? "/map-mobile.png"
            : "/map.png"
    );
  }, [isMobile, isSmallTablet, isTablet, isDesktop]);

  return (
    <div id="map" className='w-full h-[447px] mt-[80px] md:mt-[100px] lg:mt-[150px] relative'>
      <Image
        src={imgSrc}
        width={1440}
        height={447}
        alt="Map"
        className='w-full h-full object-cover'
      />
      <div
        className='absolute z-10 p-[20px] sm:p-[30px] bottom-[40%] sm:bottom-[170px] left-[10px] 
        sm:left-[20px] rounded-[20px] bg-[#1F0B0B] opacity-80
        shadow-little flex flex-col gap-5 font-outfit text-[20px] font-semibold leading-[100%]'
      >
        <div className="flex items-center gap-[10px]">
          <Image
            src='/icons/location.png'
            width={24}
            height={24}
            alt=""
            className='w-6 h-6 object-cover'
          />
          <span>Kyiv, Myru Street, 25-a</span>
        </div>
        <div className="flex items-center gap-[10px]">
          <Image
            src='/icons/phone.png'
            width={24}
            height={24}
            alt=""
            className='w-6 h-6 object-cover'
          />
          <a href="tel:+380631231212">+38(063)-123-12-12</a>
        </div>
      </div>
    </div>
  )
}

export default Map
