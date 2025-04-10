import React from "react";
import Card from "../index/books/Card";
import { Button } from "@heroui/button";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Books = () => {
  return (
    <div className="relative p-4">
      <div className="mt-4 flex gap-6">
        <select
          name=""
          id=""
          className="w-full border-b border-purple bg-transparent font-thin md:w-[300px]"
        >
          <option className="dark:text-black" value="">
            Select Category
          </option>
          <option className="dark:!text-black" value="Action">
            Action
          </option>
          <option className="dark:!text-black" value="Action">
            Action
          </option>
          <option className="dark:!text-black" value="Action">
            Action
          </option>
        </select>
        <select
          name=""
          id=""
          className="w-full border-b border-purple bg-transparent font-thin md:w-[300px]"
        >
          <option className="dark:text-black" value="">
            Newst
          </option>
          <option className="dark:!text-black" value="Newst">
            Newst
          </option>
          <option className="dark:!text-black" value="Newst">
            Newst
          </option>
          <option className="dark:!text-black" value="Newst">
            Newst
          </option>
        </select>
      </div>
      <p className="mt-3 text-sm font-thin text-purple">1,000 Books</p>

      <section className="relative mt-4 grid grid-cols-[auto,auto] justify-evenly gap-4 sm:grid-cols-[auto,auto,auto] md:grid-cols-[auto,auto,auto,auto] xl:grid-cols-[auto,auto,auto,auto,auto]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>

      <div className="mt-6 flex items-center justify-center gap-1">
        <div className="cursor-pointer rounded-md bg-[#7731d86b] p-1">
          <FaAngleLeft className="text-purple" />
        </div>{" "}
        <Button className="!h-max !w-max !min-w-max !rounded-md bg-purple !px-3 !py-2 text-white">
          1
        </Button>
        <Button className="!h-max !w-max !min-w-max !rounded-md bg-purple !px-3 !py-2 text-white">
          2
        </Button>
        <Button className="!h-max !w-max !min-w-max !rounded-md bg-purple !px-3 !py-2 text-white">
          3
        </Button>
        <div className="cursor-pointer rounded-md bg-[#7731d86b] p-1">
          <FaAngleRight className="text-purple" />
        </div>{" "}
      </div>
    </div>
  );
};

export default Books;
