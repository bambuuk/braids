'use client';
import { useState } from "react";

interface AccordionProps {
  title: string;
  answer: string;
}

const Accordion = ({ title, answer }: AccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="text-black text-lg border-b-[1px] border-b-[#1F0B0B] pb-[10px]">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full group"
      >
        <span
          className="text-[#1F0B0B] font-raleway text-[16px] sm:text-[18px] md:text-[20px] font-semibold 
          leading-[150%] text-start"
        >
          {title}
        </span>
        <div className={`${accordionOpen ? 'rotate-180' : ''} transition-all ease-in-out duration-300 ml-[10px]`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.27246 9L12.2725 15L18.2725 9"
              stroke="#1F0B0B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-2 transition-all ease-in-out duration-300"
            />
          </svg>
        </div>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 easy-in-out
        ${accordionOpen ? 'grid-rows-[1fr] opacity-100 mt-[10px] sm:mt-[15px]' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
      >
        <div className="overflow-hidden text-[#1F0B0B] font-outfit text-sm sm:text-base font-normal leading-[150%]">{answer}</div>
      </div>
    </div>
  )
}

export default Accordion
