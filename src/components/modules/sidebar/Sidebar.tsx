import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="space-y-5 border-r border-[#4a2e7e26] py-20 pr-4">
      <Link className="block" href={"/home"}>
        <div className="rounded-lg bg-[#7731d81a] p-2">
          <FaHome className="mx-auto block text-2xl text-[#7731d8]" />
        </div>
        <p className="text-sm text-[#7731d8]">Home</p>
      </Link>
      <Link className="block" href={"/home"}>
        <div className={`rounded-lg p-2 hover:bg-[#7731d81a]`}>
          <FaHome className="mx-auto block text-2xl text-[#4a2e7fcc]" />
        </div>
        <p className="text-sm text-[#4a2e7fcc]">Home</p>
      </Link>
      <Link className="block" href={"/home"}>
        <div className={`rounded-lg p-2 hover:bg-[#7731d81a]`}>
          <FaHome className="mx-auto block text-2xl text-[#4a2e7fcc]" />
        </div>
        <p className="text-sm text-[#4a2e7fcc]">Home</p>
      </Link>
      <Link className="block" href={"/home"}>
        <div className={`rounded-lg p-2 hover:bg-[#7731d81a]`}>
          <FaHome className="mx-auto block text-2xl text-[#4a2e7fcc]" />
        </div>
        <p className="text-sm text-[#4a2e7fcc]">Home</p>
      </Link>
      <Link className="block" href={"/home"}>
        <div className={`rounded-lg p-2 hover:bg-[#7731d81a]`}>
          <FaHome className="mx-auto block text-2xl text-[#4a2e7fcc]" />
        </div>
        <p className="text-sm text-[#4a2e7fcc]">Home</p>
      </Link>
    </div>
  );
};

export default Sidebar;
