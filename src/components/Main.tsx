'use client';
import Image from "next/image";
import CallActionPopup from "./CallActionPopup";
import useCallPopupControl from "@/hooks/useCallPopupControl";

const Main = () => {
  const {
    handleOpenCallPopup,
    handleCloseCallPopup,
  } = useCallPopupControl();
  return (
    <div id="main" className="w-full overflow-hidden">
      <div className="relative pt-[40px] max-w-[1240px] w-full m-auto px-[16px] sm:[25px] md:px-[50px] xl:px-0">
        <Image
          src='/ill-stars.png'
          alt='stars'
          width={30}
          height={49}
          className="absolute top-[130px] hidden lg:block"
        />
        <div className="w-full text-[#1F0B0B] font-outfit text-[75px] sm:text-[150px] md:text-[215px] bmd:text-[250px] 
        lg:text-[280px] xl:text-[320px] 2xl:[376px] font-black leading-[100%] lg:leading-[80%] 
        text-start md:text-center">
          Braids
          <div className="grid grid-cols-2 lg:grid-cols-3 justify-between text-[72px] sm:text-[150px] md:text-[166px] bmd:text-[180px] lg:text-[190px] xl:text-[238px] 
          leading-[100%]">
            <span className="mt-[15px] sm:mt-0 lg:mt-5 flex justify-start items-center lg:items-start">for</span>
            <Image
              src='/main-girl.png'
              alt="Girl"
              width={500}
              height={500}
              className="absolute bottom-[28%] right-[-19%] sm:static col-start-2 col-end-3 row-start-1 row-end-3 lg:row-start-1 lg:row-end-2 
              w-[320px] h-[320px] sm:w-full sm:h-full lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] object-cover"
            />
            <span className="mt-[11px] sm:mt-0 lg:mt-5 col-start-1 col-end-2 lg:col-start-3 lg:col-end-4 
            flex justify-start items-center lg:items-start">
              you
            </span>

            <div className="lg:absolute lg:bottom-3 flex justify-between flex-col sm:flex-row lg:flex-col gap-5
            col-start-1 col-end-4 sm:col-end-3 lg:col-auto mx-auto mt-[184px] sm:mt-[50px] lg:mt-0 max-w-[320px] sm:max-w-none w-full">
              <p className="text-[#1F0B0B] font-outfit text-sm sm:text-xl leading-[150%] sm:leading-[30px] 
              font-normal text-left sm:max-w-[295px] w-full">
                Need advice or want to book an appointment?
                Fill in the minimum information, and we will get in touch with you.
              </p>
              <button
                onClick={handleOpenCallPopup}
                className="flex justify-center items-center rounded-[20px] bg-[#FFBE42]
              text-[#1F0B0B] font-outfit text-base sm:text-xl font-semibold leading-[150%] sm:leading-5
              sm:max-w-[295px] w-full h-[60px] border-2 border-solid border-transparent hover:border-[#FFBE42]
              hover:bg-transparent transition-all ease-in-out"
              >
                Order a call
              </button>
            </div>
          </div>
        </div>
        <CallActionPopup handleClose={handleCloseCallPopup} />
        <Image
          src='/ill-stars.png'
          alt='stars'
          width={30}
          height={49}
          className="absolute bottom-[40%] right-[40%] lg:bottom-[32px] lg:right-[203px]"
        />
      </div>
    </div >
  )
}

export default Main;