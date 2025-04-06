import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <Link href={'/author/1'} className="relative mt-5 block hover:-translate-y-2 transition-transform" >
      <Image
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Q4yYiaext6NfwunADCEshIB_0bvt2OJnuQ&s"
        }
        alt="cover"
        unoptimized
        width={10000}
        height={10000}
        className="float-right mb-2 mr-3 ml-3 h-32 w-32 rounded-md object-cover"
      />
      <div>
       <div className=" relative bottom-1">
       <p className="text-xl font-semibold">Bishuri</p>
        <p className="text-xl relative bottom-1">khavier kermnet</p>
        <p className="mb-2 text-xs font-thin text-purple">4 books available </p>
       </div>
        <p className="text-sm relative bottom-1.5">
          salam in ye biografi testi hast dige checkabar chikefe referf rfrfrfrf
          rfrfr vfvf sdede salam in ye biografi testi hast dige checkabar
          chikefe.
        </p>
      </div>
    </Link>
  );
};

export default Card;
