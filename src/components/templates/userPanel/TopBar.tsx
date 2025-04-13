"use client";
import { usePathname } from "next/navigation";
import Menu from "./Menu";

const TopBar = () => {
  const path = usePathname();

  return (
    <div
      style={{ boxShadow: "0 2px 4px -1px rgba(57, 76, 96, .15)" }}
      className="flex items-center justify-between bg-white px-4 py-3 sm:hidden"
    >
      <Menu />
      <div className="w-full pr-9 text-center font-semibold">
        Your {path.slice(11)}
      </div>
    </div>
  );
};

export default TopBar;
