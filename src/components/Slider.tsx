'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Navigation } from 'swiper/modules';
import { Price } from '@/assets/types';
import 'swiper/css';
import 'swiper/css/navigation';
import { LeftArrow, RightArrow } from '@/assets/uiComponents';

interface SliderProps {
  data: Price[];
  component: (dataItem: Price) => JSX.Element
}

const GeneralSlider = ({ data, component }: SliderProps) => {
  const { isTablet, isSmallTablet } = useMediaQuery();

  return (
    <Swiper
      slidesPerView={isSmallTablet ? 2 : 1}
      spaceBetween={isTablet ? 20 : 5}
      speed={300}
      modules={[Navigation]}
      navigation={{
        prevEl: '.prevBtn',
        nextEl: '.nextBtn',
      }}
      className=''
    >
      {data.map((item, i) => (
        <SwiperSlide
          key={i}
          className='mb-[52px]'
        >
          {component(item)}
        </SwiperSlide>
      ))}

      <div className='absolute bottom-0 right-0 z-[10000000000] flex gap-[50px]'>
        <button className="prevBtn">
          <LeftArrow />
        </button>
        <button className="nextBtn">
          <RightArrow />
        </button>
      </div>
    </Swiper>
  )
}

export default GeneralSlider
