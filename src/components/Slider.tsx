'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from "react-slick";
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Navigation } from 'swiper/modules';
import { Price } from '@/assets/types';
import 'swiper/css/navigation';
import 'swiper/css';
import { LeftArrow, RightArrow } from '@/assets/uiComponents';

interface SliderProps {
  data: Price[];
  component: (dataItem: Price) => JSX.Element
}

const GeneralSlider = ({ data, component }: SliderProps) => {
  const { isSmallTablet } = useMediaQuery();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={20}
      speed={300}
      modules={[Navigation]}
      navigation={{
        prevEl: '.prevBtn',
        nextEl: '.nextBtn',
      }}
      grabCursor
      className="w-full h-full grid justify-end overflow-hidden"
    >
      <div className='swiper-wrapper grid grid-cols-2'>
        {data.map((item, i) => (
          <SwiperSlide
            className="bg-transparent h-full"
            key={i}
          >
            {component(item)}
          </SwiperSlide>
        ))}
      </div>
      <div className='mt-5 flex gap-[50px] justify-end'>
        <button className="prevBtn">
          <LeftArrow />
        </button>
        <button className="nextBtn">
          <RightArrow />
        </button>
      </div>
    </Swiper>

    // <div>
    //   <Slider {...settings}>
    //     {data.map((item, i) => (
    //       <div
    //         className="bg-transparent h-full"
    //         key={i}
    //       >
    //         {component(item)}
    //       </div>
    //     ))}
    //   </Slider>
    // </div>
  )
}

export default GeneralSlider
