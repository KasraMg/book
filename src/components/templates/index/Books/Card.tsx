import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="transition-transform hover:-translate-y-2">
      <Image
        src={"https://img.taaghche.com/frontCover/8213.jpg"}
        alt="cover"
        unoptimized
        width={10000}
        height={10000}
        className="h-40 w-36 rounded-lg"
      />
      <p className="mt-1 text-xl font-semibold">Bishuri</p>
      <p className="font-thin">khavier kermnet</p>
    </div>
  );
};

export default Card;
