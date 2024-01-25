'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import 'swiper/css';

interface SliderProps {
  photos: string[];
}

const TeammatePhotoSlider = ({ photos }: SliderProps) => {
  const { isSmallTablet } = useMediaQuery();

  return (
    <Swiper
      slidesPerView={!isSmallTablet ? 1.5 : 2}
      spaceBetween={20}
      className="max-w-[400px] w-full h-full"
    >
      {photos.map((item, index) => (
        <SwiperSlide
          className="bg-transparent"
          key={index}
        >
          <Image
            src={item}
            alt="Teammate's work"
            width={190}
            height={190}
            className="block max-w-[190px] max-h-[190px] w-full h-full object-cover rounded-[10px] select-none"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default TeammatePhotoSlider
