import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuDownload } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import Slider from "./Slider";

const Details = () => {
  return (
    <>
      <div className="flex flex-col justify-start gap-5 px-4 pt-10 sm:flex-row sm:px-8">
        <Image
          src={"https://img.taaghche.com/frontCover/8213.jpg"}
          alt="cover"
          unoptimized
          width={10000}
          height={10000}
          className="h-64 min-w-full max-w-full rounded-lg object-cover sm:h-96 sm:min-w-64 sm:max-w-64 lg:min-w-96 lg:max-w-96"
        />

        <div className="px-2 sm:px-0">
          <div className="mb-4 flex justify-between sm:hidden">
            <div className="flex gap-4">
              <div className="flex items-center gap-1 text-center">
                <IoMdHeartEmpty className="mb-1 text-xl" />
                <p className="text-sm font-thin">3</p>
              </div>
              <div className="flex items-center gap-1 text-center">
                <LuDownload className="mb-1 text-xl" />
                <p className="text-sm font-thin">3</p>
              </div>
            </div>

            <p className="flex gap-2 text-sm font-thin text-gray-600 sm:hidden">
              2020/04/24
              <HiOutlineCalendarDateRange className="lg:hidden xl:block" />
            </p>
          </div>

          <div className="relative flex justify-between">
            <div>
              <p className="text-2xl font-bold">Bishuri</p>
              <Link href={`/author/3`} className="text-xl font-bold">
                khavier kermnet
              </Link>{" "}
              <p className="font-thin">Action</p>
              <p className="text my-4 font-thin text-purple">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique fugiat, inventore accusamus quas fuga veniam quae vel
                obcaecati, doloribus at pariatur. Voluptatum tempora dignissimos
                reprehenderit cum tempore officia molestias maiores
              </p>
            </div>
            <div className="absolute right-0 top-0 hidden sm:block">
              <p className="gap-2 text-sm flex justify-start font-thin text-gray-600 lg:text-xs xl:text-sm">
                2020/04/24
                <HiOutlineCalendarDateRange className="lg:hidden xl:block" />
              </p>
              <div className="hidden gap-4 mt-2 justify-end md:justify-center sm:flex">
                <div className="flex items-center gap-1 text-center">
                  <IoMdHeartEmpty className="mb-1" />
                  <p className="text-xs font-thin">3</p>
                </div>
                <div className="flex items-center gap-1 text-center">
                  <LuDownload className="mb-1" />
                  <p className="text-xs font-thin">3</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex gap-2">
            <Button className="w-full rounded-md bg-purple text-white">
              Download
            </Button>
            <div className="bg-transparet group flex cursor-pointer items-center rounded-md border border-gray-300 p-1 dark:border-purple">
              <IoMdHeartEmpty className="text-2xl text-purple transition-colors group-hover:text-red-600" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-2 font-light">
              <MdOutlineAttachMoney />
              <p className="pt-1">100% Free Download</p>
            </div>
            <div className="mt-3 flex cursor-pointer items-center gap-2 font-light">
              <LuDownload />
              <p className="pt-1">Share And Publish Anywhere</p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-hidden">
        <Slider />
      </div>
    </>
  );
};

export default Details;
