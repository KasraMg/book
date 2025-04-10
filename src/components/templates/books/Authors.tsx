import Link from "next/link";
import React from "react";

const Authors = () => {
  return (
    <div className="py-5 lg:!block hidden">
      <p className="text-xl">
        <span className="font-bold pr-2 bg-[radial-gradient(140.23%_683.08%_at_1.42%_4.44%,_#7d2ae8_0%,_#00c4cc_45%,_#5a32fa_70%)] bg-clip-text text-xl text-transparent">
          Authors
        </span>
        you might find interesting
      </p>

      <div className="space-y-3 mt-8">
        <Link className="relative items-center flex justify-between" href={"/author/2"}>
          Shahin Mioeee

          <span className="text-xs text-purple">4 Books available</span>
        </Link>
        <Link className="relative items-center flex justify-between" href={"/author/2"}>
          Shahin Mioeee

          <span className="text-xs text-purple">4 Books available</span>
        </Link>
        <Link className="relative items-center flex justify-between" href={"/author/2"}>
          Shahin Mioeee

          <span className="text-xs text-purple">4 Books available</span>
        </Link>
        <Link className="relative items-center flex justify-between" href={"/author/2"}>
          Shahin Mioeee

          <span className="text-xs text-purple">4 Books available</span>
        </Link>

      </div>
    </div>
  );
};

export default Authors;
