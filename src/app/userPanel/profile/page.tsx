"use client"
import Title from "@/components/modules/title/Title";
import { Button } from "@heroui/button";
import Image from "next/image";
import { Autocomplete, AutocompleteItem } from "@heroui/react";

const page = () => {
  const type = [
    {
      label: "Personal",
      key: "personal",
      description: "personal",
    },
    {
      label: "Teacher",
      key: "teacher",
      description: "teacher",
    },
    {
      label: "Student",
      key: "student",
      description: "student",
    },
  ];
  return (
    <div>
      <Title title="Your Profile" className="[&>*]:!text-2xl sm:flex hidden" />

      <section className="sm:mt-10 w-full xl:w-[750px]">
        <div className="flex sm:flex-row flex-col items-center justify-between border-b border-gray-300 pb-5">
          <div className="w-full">
            <p className="text-sm sm:block hidden">Profile photo</p>
            <Image
              alt="cover"
              width={1000}
              height={1000}
              unoptimized
              className="mt-1 h-20 w-20 rounded-full mx-auto mb-5 sm:mb-0 block sm:mx-0"
              src={
                "https://avatar.canva.com/avatars/users/98c283fd-4bec-4d48-a4ca-54940053e27e/200.jpg"
              }
            />
          </div>
          <div className="flex gap-3">
            <Button variant="light">Remove photo</Button>
            <Button className="border-1" variant="bordered">
              Change photo
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between border-b border-gray-300 pb-5 pt-5">
          <div className="w-full">
            <p className="text-sm">Name</p>
            <p className="mt-3 text-sm font-thin text-[#0d1216] dark:text-white">
              shahin moshkelGosha
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="border-1" variant="bordered">
              Edit
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between border-b border-gray-300 pb-5 pt-5">
          <div className="w-full">
            <p className="text-sm">Email address</p>
            <div className="mt-3 sm:flex-nowrap flex-wrap flex w-full gap-2">
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 px-2 py-3 sm:py-1 text-sm font-thin outline-none transition-colors focus:border-purple"
                value={"kasrakasra924@gmail.com"}
              />
              <Button className="border-1" variant="bordered">
                Cancel
              </Button>
              <Button className="bg-purple text-white">Save</Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-b border-gray-300 pb-5 pt-5">
          <div className="w-full">
            <p className="text-sm">Email address</p>
            <p className="mt-3 text-sm font-thin text-[#0d1216] dark:text-white">
              kasrakasra924@gmail.com
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="border-1" variant="bordered">
              Edit
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between border-b border-gray-300 pb-5 pt-5">
          <div className="w-full">
            <p className="text-sm">What will you be using Canva for?</p>
            <Autocomplete
              className="font-thin md:w-[300px] !mt-4   !outline-none"
              defaultItems={type}
              label=""
              placeholder="Personal"
              variant="bordered"
            >
              {(item) => (
                <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>
              )}
            </Autocomplete>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
