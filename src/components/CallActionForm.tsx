'use client';

import { MouseEvent, useRef } from "react";
import SuccessCallPopup from "./SuccessCallPopup";

const CallActionForm = () => {
  const isOpenSuccessPopup = useRef(false);
  let timeoutId: ReturnType<typeof setTimeout>;

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    (document.getElementById('success-call-order') as HTMLDialogElement).showModal();
    isOpenSuccessPopup.current = true;

    if (isOpenSuccessPopup.current) {
      timeoutId = setTimeout(() => {
        (document.getElementById('success-call-order') as HTMLDialogElement).close();
      }, 3000);
    }
  }

  const handleClose = (e: MouseEvent<HTMLButtonElement | HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      (document.getElementById('success-call-order') as HTMLDialogElement).close();
      clearTimeout(timeoutId)
    }
  }

  return (
    <>
      <form className="max-w-[400px] w-full" onSubmit={handleSubmit}>
        <fieldset className="flex flex-col w-full">
          <legend className="text-[#eee] font-raleway text-[20px] font-black leading-[150%] max-w-[327px] w-full">
            Fill out the form, and we will get in touch with you shortly to provide detailed consultation
          </legend>

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

          <button
            className="mt-[32px] py-5 text-center text-[#1F0B0B] font-outfit sm:text-[20px] font-normal 
            sm:font-semibold leading-[100%] bg-[#FFBE42] rounded-[20px] border-2 border-solid border-transparent 
            hover:border-[#FFBE42] hover:bg-transparent hover:text-[#FFBE42] transition-all ease-in-out"
          >
            Order a call
          </button>
        </fieldset>
      </form>
      <SuccessCallPopup handleClose={handleClose} />
    </>
  )
}

export default CallActionForm
