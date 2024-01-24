import Teammate from "./Teammate";
import { team } from "@/assets/data";

const OurTeam = () => {
  return (
    <section className="w-full mt-[160px]">
      <div className="max-w-[1240px] w-full m-auto px-[16px] sm:[25px] md:px-[50px] xl:px-0">
        <div className="grid grid-cols-3 grid-rows-3">
          <h2 className="text-[#1F0B0B] font-outfit text-[96px] font-black leading-[96px]">
            Our Team
          </h2>

          <Teammate teammate={team[0]} />
        </div>
      </div>
    </section>
  )
}

export default OurTeam
