"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { Button } from "@heroui/button";
import Link from "next/link";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      dir={"ltr"}
      className="relative z-[999] flex items-center justify-between border-b border-[#0a0a0a] bg-[#00000008] px-4 py-2 dark:border-white"
    >
      <div className="flex items-center gap-1">
        <Image
          src={"/logo.png"}
          width={1000}
          className="w-16"
          height={1000}
          alt="logo"
        />
        <p className="text-2xl font-bold">Book</p>

        {theme !== "dark" ? (
          <MdOutlineDarkMode
            onClick={() => setTheme("dark")}
            className={`ml-5 cursor-pointer text-2xl transition-colors hover:text-red-600`}
          />
        ) : (
          <CiLight
            onClick={() => setTheme("light")}
            className={`ml-5 cursor-pointer text-2xl transition-colors hover:text-red-600`}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
