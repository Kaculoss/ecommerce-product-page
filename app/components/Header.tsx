"use client";

import Image from "next/image";
import CartButton from "./CartButton";
import Navbar from "./Navbar";
import { FiMenu } from "react-icons/fi";
import useSidebar from "../hooks/useSidebar";

const Header = () => {
  const { show } = useSidebar();

  return (
    <div className="w-full bg-white border-b border-[#f7f8fd] flex justify-between items-center py-6 md:py-0 px-8 md:px-4 max-w-[1440px] mx-auto">
      <div className="flex gap-10 justify-between items-end md:items-center tracking-tighter">
        <FiMenu
          size={25}
          onClick={show}
          className="md:hidden text-[#68707d] font-normal group-hover:text-[#1c2026] cursor-pointer"
        />
        <h1 className="font-bold text-4xl md:text-3xl text-[#1c2026]">
          sneakers
        </h1>
        <Navbar />
      </div>
      <div className="flex gap-10 justify-between items-center">
        <CartButton />
        <Image
          alt="avatar"
          src="/images/image-avatar.png"
          height={100}
          width={100}
          className="h-8 w-8 md:h-10 md:w-10 rounded-full hover:border-2 hover:border-[#ff7d1a] transition-all cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
