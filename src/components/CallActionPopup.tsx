import { MouseEvent } from "react";
import CallActionForm from "./CallActionForm";

interface CallPopupProps {
  handleClose: (e: MouseEvent<HTMLButtonElement | HTMLDialogElement>) => void;
}

const CallActionPopup = ({ handleClose }: CallPopupProps) => {
  return (
    <dialog
      id="call-order"
      className='modal h-full'
      onClick={handleClose}
    >
      <div className="modal-box p-[60px] bg-[#1F0B0B]">
        <button
          onClick={handleClose}
          className="absolute right-5 top-5 group w-[24px] h-[24px] bg-[url('/icons/close-popup.svg')] 
          bg-cover hover:bg-[url('/icons/hover-close-popup.svg')] transition-all">
        </button>

        <CallActionForm />
      </div>
    </dialog>
  )
}

export default CallActionPopup
