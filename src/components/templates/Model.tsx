"use client"
import dynamic from "next/dynamic";

const BookModel = dynamic(
  () => import("@/components/modules/bookModel/BookModel"),
  {
    ssr: false,
  },
);
const Model = () => {
  return <BookModel url="/book.glb" />;
};

export default Model;
