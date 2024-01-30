'use client';
import { reviews } from "@/assets/data"
import ReviewCard from "./ReviewCard"
import { Review } from "@/assets/types"
import Slider from "./Slider"

const Reviews = () => {
  return (
    <section id="reviews" className="w-full mt-[80px] md:mt-[100px] lg:mt-[150px] h-full">
      <div className="max-w-[1240px] w-full h-full m-auto px-[16px] sm:[25px] md:px-[50px] xl:px-0">
        <div className="h-full flex flex-col xl:flex-row lg:justify-between gap-[40px] md:gap-[70px] xl:gap-0">
          <h2 className="text-[#1F0B0B] text-outfit text-[36px] sm:text-[76px] md:text-[96px] font-black 
          leading-[100%] w-full sm:w-[483px] xl:w-[273px]">
            What Our Client Say
          </h2>

          <div className='h-full max-w-[400px] sm:max-w-none md:max-w-[820px] w-full'>
            <Slider
              data={reviews}
              component={(dataItem: Review) => <ReviewCard data={dataItem} />}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
