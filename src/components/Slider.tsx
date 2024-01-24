'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface SliderProps {
  photos: string[];
}

const Slider = ({ photos }: SliderProps) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={20}
      className="max-w-[400px] w-full h-full"
    >
      {photos.map((item, index) => (
        <SwiperSlide
          className="bg-transparent w-[190px] h-[190px]"
          key={index}
        >
          <Image
            src={item}
            alt="Teammate's work"
            width={190}
            height={190}
            className="block w-full h-full object-cover rounded-[10px] select-none"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
