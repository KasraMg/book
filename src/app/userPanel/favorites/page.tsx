"use client";
import Title from "@/components/modules/title/Title";
import Slider from "@/components/templates/book/Slider";
import Card from "@/components/templates/index/books/Card"; 

const page = () => {
  return (
    <div>
      <Title title="Your Favorites Books" className="flex [&>*]:!text-2xl" />
      <Slider className="!mt-0"/>

      <Title title="Your Favorites Authors" className="flex [&>*]:!text-2xl !mt-6" /> 
      <Slider className="!mt-0" authors/>
    </div>
  );
};

export default page;
