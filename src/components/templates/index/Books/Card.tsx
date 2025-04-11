import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ slider }: { slider?: boolean }) => {
  return (
    <Link
      href={`/book/3`}
      className="relative mt-4 block transition-transform hover:-translate-y-2"
    >
      <Image
        src={"https://img.taaghche.com/frontCover/8213.jpg"}
        alt="cover"
        unoptimized
        width={10000}
        height={10000}
        className={`${slider ? "!w-full" : ""} xs:h-48 h-40 w-48 rounded-lg object-cover`}
      />
      <p className="mt-1 text-left text-xl font-semibold">Bishuri</p>
      <p className="text-left font-thin">khavier kermnet</p>
      {!slider ? (
        <p
          style={{ transform: "rotateZ(327deg)" }}
          className="xs:text-xs absolute -left-3 top-0 rounded-md bg-purple p-1 text-[10px] text-white"
        >
          Category
        </p>
      ) : (
        ""
      )}
    </Link>
  );
};

export default Card;
