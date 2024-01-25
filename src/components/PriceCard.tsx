'use client'
import clsx from "clsx";
import Image from "next/image"
import { MouseEventHandler, useState } from "react"

const PriceCard = () => {
  const [isPhotoActive, setIsPhotoActive] = useState(false);

  const togglePhotoActive: MouseEventHandler<SVGSVGElement | HTMLImageElement> = () => {
    if (isPhotoActive) {
      setIsPhotoActive(false);
    } else {
      setIsPhotoActive(true);
    }
  }

  return (
    <div className="relative max-w-[400px] w-full min-h-[467px] h-full rounded-[10px]
    hover:bg-[#1F0B0B] transition-all ease-in-out duration-700 group">
      <div className={clsx(
        `absolute flex flex-col gap-[16px] sm:gap-5 p-[16px] sm:p-[30px] w-full h-full rounded-[10px]
        transition-opacity ease-in-out duration-500`,
        {
          'opacity-100 visible': isPhotoActive === false,
          'opacity-0 invisible': isPhotoActive === true,
        }
      )}>
        <div className="relative">
          <span
            className="absolute top-[8px] left-0 text-[#1F0B0B] text-outfit text-[20px] leading-[100%] font-semibold
                group-hover:text-[#EEE] transition-all ease-in-out duration-700"
          >
            ZiZi
          </span>
          <div className="w-[30px] h-[30px] absolute top-0 right-0">
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

        <p className="mt-[20px] text-[#1F0B0B] text-outfit text-sm sm:text-base font-normal group-hover:text-[#EEE] 
            transition-all ease-in-out duration-700">
          Classic Afro braids are a comfortable, practical, and stylish hairstyle that is easy
          to maintain. These braids are woven into hair starting from a length of 5 cm, using
          Kanekalon or thread weaving. Kanekalon, artificial hair, is used for braiding classic
          Afro braids.
        </p>

        <p className="text-[#1F0B0B] text-outfit text-sm sm:text-base font-normal group-hover:text-[#EEE]
            transition-all ease-in-out duration-700">
          Prices vary based on the
          number of braids and length (excluding materials). The braiding time for Afro
          braids ranges from 6 to 8 hours. The duration of wearing classic Afro braids
          is approximately 1.5-2 months.
        </p>

        <p className="flex text-[#1F0B0B] text-outfit text-sm sm:text-base font-normal">
          <span className="font-semibold group-hover:text-[#EEE] transition-all ease-in-out duration-700">
            Price:&nbsp;
          </span>
          <span className="text-[#FFBE42] underline">2000 - 2800 UAH</span>
        </p>
      </div>

      <div className={clsx(
        "absolute w-full h-full rounded-[10px] transition-opacity ease-in-out duration-500",
        {
          'opacity-100 visible': isPhotoActive === true,
          'opacity-0 invisible': isPhotoActive === false,
        }
      )}>
        <Image
          src='/braidExamples/afro-braid.png'
          alt="Afro"
          width={400}
          height={467}
          className="w-full h-full object-cover"
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
  )
}

export default PriceCard
