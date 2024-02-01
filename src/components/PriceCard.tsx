'use client'
import clsx from "clsx";
import Image from "next/image";
import { MouseEventHandler, useState } from "react";
import { Price, Review } from "@/assets/types";

interface PriceCardProps {
  priceInfo: Price;
}

const PriceCard = ({ priceInfo }: PriceCardProps) => {
  const [isPhotoActive, setIsPhotoActive] = useState(false);

  const togglePhotoActive: MouseEventHandler<SVGSVGElement | HTMLImageElement> = () => {
    if (isPhotoActive) {
      setIsPhotoActive(false);
    } else {
      setIsPhotoActive(true);
    }
  }

  return (
    <div>
      <div className="w-full h-full rounded-[10px]
    sm:hover:bg-[#1F0B0B] transition-all ease-in-out duration-700 group cursor-grab">
        <div className="w-full relative">
          <div className={clsx(
            `flex flex-col gap-[16px] md:gap-5 p-[16px] md:p-[30px] w-full h-full rounded-[10px]
        transition-opacity ease-in-out duration-500`,
            {
              'opacity-100 visible': isPhotoActive === false,
              'opacity-0 invisible': isPhotoActive === true,
            }
          )}>
            <div className="flex justify-between items-center">
              <span
                className="text-[#1F0B0B] text-outfit text-[20px] leading-[100%] font-semibold
                group-hover:text-[#EEE] transition-all ease-in-out duration-700"
              >
                {priceInfo.title}
              </span>
              <div className="w-[30px] h-[30px]">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={togglePhotoActive}
                >
                  <g id="Icon +">
                    <rect width="30" height="30" rx="15" fill="#EEEEEE" />
                    <path
                      id="Union"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.75 6.25C15.75 5.83579 15.4142 5.5 15 5.5C14.5858 5.5 14.25 5.83579 14.25 6.25V14.25H6.25C5.83579 
                      14.25 5.5 14.5858 5.5 15C5.5 15.4142 5.83579 15.75 6.25 15.75H14.25V23.75C14.25 24.1642 14.5858 24.5 
                      15 24.5C15.4142 24.5 15.75 24.1642 15.75 23.75V15.75H23.75C24.1642 15.75 24.5 15.4142 24.5 15C24.5 
                      14.5858 24.1642 14.25 23.75 14.25H15.75V6.25Z"
                      fill="#1F0B0B"
                      className="group-hover:fill-[#ffbe42] transition-all ease-in-out duration-300"
                    />
                  </g>
                </svg>
              </div>
            </div>

            <div className="flex flex-col gap-[16px] sm:gap-5 h-[300px] sm:h-[455px] md:h-[405px] bmd:h-[310px] overflow-hidden">
              <p className="text-[#1F0B0B] text-outfit text-sm sm:text-base font-normal group-hover:text-[#EEE] 
            transition-all ease-in-out duration-700">
                {priceInfo.firstDescription}
              </p>

              <p className="text-[#1F0B0B] text-outfit text-sm sm:text-base font-normal group-hover:text-[#EEE]
            transition-all ease-in-out duration-700">
                {priceInfo.secondDescription}
              </p>
            </div>

            <p className="flex flex-1 items-end text-[#1F0B0B] text-outfit text-sm sm:text-base font-normal">
              <span className="font-semibold group-hover:text-[#EEE] transition-all ease-in-out duration-700">
                Price:&nbsp;
              </span>
              <span className="text-[#FFBE42] underline">{priceInfo.price}</span>
            </p>
          </div>

          <div className={clsx(
            "w-full h-full rounded-[10px] transition-opacity ease-in-out duration-500",
            {
              'opacity-100 visible': isPhotoActive === true,
              'opacity-0 invisible': isPhotoActive === false,
            }
          )}>
            <Image
              src={priceInfo.img}
              alt="Afro"
              width={400}
              height={467}
              className="absolute top-0 right-0 w-full h-full object-cover rounded-[10px]"
            />
            <Image
              src='/icons/minus.svg'
              alt=""
              width={30}
              height={30}
              className="absolute top-[30px] right-[30px] cursor-pointer"
              onClick={togglePhotoActive}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceCard
