import React from "react";
import Navbar from "../navbar/Navbar";
import TopBar from "@/components/templates/userPanel/TopBar";

const Container = ({
  children,
  userPanel,
}: {
  children: React.ReactNode;
  userPanel?: boolean;
}) => {
  return (
    <div className="w-full rounded-b-lg sm:bg-white sm:shadow-[-1px_-1px_9px_-5px_rgba(0,0,0,0.75)] dark:sm:bg-black md:mt-3 md:rounded-t-lg">
      <Navbar className={userPanel ? "hidden sm:flex" : ""} />
      {userPanel ? <TopBar /> : ""}
      <div className={`relative z-[999] font-vazir`}>{children}</div>
    </div>
  );
};

export default Container;
