'use client';

import SuccessCallPopup from "./SuccessCallPopup";
import useSuccessPopupControl from "@/hooks/useSuccessPopupControl";
import { InputMask } from 'primereact/inputmask';
import { HandleCloseCallPopup } from "@/hooks/useCallPopupControl";
import useFormValidation from "@/hooks/useFormValidation";

interface CallActionFormProps {
  handleClose?: <T extends HandleCloseCallPopup>(e: T) => void;
}

const CallActionForm = ({ handleClose }: CallActionFormProps) => {
  const {
    handleOpenSuccessPopup,
    handleCloseSuccessPopup,
  } = useSuccessPopupControl();

  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    submitData
  } = useFormValidation({ handleClose, handleOpenSuccessPopup });

  return (
    <>
      <form className="max-w-[400px] w-full" onSubmit={handleSubmit(submitData)}>
        <fieldset className="flex flex-col w-full">
          <legend className="text-[#eee] font-raleway text-[20px] font-black leading-[150%] max-w-[327px] w-full">
            Fill out the form, and we will get in touch with you shortly to provide detailed consultation
          </legend>

          <div className="w-full">
            <input
              {...register("name")}
              name="name"
              type="text"
              placeholder="Name"
              className={`mt-[30px] pb-[10px] border-b border-b-[#eee] bg-transparent placeholder:text-[#B7B7B7] 
              text-[#EEE] font-outfit text-sm sm:text-base font-normal outline-none w-full
              ${errors.name ? 'text-[#FF8484] border-b-[#FF8484] placeholder:text-[#FF8484]' : ''}`}
            />
            {errors.name && <span className="text-[#FF8484] font-outfit text-[12px] font-normal">{errors.name.message}</span>}
          </div>

          <div className="w-full">
            <InputMask
              {...register("phone")}
              name="phone"
              id="phone"
              mask="+38 (999) 99-99-999"
              placeholder="Phone number"
              className={`w-full mt-[30px] pb-[10px] border-b border-b-[#eee] bg-transparent placeholder:text-[#B7B7B7] 
              text-[#EEE] font-outfit text-sm sm:text-base font-normal outline-none
              ${errors.phone ? 'text-[#FF8484] border-b-[#FF8484] placeholder:text-[#FF8484]' : ''}`}></InputMask>
            {errors.phone && <span className="text-[#FF8484] font-outfit text-[12px] font-normal">{errors.phone.message}</span>}
          </div>

          <div className="flex items-center gap-[10px] mt-[13px]">
            <div className="relative">
              <input
                {...register("terms")}
                name="terms"
                type="checkbox"
                id="terms"
                className={`rounded-full checkbox border-[#EEEEEE]
                checked:border-[#FFBE42] [--chkbg:theme(mytheme.secondary)] checked:bg-[url('/icons/check-alt.svg')] 
                bg-cover [--chkfg:theme(mytheme.success)] w-[24px] h-[24px]
                ${errors.terms ? 'border-[#FF8484]' : ''}`}
              />
              {
                errors.terms &&
                <span className="absolute bottom-[-20px] left-0 w-[250px] text-[#FF8484] font-outfit text-[12px] font-normal">
                  {errors.terms.message}
                </span>
              }
            </div>
            <label
              htmlFor="terms"
              className={`text-[#EEE] font-raleway text-sm font-light leading-4 ${errors.terms ? 'text-[#FF8484]' : ''}`}
            >
              I accept the terms of data processing
            </label>
          </div>

          {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}

          <button
            disabled={isSubmitting}
            className="mt-[32px] py-5 text-center text-[#1F0B0B] font-outfit sm:text-[20px] font-normal 
            sm:font-semibold leading-[100%] bg-[#FFBE42] rounded-[20px] border-2 border-solid border-transparent 
            hover:border-[#FFBE42] hover:bg-transparent hover:text-[#FFBE42] transition-all ease-in-out
            disabled:bg-[#EEE] disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            Order a call
          </button>
        </fieldset>
      </form>
      <SuccessCallPopup handleClose={handleCloseSuccessPopup} />
    </>
  )
}

export default CallActionForm
