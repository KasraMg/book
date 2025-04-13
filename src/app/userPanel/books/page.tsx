"use client";
import Title from "@/components/modules/title/Title";
import Card from "@/components/templates/index/books/Card"; 

const page = () => {
  return (
    <div>
      <Title title="Your Books" className="hidden sm:flex [&>*]:!text-2xl" />

      <section className="relative grid grid-cols-[auto,auto] justify-evenly gap-4 sm:mt-10 sm:grid-cols-[auto,auto,auto] md:grid-cols-[auto,auto,auto,auto] xl:grid-cols-[auto,auto,auto,auto,auto]">
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
    </div>
  );
};

export default page;
