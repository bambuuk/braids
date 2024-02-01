import { MouseEvent, useState } from "react";

const useSuccessPopupControl = () => {
  const [isOpenSuccessPopup, setIsOpenSuccessPopup] = useState(false);
  let timeoutId: ReturnType<typeof setTimeout>;

  const handleOpenSuccessPopup = () => {
    (
      document.getElementById("success-call-order") as HTMLDialogElement
    ).showModal();
    setIsOpenSuccessPopup(true);

    timeoutId = setTimeout(() => {
      setIsOpenSuccessPopup(false);
      (
        document.getElementById("success-call-order") as HTMLDialogElement
      ).close();
    }, 3000);
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
    }
  };

  return {
    isOpenSuccessPopup,
    handleOpenSuccessPopup,
    handleCloseSuccessPopup,
  };
};

export default useSuccessPopupControl;
