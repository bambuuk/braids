import {
  BaseSyntheticEvent,
  MouseEvent,
  SyntheticEvent,
  useState,
} from "react";

export type HandleCloseCallPopup =
  | MouseEvent<HTMLButtonElement | HTMLDialogElement>
  | SyntheticEvent<HTMLFormElement>
  | BaseSyntheticEvent;

const useCallPopupControl = () => {
  const [isOpenCallPopup, setIsOpenCallPopup] = useState(false);

  const handleOpenCallPopup = () => {
    (document.getElementById("call-order") as HTMLDialogElement).showModal();
    setIsOpenCallPopup(true);
  };

  const handleCloseCallPopup = <T extends HandleCloseCallPopup>(e: T) => {
    if (
      e.target === e.currentTarget ||
      (e.target && e.currentTarget === null)
    ) {
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
