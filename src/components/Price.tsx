'use client';
import PriceCard from "./PriceCard"
import Slider from "./Slider"
import { price } from "@/assets/data"
import { Price } from "@/assets/types"

const Price = () => {
  return (
    <section id="price" className="w-full mt-[80px] md:mt-[100px] lg:mt-[150px] h-full">
      <div className="max-w-[1240px] w-full h-full m-auto px-[16px] sm:[25px] md:px-[50px] xl:px-0">
        <div className="h-full flex flex-col lg:flex-row lg:justify-between gap-[40px] md:gap-[70px] xl:gap-0 flex-wrap">
          <h2 className="text-[#1F0B0B] text-outfit text-[96px] font-black leading-[100%]">Price</h2>
          <div className='h-full md:max-w-[820px] w-full flex justify-start'>
            <Slider data={price} component={(dataItem: Price) => <PriceCard priceInfo={dataItem} />} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Price
