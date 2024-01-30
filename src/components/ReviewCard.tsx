import { Review } from "@/assets/types";
import Image from "next/image";

interface ReviewCardProps {
  data: Review
}

const ReviewCard = ({ data }: ReviewCardProps) => {
  return (
    <div className="w-full h-full">
      <div className="relative max-w-[400px] w-full cursor-grab group h-[626px]">
        <div className={`w-full h-[402px] absolute z-10 group-hover:h-full transition-all 
        rounded-[20px] overflow-hidden duration-500`}>
          <Image
            src={data.img}
            alt={data.name}
            width={400}
            height={402}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-5 top-[422px] absolute group-hover:opacity-0 transition-all duration-500">
          <div className="text-[#1F0B0B] font-outfit text-[20px] font-semibold leading-[100%]">{data.name}</div>

          <div className="text-[#1F0B0B] font-outfit text-base font-normal line-clamp-6">
            {data.descr}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
