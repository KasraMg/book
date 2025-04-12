import Title from "@/components/modules/title/Title";
import { Button } from "@heroui/button";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import Card from "./Card";

const Authors = () => {
  return (
    <>
      <Title title="Authors" className="mt-16" /> 
      <section className="relative mb-3 mt-3 grid grid-cols-[auto,auto] justify-around gap-4 sm:grid-cols-[auto,auto] md:grid-cols-[auto,auto,auto] xl:grid-cols-[auto,auto,auto,auto]">
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
        <Card />
        <Card />

        <div className="absolute bottom-0 left-0 flex w-full justify-center">
          <Link className="" href={"/authors"}>
            <Button className="bg-purple z-50 text-white">
              Show More <FaAngleDown />
            </Button>
          </Link>
          <div className="bg-gray-overlay-gradient sm:bg-white-overlay-gradient dark:!bg-black-overlay-gradient absolute bottom-0 left-0 h-[200px] w-full"></div>
        </div>
      </section>
    </>
  );
};

export default Authors;
