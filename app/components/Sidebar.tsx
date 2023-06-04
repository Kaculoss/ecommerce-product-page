"use client";

import { IoClose } from "react-icons/io5";
import useSidebar from "../hooks/useSidebar";

const Sidebar = () => {
  const { remove, showSidebar } = useSidebar();

  const navs = ["Collection", "Men", "Women", "About", "Contact"];

  if (!showSidebar) return null;

  return (
    <div className="md:hidden transition fixed inset-0 bg-black/75 z-50">
      <div className=" bg-white w-3/4 h-screen px-4 pt-4 flex flex-col gap-8 items-start">
        <IoClose
          size={25}
          className="text-bold text-[#1c2026] hover:text-[#b6bcc8] cursor-pointer mb-8"
          onClick={remove}
        />
        {navs.map((nav) => (
          <div
            key={nav}
            className=" w-full text-base text-[#1c2026] font-bold hover:border-x-4 hover:border-x-[#ff7d1a] cursor-pointer transition-all"
          >
            <p>{nav}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
