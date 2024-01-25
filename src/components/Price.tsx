import Image from "next/image"
import PriceSlider from "./PriceSlider"
import { PlusIcon } from "@/assets/uiComponents"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <section className="w-full mt-[150px]">
      <div className="max-w-[1240px] w-full h-full m-auto px-[16px] sm:[25px] md:px-[50px] xl:px-0">
        <div className="flex justify-between">
          <h2 className="text-[#1F0B0B] text-outfit text-[96px] font-black leading-[100%]">Price</h2>

          <PriceCard />
          {/* <PriceSlider /> */}
        </div>
      </div>
    </section>
  )
}

export default Price
