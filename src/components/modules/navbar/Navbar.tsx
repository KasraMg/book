"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

import { CiSearch } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { FaAngleDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Menu from "./Menu";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [value, setValue] = useState("");
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("search");

  useEffect(() => {
    if (path === "/books") {
      if (searchValue) {
        setValue(searchValue);
      }else{
        setValue('');
      }
    }
  }, [searchValue, path]);

  return (
    <div
      dir={"ltr"}
      className="relative z-[999] flex items-center justify-between gap-3 px-4 py-2 dark:border-white sm:gap-0 sm:px-4 sm:shadow-[0px_0px_0px_1px_rgba(64,87,109,0.04),_0px_6px_20px_-4px_rgba(64,87,109,0.3)]"
    >
      <Menu />

      <div className="absolute left-0 top-0 block h-[200px] w-full bg-[linear-gradient(to_bottom,#ffffff00,#fff),linear-gradient(to_left,#ebe0fc_45%,#ddeaf9)] dark:!bg-[linear-gradient(#00000000,#000000),linear-gradient(to_left,#09090a_45%,#2e2e2e)] sm:hidden"></div>
      <div className="relative w-full min-w-[160px] max-w-[464px] rounded-md shadow-[0px_0px_0px_1px_rgba(64,87,109,0.04),_0px_6px_20px_-4px_rgba(64,87,109,0.3)] sm:rounded-none sm:!shadow-none">
        <input
          type="text"
          className="w-full rounded-lg border border-[#35475a33] py-2 pl-10 pr-3 text-black outline-none transition-colors placeholder:text-gray-600 focus-visible:border-2 focus-visible:border-purple dark:text-white"
          placeholder="Search Your Book"
          value={value}
          onKeyDown={(event) => {
            if (event.code == "Enter") {
              if (value.trim().length !== 0) {
                router.push(`/books?search=${value}`);
              }
            }
          }}
          onChange={(event) => setValue(event.target.value)}
        />
        <CiSearch
          onClick={() => {
            if (value.trim().length !== 0) {
              router.push(`/books?search=${value}`);
            }
          }}
          className="absolute left-2 top-2 cursor-pointer text-2xl text-purple"
        />
      </div>
      <section className="hidden items-center gap-1 sm:flex">
        <div className="hidden cursor-pointer rounded-md p-2 transition-colors hover:bg-[#40576d12] sm:block">
          <IoSettingsOutline className="text-2xl" />
        </div>
        <div className="hidden cursor-pointer rounded-md p-2 transition-colors hover:bg-[#40576d12] sm:block">
          <IoMdNotificationsOutline className="text-2xl" />
        </div>

        <Dropdown>
          <DropdownTrigger className="!hidden w-[180px] rounded-md px-3 py-1 transition-colors hover:bg-[#40576d12] sm:!flex">
            <div className="flex cursor-pointer items-center gap-4">
              <div className="flex gap-3">
                <Image
                  height={1000}
                  width={1000}
                  unoptimized
                  alt="avatar"
                  className="h-8 w-8 rounded-full"
                  src={
                    "https://avatar.canva.com/avatars/users/98c283fd-4bec-4d48-a4ca-54940053e27e/50.jpg"
                  }
                />
                <div>
                  <p className="text-xs font-bold">Shahin</p>
                  <p className="text-xs">MoshkelGosha</p>
                </div>
              </div>
              <FaAngleDown className="text-gray-400" />
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem
              key="user-info"
              className="cursor-default hover:!bg-transparent"
              isReadOnly
              textValue="User Info"
            >
              <div className="flex items-center gap-3 border-b border-gray-300 pb-5">
                <Image
                  height={10000}
                  width={10000}
                  unoptimized
                  alt="avatar"
                  className="h-16 w-16 rounded-full"
                  src="https://avatar.canva.com/avatars/users/98c283fd-4bec-4d48-a4ca-54940053e27e/50.jpg"
                />
                <div>
                  <p className="font-sans text-[18px] font-bold">
                    Shahin MoshkelGosha
                  </p>
                  <p className="">kasrakasra924@gmail.com</p>
                </div>
              </div>
            </DropdownItem>
            <DropdownItem key="setting">Setting</DropdownItem>
            <DropdownItem key="copy">My Books</DropdownItem>
            <DropdownItem key="edit">Favorites</DropdownItem>
            <DropdownItem key="Logout" className="text-danger" color="danger">
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </section>

      <div className="block sm:hidden">
        {theme !== "dark" ? (
          <MdOutlineDarkMode
            onClick={() => setTheme("dark")}
            className={`relative mx-auto cursor-pointer text-2xl text-purple transition-colors hover:text-black`}
          />
        ) : (
          <CiLight
            onClick={() => setTheme("light")}
            className={`relative mx-auto cursor-pointer text-2xl text-purple transition-colors hover:text-white`}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
