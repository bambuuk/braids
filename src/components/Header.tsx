import Navigation from "./Navigation";
import SocialNetwork from "./SocialNetwork";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <header
      id="header"
      className={'fixed top-0 w-full border-b border-solid border-[#1F0B0B] bg-[#EEE] z-50'}>
      <div className="max-w-[1240px] m-auto py-5 px-[40px] xl:px-0">
        <div className="flex justify-between items-center h-[48px] w-full">
          <div className="text-[#1F0B0B] font-outfit text-2xl font-black">
            Braid Space
          </div>

          <div className="hidden lg:block">
            <Navigation color={'black'} />
          </div>

          <div className="flex items-center gap-[32px]">
            <div className="hidden sm:block">
              <SocialNetwork place="header" />
            </div>

            <Sidebar />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
