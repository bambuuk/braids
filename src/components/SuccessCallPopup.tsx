import Image from "next/image"
import { MouseEvent } from "react";

interface SuccessCallPopupProps {
  handleClose: (e: MouseEvent<HTMLButtonElement | HTMLDialogElement>) => void;
  isOpenPopup: boolean;
}

const SuccessCallPopup = ({ handleClose, isOpenPopup }: SuccessCallPopupProps) => {
  return (
    <dialog id="success-call-order" className='modal h-full' onClick={handleClose}>
      <div className="modal-box p-[60px] bg-[#1F0B0B]">
        <button
          onClick={handleClose}
          className="absolute right-5 top-5 group w-[24px] h-[24px] bg-[url('/icons/close-popup.svg')] 
          bg-cover hover:bg-[url('/icons/hover-close-popup.svg')] transition-all">
        </button>

        <h2 className="text-[#FFBE42] font-outfit text-[30px] sm:text-[36px] font-semibold leading-[100%] text-center">
          Expect a call soon!
        </h2>

        <div className="mt-[17px] w-full h-full max-w-[500px] max-h-[500px] rounded-full bg-[#EEEEEE] overflow-hidden">
          <Image
            src='/main-girl.png'
            alt="Girl"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </dialog>
  )
}

export default SuccessCallPopup;
