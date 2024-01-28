import CallActionForm from "./CallActionForm";

const CallAction = () => {
  return (
    <section id="call-action" className="bg-[#1F0B0B] mt-[80px] sm:mt-[100px] bmd:mt-[150px]">
      <div className="max-w-[1240px] w-full h-full m-auto px-[16px] sm:[25px] md:px-[50px] xl:px-0">
        <div className="flex flex-col bmd:flex-row bmd:justify-center items-center gap-[40px] sm:gap-[70px] 
        bmd:gap-[125px] xl:gap-[200px] w-full py-[40px] sm:py-[70px]">
          <CallActionForm />

          <h2 className="flex flex-col gap-5 text-[#EEE]">
            <div className="font-outfit leading-[100%] text-[96px] flex flex-wrap">
              <span className="font-black">20%</span>
              <span className="text-[64px] font-semibold">&nbsp;Discount</span>
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
