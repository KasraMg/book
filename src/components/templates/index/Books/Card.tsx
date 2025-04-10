import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <Link href={`/book/3`} className="transition-transform hover:-translate-y-2 relative mt-4">
      <Image
        src={"https://img.taaghche.com/frontCover/8213.jpg"}
        alt="cover"
        unoptimized
        width={10000}
        height={10000}
        className="xs:h-48 h-40 w-48 rounded-lg object-cover"
      />
      <p className="mt-1 text-xl font-semibold">Bishuri</p>
      <p className="font-thin">khavier kermnet</p> 
      <p style={{transform:'rotateZ(327deg)'}} className="absolute -left-3 top-0 bg-purple text-white p-1 text-[10px] xs:text-xs rounded-md">Category</p>
    </Link>
  );
};

export default Card;
