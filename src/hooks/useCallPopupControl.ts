import { getScrollWidth } from "@/utils/getScrollWidth";
import { MouseEvent, useState } from "react";

const useCallPopupControl = () => {
  const [isOpenCallPopup, setIsOpenCallPopup] = useState(false);

  const handleOpenCallPopup = (e: MouseEvent<HTMLButtonElement>) => {
    (document.getElementById("call-order") as HTMLDialogElement).showModal();
    setIsOpenCallPopup(true);
  };

  const handleCloseCallPopup = (
    e: MouseEvent<HTMLButtonElement | HTMLDialogElement>
  ) => {
    if (e.target === e.currentTarget) {
      (document.getElementById("call-order") as HTMLDialogElement).close();
      setIsOpenCallPopup(false);
    }
  };

  return {
    isOpenCallPopup,
    handleOpenCallPopup,
    handleCloseCallPopup,
  };
};

export default useCallPopupControl;
