import React from "react";
import Menu from "./Menu";

const TopBar = ({ userPanelTitle }: { userPanelTitle: string }) => {
  return (
    <div
      style={{ boxShadow: "0 2px 4px -1px rgba(57, 76, 96, .15)" }}
      className="flex items-center justify-between bg-white px-4 py-5"
    >
      <div className="text-center font-semibold">{userPanelTitle}</div>
      <Menu />
    </div>
  );
};

export default TopBar;
