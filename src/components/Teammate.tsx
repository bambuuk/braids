import Slider from "./Slider";
import Image from "next/image";
import clsx from 'clsx';

interface TeammateProps {
  teammate: {
    name: string;
    experience: number;
    tags: string[];
    photos: string[];
    mainPhoto: string;
  },
  position: string;
}

const Teammate = ({ teammate, position }: TeammateProps) => {
  console.log(typeof position)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[16px] sm:gap-5 rounded-[20px] hover:bg-[#1F0B0B]
    transition-all ease-in-out group duration-500 max-w-[820px] w-full mx-auto lg:mx-0">
      <Image
        src={teammate.mainPhoto}
        alt={teammate.name}
        width={400}
        height={353}
      />

      <div className="text-[#1F0B0B] font-outfit text-base font-normal group-hover:text-[#EEE]
      py-[16px] sm:py-5 flex flex-col gap-[15px] max-h-[353px] h-full max-w-[820px] w-full">
        <div>
          <span className="text-[20px] font-semibold leading-5">
            {teammate.name},&nbsp;
          </span>
          <span>
            {`${teammate.experience > 1 ? teammate.experience + ' years ' : teammate.experience + ' year '}`}
            of experience
          </span>
        </div>

        <div className="flex gap-x-5 flex-wrap">
          {teammate.tags.map((item, index) => (
            <span className="underline" key={index}>{item}</span>
          ))}
        </div>

        <div>
          Works:
        </div>

        <Slider photos={teammate.photos} />
      </div>
    </div>
  )
}

export default Teammate
