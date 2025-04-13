import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <Link
      href={"/author/1"}
      className="relative mt-5 block transition-transform hover:-translate-y-2"
    >
      <Image
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Q4yYiaext6NfwunADCEshIB_0bvt2OJnuQ&s"
        }
        alt="cover"
        unoptimized
        width={10000}
        height={10000}
        className="sm:float-right mb-2 sm:ml-3 sm:mr-3 h-40 sm:h-32 w-full sm:w-32 rounded-md object-cover"
      />
      <div>
        <div className="relative sm:bottom-1">
          <p className="text-left sm:text-xl font-semibold">Bishuri</p>
          <p className="text-left relative sm:bottom-1 sm:text-xl">khavier kermnet</p>
          <p className="text-left mb-2 text-xs font-thin text-purple">
            4 books available{" "}
          </p>
        </div>
        <p className="text-left relative sm:bottom-1.5 text-sm font-thin sm:block hidden">
          salam in ye biografi testi hast dige checkabar chikefe referf rfrfrfrf
          rfrfr vfvf sdede salam in ye biografi testi hast dige checkabar
          chikefe.
        </p>
        <p className="text-left relative sm:bottom-1.5 text-sm font-thin sm:hidden block">
          salam in ye biografi testi hast dige checkabar chikefe referf rfrfrfrf
          rfrfr...
        </p>
      </div>
    </Link>
  );
};

export default Card;
