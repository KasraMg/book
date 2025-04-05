"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { PiBooks, PiBooksFill } from "react-icons/pi";
import { GoHomeFill, GoPencil } from "react-icons/go";
import { RiPencilFill } from "react-icons/ri";
import {
  IoIosInformationCircle,
  IoIosInformationCircleOutline,
} from "react-icons/io";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="sticky sm:block hidden top-0 max-h-screen min-h-screen space-y-5 border-r border-[#4a2e7e26] pb-20 pr-4 pt-6">
      {theme !== "dark" ? (
        <MdOutlineDarkMode
          onClick={() => setTheme("dark")}
          className={`mx-auto cursor-pointer text-2xl text-[#7731d8] transition-colors hover:text-black`}
        />
      ) : (
        <CiLight
          onClick={() => setTheme("light")}
          className={`mx-auto cursor-pointer text-2xl transition-colors hover:text-white`}
        />
      )}

      <Link className="group !mt-16 block" href={"/home"}>
        <div className="rounded-lg bg-[#7731d81a] p-2 group-hover:bg-[#7731d81a]">
          <GoHomeFill className="mx-auto block text-2xl text-[#7731d8]" />
          {/* <GoHome className="mx-auto block text-2xl text-[#4a2e7fcc] hover:text-[#7731d8]" /> */}
        </div>
        <p className="text-center text-sm font-semibold text-[#7731d8]">Home</p>
      </Link>
      <Link className="group block" href={"/books"}>
        <div className={`rounded-lg p-2 group-hover:bg-[#7731d81a]`}>
          <PiBooks className="mx-auto block text-2xl text-[#4a2e7fcc] hover:text-[#7731d8]" />
          {/* <PiBooksFill className="mx-auto block text-2xl text-[#7731d8]" /> */}
        </div>
        <p className="text-center text-sm text-[#4a2e7fcc]">Books</p>
      </Link>
      <Link className="group block" href={"/authors"}>
        <div className={`rounded-lg p-2 group-hover:bg-[#7731d81a]`}>
          <GoPencil className="mx-auto block text-2xl text-[#4a2e7fcc] hover:text-[#7731d8]" />
          {/* <RiPencilFill className="mx-auto block text-2xl  text-[#7731d8]" /> */}
        </div>
        <p className="text-center text-sm text-[#4a2e7fcc]">Authors</p>
      </Link>
      <Link className="group block" href={"/about"}>
        <div className={`rounded-lg p-2 group-hover:bg-[#7731d81a]`}>
          <IoIosInformationCircleOutline className="mx-auto block text-2xl text-[#4a2e7fcc] hover:text-[#7731d8]" />
          {/* <IoIosInformationCircle className="mx-auto block text-2xl text-[#7731d8]" /> */}
        </div>
        <p className="text-center text-sm text-[#4a2e7fcc]">About</p>
      </Link>
      <div className="group absolute bottom-3 block cursor-pointer">
        <div className={`rounded-lg p-2 group-hover:bg-[#7731d81a]`}>
          <IoIosInformationCircleOutline className="mx-auto block text-2xl text-[#4a2e7fcc] hover:text-[#7731d8]" />
          {/* <IoIosInformationCircle className="mx-auto block text-2xl text-[#7731d8]" /> */}
        </div>
        <p className="text-center text-sm text-[#4a2e7fcc]">Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
