import { getScrollWidth } from "@/utils/getScrollWidth";
import { MouseEvent, useState } from "react";

const useSuccessPopupControl = () => {
  const [isOpenSuccessPopup, setIsOpenSuccessPopup] = useState(false);
  let timeoutId: ReturnType<typeof setTimeout>;

  const handleOpenSuccessPopup = (e: React.SyntheticEvent<HTMLFormElement>) => {
    (
      document.getElementById("success-call-order") as HTMLDialogElement
    ).showModal();
    setIsOpenSuccessPopup(true);
    const scrollBarWidth = getScrollWidth();
    document.body.style.marginRight = `${scrollBarWidth}px`;

    if (isOpenSuccessPopup) {
      timeoutId = setTimeout(() => {
        setIsOpenSuccessPopup(false);
        document.body.style.overflow = "auto";
        document.body.style.marginRight = "";
        (
          document.getElementById("success-call-order") as HTMLDialogElement
        ).close();
      }, 3000);
    }
  };

  const handleCloseSuccessPopup = (
    e: MouseEvent<HTMLButtonElement | HTMLDialogElement>
  ) => {
    if (e.target === e.currentTarget) {
      (
        document.getElementById("success-call-order") as HTMLDialogElement
      ).close();
      clearTimeout(timeoutId);
      setIsOpenSuccessPopup(false);
      document.body.style.overflow = "auto";
      document.body.style.marginRight = "";
    }
  };

  return {
    isOpenSuccessPopup,
    handleOpenSuccessPopup,
    handleCloseSuccessPopup,
  };
};

export default useSuccessPopupControl;