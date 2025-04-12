import Link from "next/link";
import React from "react";
import { LiaBookSolid } from "react-icons/lia";
import { TfiWrite } from "react-icons/tfi";

interface Props {
  title: string;
  mainWordTitle: string;
  type: "books" | "authors";
}
const List = (props: Props) => {
  return (
    <div className="hidden py-5 lg:!block min-w-[240px] max-w-[240px]">
      <p className="text-xl">
        <span className="bg-[radial-gradient(140.23%_683.08%_at_1.42%_4.44%,_#7d2ae8_0%,_#00c4cc_45%,_#5a32fa_70%)] bg-clip-text pr-2 text-xl font-bold text-transparent">
          {props.mainWordTitle}
        </span>
        {props.title}
      </p>

      <div className="mt-8 space-y-3">
        <Link
          className="relative flex items-center justify-between"
          href={"/book/2"}
        >
          <div className="flex items-center gap-1">
            {props.type === "authors" ? (
              <TfiWrite className="text-sm" />
            ) : (
              <LiaBookSolid />
            )}
            
          {props.type === "authors" ? 'reza zare' : "bishuri"}
          </div>

          <span className="text-xs text-purple"> {props.type === "authors" ? "4 books available" :"action"}</span>
        </Link>

        <Link
          className="relative flex items-center justify-between"
          href={"/book/2"}
        >
          <div className="flex items-center gap-1">
          {props.type === "authors" ? (
              <TfiWrite className="text-sm" />
            ) : (
              <LiaBookSolid />
            )}
            
          {props.type === "authors" ? 'reza zare' : "bishuri"}
          </div>

          <span className="text-xs text-purple"> {props.type === "authors" ? "4 books available" :"action"}</span>
        </Link>
        <Link
          className="relative flex items-center justify-between"
          href={"/book/2"}
        >
          <div className="flex items-center gap-1">
          {props.type === "authors" ? (
              <TfiWrite className="text-sm" />
            ) : (
              <LiaBookSolid />
            )}
            
          {props.type === "authors" ? 'reza zare' : "bishuri"}
          </div>

          <span className="text-xs text-purple"> {props.type === "authors" ? "4 books available" :"action"}</span>
        </Link>
        <Link
          className="relative flex items-center justify-between"
          href={"/book/2"}
        >
          <div className="flex items-center gap-1">
          {props.type === "authors" ? (
              <TfiWrite className="text-sm" />
            ) : (
              <LiaBookSolid />
            )}
            
          {props.type === "authors" ? 'reza zare' : "bishuri"}
          </div>

          <span className="text-xs text-purple"> {props.type === "authors" ? "4 books available" :"action"}</span>
        </Link>
        <Link
          className="relative flex items-center justify-between"
          href={"/book/2"}
        >
          <div className="flex items-center gap-1">
          {props.type === "authors" ? (
              <TfiWrite className="text-sm" />
            ) : (
              <LiaBookSolid />
            )}
            
          {props.type === "authors" ? 'reza zare' : "bishuri"}
          </div>

          <span className="text-xs text-purple"> {props.type === "authors" ? "4 books available" :"action"}</span>
        </Link>
        <Link
          className="relative flex items-center justify-between"
          href={"/book/2"}
        >
          <div className="flex items-center gap-1">
          {props.type === "authors" ? (
              <TfiWrite className="text-sm" />
            ) : (
              <LiaBookSolid />
            )}
            
          {props.type === "authors" ? 'reza zare' : "bishuri"}
          </div>

          <span className="text-xs text-purple"> {props.type === "authors" ? "4 books available" :"action"}</span>
        </Link>
      </div>
    </div>
  );
};

export default List;
