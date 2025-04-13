"use client"
import Link from "next/link";
import { LiaBookSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Sidebar = () => { 
  const path = usePathname(); 

  return (
    <div className="hidden min-w-[240px] max-w-[240px] py-5 lg:!block">
      <p className="text-xl">
        <span className="bg-[radial-gradient(140.23%_683.08%_at_1.42%_4.44%,_#7d2ae8_0%,_#00c4cc_45%,_#5a32fa_70%)] bg-clip-text pr-2 text-xl font-bold text-transparent"></span>
      </p>

      <div className="mt-8 space-y-3">
        <p className="font-semibold text-xs text-gray-700 px-2">Personal account</p>
        <Link
          className={`${path === "/userPanel/profile" ? "bg-[#a570ff26] text-purple !font-normal" : ""} hover:bg-[#a570ff26] transition-colors p-2 rounded-md relative flex items-center justify-start gap-2 font-thin`}
          href={"/book/2"}
        >
          <CgProfile className="text-xl" />
          Your Profile
        </Link>

        <Link
          className={`${path === "/userPanel/books" ? "bg-[#a570ff26] text-purple !font-normal" : ""} hover:bg-[#a570ff26] transition-colors p-2 rounded-md relative flex items-center justify-start gap-2 font-thin`}
          href={"/book/2"}
        >
          <LiaBookSolid className="text-xl" />
          Your Books
        </Link>
        <Link
          className={`${path === "/userPanel/favorites" ? "bg-[#a570ff26] text-purple !font-normal" : ""} hover:bg-[#a570ff26] transition-colors p-2 rounded-md relative flex items-center justify-start gap-2 font-thin`}
          href={"/book/2"}
        >
          <FaRegHeart className="text-xl" />
          Your Favorites
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
