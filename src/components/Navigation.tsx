'use client';

import { Underline } from "@/assets/uiComponents";
import { scrollToSection } from "@/utils/scrollToSection";

interface NavigationProps {
  color: 'black' | 'yellow';
}

const Navigation = ({ color }: NavigationProps) => {
  const mainColor = color === 'black' ? '#1F0B0B' : '#FFBE42';

  return (
    <nav className="">
      <ul className={`flex flex-wrap gap-x-[48px] gap-y-[30px] sm:gap-[40px] justify-center text-base text-[${mainColor}] font-outfit font-normal`}>
        <li>
          <button className="group cursor-pointer" onClick={() => scrollToSection('main')}>
            Main
            <Underline color={color} />
          </button>
        </li>
        <li>
          <button className="group cursor-pointer" onClick={() => scrollToSection('team')}>
            Team
            <Underline color={color} />
          </button>
        </li>
        <li>
          <button className="group cursor-pointer" onClick={() => scrollToSection('price')}>
            Price
            <Underline color={color} />
          </button>
        </li>
        <li>
          <button className="group cursor-pointer" onClick={() => scrollToSection('reviews')}>
            Reviews
            <Underline color={color} />
          </button>
        </li>
        <li>
          <button className="group cursor-pointer" onClick={() => scrollToSection('faq')}>
            FAQ
            <Underline color={color} />
          </button>
        </li>
        <li>
          <button className="group cursor-pointer" onClick={() => scrollToSection('contacts')}>
            Contacts
            <Underline color={color} />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
