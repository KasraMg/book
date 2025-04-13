import React from "react";
import Navbar from "../navbar/Navbar";
import TopBar from "@/components/templates/userPanel/TopBar";

const Container = ({
  children,
  userPanelTitle,
}: {
  children: React.ReactNode;
  userPanelTitle?: string;
}) => {
  return (
    <div className="w-full rounded-b-lg sm:bg-white sm:shadow-[-1px_-1px_9px_-5px_rgba(0,0,0,0.75)] dark:sm:bg-black md:mt-3 md:rounded-t-lg">
      <Navbar className={userPanelTitle ? "hidden sm:flex" : ""} />
      {userPanelTitle ? <TopBar userPanelTitle={userPanelTitle} /> : ""}
      <div className={`relative z-[999] font-vazir`}>{children}</div>
    </div>
  );
};

export default Container;
