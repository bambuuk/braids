import Link from "next/link";
import {
  HoverUnderline,
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
            <ul className="flex gap-[40px] text-base text-[#1F0B0B] font-outfit font-normal cursor-pointer">
              <li>
                <Link href="#main" className="group">
                  Main
                  <HoverUnderline />
                </Link>
              </li>
              <li>
                <Link href="#team" className="group">
                  Team
                  <HoverUnderline />
                </Link>
              </li>
              <li>
                <Link href="#price" className="group">
                  Price
                  <HoverUnderline />
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="group">
                  Reviews
                  <HoverUnderline />
                </Link>
              </li>
              <li>
                <Link href="#faq" className="group">
                  FAQ
                  <HoverUnderline />
                </Link>
              </li>
              <li>
                <Link href="#contacts" className="group">
                  Contacts
                  <HoverUnderline />
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
