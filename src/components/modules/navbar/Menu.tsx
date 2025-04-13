import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@heroui/react";
import Link from "next/link";
import { GoHomeFill, GoPencil, GoHome } from "react-icons/go";
import { PiBooks, PiBooksFill } from "react-icons/pi";
import {
  IoIosInformationCircle,
  IoIosInformationCircleOutline,
} from "react-icons/io";
import Image from "next/image";
import { RiPencilFill } from "react-icons/ri";

import { usePathname } from "next/navigation";
const Menu = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const path = usePathname();

  return (
    <>
      <div
        onClick={onOpen}
        className="z-10 block cursor-pointer rounded-md bg-transparent p-2 shadow-[0px_0px_0px_1px_rgba(64,87,109,0.04),_0px_6px_20px_-4px_rgba(64,87,109,0.3)] transition-colors hover:bg-[#40576d12] sm:hidden sm:!shadow-none"
      >
        <AiOutlineMenu className="text-2xl text-purple" />
      </div>

      <Drawer
        placement="left"
        className="!z-[9909] !w-[80%]"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <DrawerContent className="!z-[9909]">
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">Menu</DrawerHeader>
              <DrawerBody>
                <div className="flex items-center gap-3 border-b border-gray-300 pb-5">
                  <Image
                    height={10000}
                    width={10000}
                    unoptimized
                    alt="avatar"
                    className="h-10 w-10 rounded-full"
                    src="https://avatar.canva.com/avatars/users/98c283fd-4bec-4d48-a4ca-54940053e27e/50.jpg"
                  />
                  <div>
                    <p className="font-sans text-sm font-semibold">
                      Shahin MoshkelGosha
                    </p>
                    <p className="text-xs">kasrakasra924@gmail.com</p>
                  </div>
                </div>

                <Link className="group !mt-5 block" href={"/"}>
                  <div
                    className={`${path === "/" ? "bg-[#7731d81a]" : ""} rounded-lg p-2 group-hover:bg-[#7731d81a]`}
                  >
                    {path === "/" ? (
                      <GoHomeFill className="mx-auto block text-2xl text-purple" />
                    ) : (
                      <GoHome className="mx-auto block text-2xl text-[#4a2e7fcc] hover:text-purple" />
                    )}
                  </div>
                  <p
                    className={`${path === "/" ? "font-semibold text-purple" : "text-[#4a2e7fcc]"} text-center text-sm`}
                  >
                    Home
                  </p>
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
                  <p
                    className={`${path === "/books" ? "font-semibold text-purple" : "text-[#4a2e7fcc]"} text-center text-sm`}
                  >
                    Books
                  </p>
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
                  <p
                    className={`${path === "/authors" ? "font-semibold text-purple" : "text-[#4a2e7fcc]"} text-center text-sm text-[#4a2e7fcc]`}
                  >
                    Authors
                  </p>
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
                  <p
                    className={`${path === "/about" ? "font-semibold text-purple" : "text-[#4a2e7fcc]"} text-center text-sm text-[#4a2e7fcc]`}
                  >
                    About
                  </p>
                </Link>
                <div className="group absolute bottom-3 block cursor-pointer">
                  <div
                    className={`flex flex-row-reverse justify-end gap-2 rounded-lg p-2 group-hover:bg-[#7731d81a]`}
                  >
                    <p className="text-center text-sm text-[#4a2e7fcc]">
                      Logout
                    </p>
                    <IoIosInformationCircleOutline className="block text-2xl text-[#4a2e7fcc] hover:text-[#7731d8]" />
                    {/* <IoIosInformationCircle className=" block text-2xl text-[#7731d8]" /> */}
                  </div>
                </div>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
