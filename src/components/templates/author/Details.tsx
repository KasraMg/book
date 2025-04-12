"use client";
import { Button } from "@heroui/button";
import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io"; 
import { MdOutlineAttachMoney } from "react-icons/md";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import Slider from "../book/Slider"; 
import ShareButton from "@/components/modules/shareButton/ShareButton";

const Details = () => { 
  return (
    <>
      <div className="flex flex-col justify-start gap-5 px-4 pt-10 sm:flex-row sm:px-8">
        <Image
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Q4yYiaext6NfwunADCEshIB_0bvt2OJnuQ&s"
          }
          alt="cover"
          unoptimized
          width={10000}
          height={10000}
          className="h-64 min-w-full max-w-full rounded-lg object-cover sm:h-96 sm:min-w-64 sm:max-w-64 lg:min-w-96 lg:max-w-96"
        />

        <div className="px-2 sm:px-0"> 
          <div className="relative flex justify-between">
            <div>
              <p className="text-2xl font-bold">khavier</p>
              <p className="text-xl font-bold">kermnet</p>{" "}
              <div className="flex items-center gap-1">
                <p className="flex gap-2 text-sm font-thin text-gray-600">
                  2020/04/24
                  <HiOutlineCalendarDateRange className="lg:hidden xl:block" />
                </p>
                <p className="text-gray-600">-</p>
                <div className="flex items-center gap-1 text-center text-gray-600">
                  <IoMdHeartEmpty className="mb-1" />
                  <p className="text-xs font-thin">3</p>
                </div>
              </div>
              <p className="text my-4 font-thin text-purple">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique fugiat, inventore accusamus quas fuga veniam quae vel
                obcaecati, doloribus at pariatur. Voluptatum tempora dignissimos
                reprehenderit cum tempore officia molestias maiores
              </p>
            </div>
            <div className="absolute right-0 top-0 hidden sm:block">
              <p className="flex justify-start gap-2 text-sm font-thin text-gray-600 lg:text-xs xl:text-sm">
                4 Books Available
                <HiOutlineCalendarDateRange className="lg:hidden xl:block" />
              </p>
            </div>
          </div>
          <div className="mt-5 flex gap-2">
            <Button className="bg-transparet group flex w-full cursor-pointer items-center rounded-md border border-gray-300 p-1 text-white dark:border-purple">
              <IoMdHeartEmpty className="text-2xl text-purple transition-colors group-hover:text-red-600" />
            </Button>
          </div>
          <div className="mt-4">
            <ShareButton/>
            <div className="flex items-center gap-2 font-light">
              <MdOutlineAttachMoney />
              <p className="pt-1">100% Free Books Download</p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-hidden">
        <Slider title="Books" />
      </div>
    </>
  );
};

export default Details;
