'use client';

import { useState } from "react";
import Menu from "./Menu";
import Image from "next/image";

const Sidebar = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setMenuOpen(true)
    document.body.classList.add("no-scroll");
  }

  const handleClose = () => {
    setMenuOpen(false);
    document.body.classList.remove("no-scroll");
  }

  return (
    <div className="block lg:hidden">
      <Image
        src="/burger-menu.svg"
        width={44}
        height={44}
        alt=""
        className="w-[44px] h-[44px] object-cover"
        onClick={handleOpen}
      />

      <Menu open={isMenuOpen} onClose={handleClose} />
    </div>
  )
}

export default Sidebar;