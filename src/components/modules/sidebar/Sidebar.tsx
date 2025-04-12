"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react"; 
import { CiLight,CiLogout } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { PiBooks, PiBooksFill } from "react-icons/pi";
import { GoHomeFill, GoPencil, GoHome } from "react-icons/go";
import { RiPencilFill } from "react-icons/ri";
import {
  IoIosInformationCircle,
  IoIosInformationCircleOutline,
} from "react-icons/io";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const path = usePathname(); 

  return (
    <div className="sticky top-0 hidden max-h-screen min-h-screen space-y-5 border-r border-[#4a2e7e26] pb-20 pr-4 pt-6 sm:block">
      {theme !== "dark" ? (
        <MdOutlineDarkMode
          onClick={() => setTheme("dark")}
          className={`mx-auto cursor-pointer text-2xl text-purple transition-colors hover:text-black`}
        />
      ) : (
        <CiLight
          onClick={() => setTheme("light")}
          className={`mx-auto cursor-pointer text-2xl text-purple transition-colors hover:text-white`}
        />
      )}

      <Link className="group !mt-16 block" href={"/"}>
        <div
          className={`${path === "/" ? "bg-[#7731d81a]" : ""} rounded-lg p-2 group-hover:bg-[#7731d81a]`}
        >
          {path === "/" ? (
            <GoHomeFill className="mx-auto block text-2xl text-purple" />
          ) : (
            <GoHome className="mx-auto block text-2xl text-[#4a2e7fcc] hover:text-purple" />
          )}
        </div>
        <p className={`${path === "/" ? "font-semibold text-purple" : "text-[#4a2e7fcc]"} text-center text-sm`}>Home</p>
      </Link>
      <Link className="group block" href={"/books"}>
        <div
          className={`${path === "/books" ? "bg-[#7731d81a]" : ""} rounded-lg p-2 group-hover:bg-[#7731d81a]`}
        >
          {path === "/books" ? (
            <PiBooksFill className="mx-auto block text-2xl text-purple" />
          ) : (
            <PiBooks className="mx-auto block text-2xl text-[#4a2e7fcc] hover:text-purple" />
          )}
        </div>
        <p className={`${path === "/books" ? "font-semibold text-purple" : "text-[#4a2e7fcc]"} text-center text-sm`}>Books</p>
      </Link>
      <Link className="group block" href={"/authors"}>
        <div
          className={`${path === "/authors" ? "bg-[#7731d81a]" : ""} rounded-lg p-2 group-hover:bg-[#7731d81a]`}
        >
          {path === "/authors" ? (
            <RiPencilFill className="mx-auto block text-2xl text-purple" />
          ) : (
            <GoPencil className="mx-auto block text-2xl text-[#4a2e7fcc] hover:text-purple" />
          )}
        </div>
        <p className={`${path === "/authors" ? "font-semibold text-purple" : "text-[#4a2e7fcc]"} text-center text-sm text-[#4a2e7fcc]`}>Authors</p>
      </Link>
      <Link className="group block" href={"/about"}>
        <div
          className={`${path === "/about" ? "bg-[#7731d81a]" : ""} rounded-lg p-2 group-hover:bg-[#7731d81a]`}
        >
          {path === "/about" ? (
            <IoIosInformationCircle className="mx-auto block text-2xl text-purple" />
          ) : (
            <IoIosInformationCircleOutline className="mx-auto block text-2xl text-[#4a2e7fcc] hover:text-purple" />
          )}
        </div>
        <p className={`${path === "/about" ? "font-semibold text-purple" : "text-[#4a2e7fcc]"} text-center text-sm text-[#4a2e7fcc]`}>About</p>
      </Link>
      <div className="group absolute bottom-3 block cursor-pointer">
        <div className={`rounded-lg p-2 group-hover:bg-[#7731d81a]`}>
          <CiLogout className="mx-auto block text-2xl text-[#4a2e7fcc] hover:text-purple" /> 
        </div>
        <p className={`text-center text-sm text-[#4a2e7fcc]`}>Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
