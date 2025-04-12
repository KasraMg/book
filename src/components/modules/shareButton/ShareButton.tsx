"use client";
import { CiShare2 } from "react-icons/ci";

const ShareButton = () => {
  return (
    <div
      onClick={() => {
        if (navigator.share) {
          navigator.share({
            title: `khavier kermnet`,
            url: window.location.href,
          });
        } else {
          navigator.clipboard.writeText(window.location.href);
        }
      }}
      className="mb-3 flex cursor-pointer items-center gap-2 font-light"
    >
      <CiShare2 />
      <p className="pt-1">Share</p>
    </div>
  );
};

export default ShareButton;
