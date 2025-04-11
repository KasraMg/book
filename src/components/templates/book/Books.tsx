import Link from "next/link";
import React from "react";
import { LiaBookSolid  } from "react-icons/lia";

const Books = () => {
  return (
    <div className="hidden py-5 lg:!block">
      <p className="text-xl">
        <span className="bg-[radial-gradient(140.23%_683.08%_at_1.42%_4.44%,_#7d2ae8_0%,_#00c4cc_45%,_#5a32fa_70%)] bg-clip-text pr-2 text-xl font-bold text-transparent">
        Other
        </span> 
         books by this author
      </p>

      <div className="mt-8 space-y-3">
        <Link
          className="relative flex items-center justify-between"
          href={"/book/2"}
        >
          <div className="flex gap-1 items-center">
            <LiaBookSolid  />
            Bishuri
          </div>

          <span className="text-xs text-purple"> Action</span>
        </Link>
        <Link
          className="relative flex items-center justify-between"
          href={"/book/2"}
        >
          <div className="flex gap-1 items-center">
            <LiaBookSolid  />
            Bishuri
          </div>

          <span className="text-xs text-purple"> Action</span>
        </Link>
        <Link
          className="relative flex items-center justify-between"
          href={"/book/2"}
        >
          <div className="flex gap-1 items-center">
            <LiaBookSolid  />
            Bishuri
          </div>

          <span className="text-xs text-purple"> Action</span>
        </Link>
        <Link
          className="relative flex items-center justify-between"
          href={"/book/2"}
        >
          <div className="flex gap-1 items-center">
            <LiaBookSolid  />
            Bishuri
          </div>

          <span className="text-xs text-purple"> Action</span>
        </Link>
        <Link
          className="relative flex items-center justify-between"
          href={"/book/2"}
        >
          <div className="flex gap-1 items-center">
            <LiaBookSolid  />
            Bishuri
          </div>

          <span className="text-xs text-purple"> Action</span>
        </Link>
        <Link
          className="relative flex items-center justify-between"
          href={"/book/2"}
        >
          <div className="flex gap-1 items-center">
            <LiaBookSolid  />
            Bishuri
          </div>

          <span className="text-xs text-purple"> Action</span>
        </Link>
      </div>
    </div>
  );
};

export default Books;
