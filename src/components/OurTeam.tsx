import Teammate from "./Teammate";
import { team } from "@/assets/data";

const OurTeam = () => {
  return (
    <section className="w-full mt-[80px] sm:mt-[100px] lg:mt-[160px]">
      <div className="max-w-[1240px] w-full m-auto px-[16px] sm:[25px] md:px-[50px] xl:px-0">
        <div className="flex flex-col gap-[40px] md:gap-[70px] lg:gap-[50px]">
          <div className="flex flex-col gap-[40px] lg:gap-[40px] lg:flex-row lg:justify-between">
            <h2 className="lg:max-w-[310px] w-full text-[#1F0B0B] font-outfit text-[36px] sm:text-[96px] 
            font-black leading-[100%]">
              Our Team
            </h2>
            <Teammate teammate={team[0]} position={'second'} />
          </div>

          <div className="flex flex-col-reverse gap-[40px] md:gap-[70px] lg:gap-[40px] lg:flex-row lg:justify-between 
          items-start lg:items-center">
            <Teammate teammate={team[1]} position={'first'} />
            <p className="hidden sm:block max-w-[290px] xl:max-w-[310px] w-full text-[#1F0B0B] font-outfit text-base font-normal">
              Visit &rsquo;Braid Space&rsquo;—step into our unique haven where the art of braiding transforms
              into unmatched beauty and style.
            </p>
          </div>

          <div className="flex flex-col gap-[40px] md:gap-[70px] lg:gap-[40px] lg:flex-row lg:justify-between 
          items-start lg:items-center">
            <p className="hidden sm:block max-w-[290px] xl:max-w-[310px] w-full text-[#1F0B0B] font-outfit text-base font-normal">
              At our place, you will encounter three talented artisans who have delved deep into the secrets
              and techniques of crafting the most enchanting braids.
            </p>
            <Teammate teammate={team[2]} position={'second'} />
          </div>
        </div>
      </div>
    </section >
  )
}

export default OurTeam
