'use client';

import { scrollToSection } from "@/utils/scrollToSection";

const Navigation = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-[40px] text-base text-[#1F0B0B] font-outfit font-normal">
        <li>
          <button className="group cursor-pointer" onClick={() => scrollToSection('main')}>
            Main
            <span className="block max-w-full bg-transparent group-hover:bg-[#1F0B0B] 
                  transition-all ease-in-out duration-275 h-0.5">
            </span>
          </button>
        </li>
        <li>
          <button className="group cursor-pointer" onClick={() => scrollToSection('team')}>
            Team
            <span className="block max-w-full bg-transparent group-hover:bg-[#1F0B0B] 
                  transition-all ease-in-out duration-275 h-0.5">
            </span>
          </button>
        </li>
        <li>
          <button className="group cursor-pointer" onClick={() => scrollToSection('price')}>
            Price
            <span className="block max-w-full bg-transparent group-hover:bg-[#1F0B0B] 
                  transition-all ease-in-out duration-275 h-0.5">
            </span>
          </button>
        </li>
        <li>
          <button className="group cursor-pointer" onClick={() => scrollToSection('reviews')}>
            Reviews
            <span className="block max-w-full bg-transparent group-hover:bg-[#1F0B0B] 
                  transition-all ease-in-out duration-275 h-0.5">
            </span>
          </button>
        </li>
        <li>
          <button className="group cursor-pointer" onClick={() => scrollToSection('faq')}>
            FAQ
            <span className="block max-w-full bg-transparent group-hover:bg-[#1F0B0B] 
                  transition-all ease-in-out duration-275 h-0.5">
            </span>
          </button>
        </li>
        <li>
          <button className="group cursor-pointer" onClick={() => scrollToSection('contacts')}>
            Contacts
            <span className="block max-w-full bg-transparent group-hover:bg-[#1F0B0B] 
                  transition-all ease-in-out duration-275 h-0.5">
            </span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
