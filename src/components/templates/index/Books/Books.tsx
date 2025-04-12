import Title from "@/components/modules/title/Title";
import { Button } from "@heroui/button";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import Card from "./Card";

const Books = () => {
  return (
    <>
      <Title title="Books" />
      <section className="relative mt-4 grid grid-cols-[auto,auto,auto,auto,auto] gap-4">
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
        <Card />
        <Card />

        <div className="absolute bottom-0 left-0 flex w-full justify-center">
          <Link className="" href={"/books"}>
            <Button className="z-50 bg-purple text-white">
              Show More <FaAngleDown />
            </Button>
          </Link>
          <div className="absolute bottom-0 left-0 h-[100px] w-full bg-white-overlay-gradient dark:!bg-black-overlay-gradient"></div>
        </div>
      </section>
    </>
  );
};

export default Books;
