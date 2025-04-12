import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
} from "@heroui/react";
import Link from "next/link";
import { GoHomeFill, GoPencil } from "react-icons/go";
import { PiBooks } from "react-icons/pi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Image from "next/image";
const Menu = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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

                <Link className="group mt-5 block" href={"/home"}>
                  <div className="flex gap-2 rounded-lg bg-[#7731d81a] p-2 group-hover:bg-[#7731d81a]">
                    <GoHomeFill className="block text-2xl text-[#7731d8]" />
                    {/* <GoHome className=" block text-2xl text-[#4a2e7fcc] hover:text-[#7731d8]" /> */}
                    <p className="text-center text-sm font-semibold text-[#7731d8]">
                      Home
                    </p>
                  </div>
                </Link>
                <Link className="group block" href={"/books"}>
                  <div
                    className={`flex flex-row-reverse justify-end gap-2 rounded-lg p-2 group-hover:bg-[#7731d81a]`}
                  >
                    {/* <PiBooksFill className=" block text-2xl text-[#7731d8]" /> */}
                    <p className="text-center text-sm text-[#4a2e7fcc]">
                      Books
                    </p>
                    <PiBooks className="block text-2xl text-[#4a2e7fcc] hover:text-[#7731d8]" />
                  </div>
                </Link>
                <Link className="group block" href={"/authors"}>
                  <div
                    className={`flex flex-row-reverse justify-end gap-2 rounded-lg p-2 group-hover:bg-[#7731d81a]`}
                  >
                    {/* <RiPencilFill className=" block text-2xl  text-[#7731d8]" /> */}
                    <p className="text-center text-sm text-[#4a2e7fcc]">
                      Authors
                    </p>
                    <GoPencil className="block text-2xl text-[#4a2e7fcc] hover:text-[#7731d8]" />
                  </div>
                </Link>
                <Link className="group block" href={"/about"}>
                  <div
                    className={`flex flex-row-reverse justify-end gap-2 rounded-lg p-2 group-hover:bg-[#7731d81a]`}
                  >
                    {/* <IoIosInformationCircle className=" block text-2xl text-[#7731d8]" /> */}
                    <p className="text-center text-sm text-[#4a2e7fcc]">
                      About
                    </p>
                    <IoIosInformationCircleOutline className="block text-2xl text-[#4a2e7fcc] hover:text-[#7731d8]" />
                  </div>
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
