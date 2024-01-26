import Link from "next/link";
import {
  HeaderTiktokIcon,
  HeaderInstagramIcon,
  HeaderFacebookIcon,
  BurgerMenu
} from "@/assets/uiComponents";

const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b border-solid border-[#1F0B0B] bg-[#EEE] z-50">
      <div className="max-w-[1240px] m-auto py-5 px-[40px] xl:px-0">
        <div className="flex justify-between items-center h-[48px] w-full">
          <div className="text-[#1F0B0B] font-outfit text-2xl font-black">
            Braid Space
          </div>

          <nav className="hidden lg:block">
            <ul className="flex gap-[40px] text-base text-[#1F0B0B] font-outfit font-normal">
              <li>
                <Link href="#main" className="group cursor-pointer">
                  Main
                  <span className="block max-w-full bg-transparent group-hover:bg-[#1F0B0B] 
                  transition-all ease-in-out duration-275 h-0.5">
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#team" className="group cursor-pointer">
                  Team
                  <span className="block max-w-full bg-transparent group-hover:bg-[#1F0B0B] 
                  transition-all ease-in-out duration-275 h-0.5">
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#price" className="group cursor-pointer">
                  Price
                  <span className="block max-w-full bg-transparent group-hover:bg-[#1F0B0B] 
                  transition-all ease-in-out duration-275 h-0.5">
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="group cursor-pointer">
                  Reviews
                  <span className="block max-w-full bg-transparent group-hover:bg-[#1F0B0B] 
                  transition-all ease-in-out duration-275 h-0.5">
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#faq" className="group cursor-pointer">
                  FAQ
                  <span className="block max-w-full bg-transparent group-hover:bg-[#1F0B0B] 
                  transition-all ease-in-out duration-275 h-0.5">
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#contacts" className="group cursor-pointer">
                  Contacts
                  <span className="block max-w-full bg-transparent group-hover:bg-[#1F0B0B] 
                  transition-all ease-in-out duration-275 h-0.5">
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-[32px]">
            <div className="hidden sm:flex gap-5 px-2">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="social__header-link w-[32px] h-[32px] flex items-center"
              >
                <HeaderFacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="social__header-link w-[32px] h-[32px] flex items-center"
              >
                <HeaderInstagramIcon />
              </a>
              <a
                href="https://www.tiktok.com/"
                className="social__header-link w-[32px] h-[32px] flex items-center"
                target="_blank"
              >
                <HeaderTiktokIcon />
              </a>
            </div>

            <div className="block lg:hidden w-[44px] h-[44px]">
              <BurgerMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
