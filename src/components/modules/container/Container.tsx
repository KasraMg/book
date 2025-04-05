import React from "react";
import Navbar from "../navbar/Navbar";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full rounded-b-lg sm:shadow-[-1px_-1px_9px_-5px_rgba(0,0,0,0.75)] sm:bg-white md:mt-3 md:rounded-t-lg">
      <Navbar />
      <div className={`relative z-50 font-vazir`}>{children}</div>
    </div>
  );
};

export default Container;
