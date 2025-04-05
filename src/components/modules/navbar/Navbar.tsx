"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@heroui/button";
import Link from "next/link";
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
import { AiOutlineMenu } from "react-icons/ai";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
} from "@heroui/react";

const Navbar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div
      dir={"ltr"}
      className="relative z-[999] flex items-center justify-between gap-3 py-2 pl-4 dark:border-white sm:gap-0 sm:px-4 sm:shadow-[0px_0px_0px_1px_rgba(64,87,109,0.04),_0px_6px_20px_-4px_rgba(64,87,109,0.3)]"
    >
      <div
        onClick={onOpen}
        className="z-10 block cursor-pointer rounded-md bg-white p-2 shadow-[0px_0px_0px_1px_rgba(64,87,109,0.04),_0px_6px_20px_-4px_rgba(64,87,109,0.3)] transition-colors hover:bg-[#40576d12] sm:hidden sm:!shadow-none"
      >
        <AiOutlineMenu className="text-2xl" />
      </div>

      <Drawer placement="left" className="!z-[9909] !w-[80%]" isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent className="!z-[9909]">
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
            Menu
              </DrawerHeader>
              <DrawerBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>

      <div className="absolute left-0 top-0 block h-[200px] w-full bg-[linear-gradient(to_bottom,#ffffff00,#fff),linear-gradient(to_left,#ebe0fc_45%,#ddeaf9)] sm:hidden"></div>
      <div className="relative w-full min-w-[160px] max-w-[464px] rounded-md shadow-[0px_0px_0px_1px_rgba(64,87,109,0.04),_0px_6px_20px_-4px_rgba(64,87,109,0.3)] sm:rounded-none sm:!shadow-none">
        <input
          type="text"
          className="w-full rounded-lg border border-[#35475a33] py-2 pl-10 pr-3 text-black placeholder:text-gray-600"
          placeholder="Search Your Book"
        />
        <CiSearch className="absolute left-2 top-2 text-2xl text-[#0d1216]" />
      </div>
      <section className="flex items-center gap-1">
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
    </div>
  );
};

export default Navbar;
