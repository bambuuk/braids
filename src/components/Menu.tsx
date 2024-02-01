import { IoCloseSharp } from "react-icons/io5";
import { scrollToSection } from "@/utils/scrollToSection";
import SocialNetwork from "./SocialNetwork";

interface MenuProps {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ open, onClose }: MenuProps) => {
  return (
    <div className="overflow-hidden">
      <div
        className={`fixed w-full h-screen bg-opacity-60 bg-gray-800 top-0 left-0 z-[2000] transition-opacity 
        duration-300 ${open ? 'transform translate-x-0 opacity-1' : 'transform -translate-x-full opacity-0'}`}
        onClick={() => onClose(false)}
      />
      <div
        className={`w-[250px] h-screen bg-[#1F0B0B] fixed z-[2100] top-0 left-0 flex flex-col items-center 
        transition-transform duration-300 ${open ? 'transform translate-x-0' : 'transform -translate-x-full'
          } overflow-hidden  px-[20px] pb-[70px] pt-[100px]`}
      >
        <IoCloseSharp
          className="text-[#FFBE42] absolute top-[30px] right-[30px] cursor-pointer text-[30px]"
          onClick={() => onClose(false)}
        />
        <ul className="flex-1 flex flex-col items-center">
          <li
            className="text-[#FFBE42] cursor-pointer py-2 text-2xl"
          >
            <button
              onClick={() => {
                onClose(false);
                scrollToSection('main')
              }}
            >
              Main
            </button>
          </li>
          <li
            className="text-[#FFBE42] cursor-pointer py-2 text-2xl"
          >
            <button
              onClick={() => {
                onClose(false);
                scrollToSection('team')
              }}
            >
              Team
            </button>
          </li>
          <li
            className="text-[#FFBE42] cursor-pointer py-2 text-2xl"
          >
            <button
              onClick={() => {
                onClose(false);
                scrollToSection('price')
              }}
            >
              Price
            </button>
          </li>
          <li
            className="text-[#FFBE42] cursor-pointer py-2 text-2xl"
          >
            <button
              onClick={() => {
                onClose(false);
                scrollToSection('reviews')
              }}
            >
              Reviews
            </button>
          </li>
          <li
            className="text-[#FFBE42] cursor-pointer py-2 text-2xl"
          >
            <button
              onClick={() => {
                onClose(false);
                scrollToSection('faq')
              }}
            >
              FAQ
            </button>
          </li>
          <li
            className="text-[#FFBE42] cursor-pointer py-2 text-2xl"
          >
            <button
              onClick={() => {
                onClose(false);
                scrollToSection('map')
              }}
            >
              Contacts
            </button>
          </li>

        </ul>

        <SocialNetwork place={'footer'} />
      </div>
    </div>
  )
}

export default Menu