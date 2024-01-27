
const CallAction = () => {
  return (
    <section className="bg-[#1F0B0B] mt-[80px] sm:mt-[100px] bmd:mt-[150px]">
      <div className="max-w-[1240px] w-full h-full m-auto px-[16px] sm:[25px] md:px-[50px] xl:px-0">
        <div className="flex flex-col bmd:flex-row bmd:justify-center items-center gap-[40px] sm:gap-[70px] 
        bmd:gap-[125px] xl:gap-[200px] w-full py-[40px] sm:py-[70px]">
          <div className="flex flex-col max-w-[400px] w-full">
            <p className="text-[#eee] font-raleway text-[20px] font-black leading-[150%] max-w-[327px] w-full">
              Fill out the form, and we will get in touch with you shortly to provide detailed consultation
            </p>

            <input
              type="text"
              placeholder="Name"
              className="mt-[30px] pb-[10px] border-b border-b-[#eee] bg-transparent placeholder:text-[#B7B7B7] 
              text-[#EEE] font-outfit text-sm sm:text-base font-normal outline-none"
            />

            <input
              type="tel"
              placeholder="Phone number"
              className="mt-[30px] pb-[10px] border-b border-b-[#eee] bg-transparent placeholder:text-[#B7B7B7] 
              text-[#EEE] font-outfit text-sm sm:text-base font-normal outline-none"
            />

            <div className="flex items-center gap-[10px] mt-[13px]">
              <input type="checkbox" id="terms" className="rounded-full checkbox border-[#EEEEEE] 
              checked:border-[#FFBE42] [--chkbg:theme(mytheme.secondary)] checked:bg-[url('/icons/check-alt.svg')] 
              bg-cover [--chkfg:theme(mytheme.success)] w-[24px] h-[24px]" />
              <label
                htmlFor="terms"
                className="text-[#EEE] font-raleway text-sm font-light"
              >
                I accept the terms of data processing
              </label>
            </div>

            <button className="mt-[32px] py-5 text-center text-[#1F0B0B] font-outfit sm:text-[20px] font-normal 
            sm:font-semibold leading-[100%] bg-[#FFBE42] rounded-[20px] border-2 border-solid border-transparent 
            hover:border-[#FFBE42] hover:bg-transparent hover:text-[#FFBE42] transition-all ease-in-out">
              Order a call
            </button>
          </div>

          <h2 className="flex flex-col gap-5 text-[#EEE]">
            <div className="font-outfit leading-[100%] text-[96px] flex flex-wrap">
              <span className="font-black">20%</span>
              <span className="text-[64px] font-semibold">Discount</span>
            </div>
            <span className="font-raleway text-[20px] font-semibold leading-[150%]">
              for New Clients on any Braiding Service
            </span>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default CallAction
