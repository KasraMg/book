"use client";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { LiaBookSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { CiLogout } from "react-icons/ci";
import { GoHome } from "react-icons/go";

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
          {() => (
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
                <div className="mt-8 space-y-3">
                  <p className="px-2 text-xs font-semibold text-gray-700 dark:text-gray-400">
                    Personal account
                  </p>

                  <Link
                    className={`${path === "/" ? "bg-[#a570ff26] !font-normal text-purple" : ""} relative flex text-sm items-center justify-start gap-4 rounded-md p-2 font-thin transition-colors hover:bg-[#a570ff26]`}
                    href={"/"}
                  >
                    <GoHome className="text-2xl" />
                    Home
                  </Link>

                  <Link
                    className={`${path === "/userPanel/profile" ? "bg-[#a570ff26] !font-normal text-purple" : ""} relative flex text-sm items-center justify-start gap-4 rounded-md p-2 font-thin transition-colors hover:bg-[#a570ff26]`}
                    href={"/userPanel/profile"}
                  >
                    <CgProfile className="text-2xl" />
                    Your Profile
                  </Link>

                  <Link
                    className={`${path === "/userPanel/books" ? "bg-[#a570ff26] !font-normal text-purple" : ""} relative flex text-sm items-center justify-start gap-4 rounded-md p-2 font-thin transition-colors hover:bg-[#a570ff26]`}
                    href={"/userPanel/books"}
                  >
                    <LiaBookSolid className="text-2xl" />
                    Your Books
                  </Link>
                  <Link
                    className={`${path === "/userPanel/favorites" ? "bg-[#a570ff26] !font-normal text-purple" : ""} relative flex text-sm items-center justify-start gap-4 rounded-md p-2 font-thin transition-colors hover:bg-[#a570ff26]`}
                    href={"/userPanel/favorites"}
                  >
                    <FaRegHeart className="text-2xl" />
                    Your Favorites
                  </Link>
                </div>
                <div className="group absolute bottom-3 block cursor-pointer">
                  <div
                    className={`flex flex-row-reverse justify-end gap-2 rounded-lg p-2 group-hover:bg-[#7731d81a]`}
                  >
                    <p className="text-center text-sm text-[#4a2e7fcc]">
                      Logout
                    </p>
                    <CiLogout className="block text-2xl text-[#4a2e7fcc] hover:text-[#7731d8]" />
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
