import React from "react";

export const Progress = (props) => {
  const { width, isVoting, status } = props;
  return (
    <div
      className={`m-1 z-50 ${isVoting ? `h-${width} w-2` : `w-${width} h-2`}  
      ${
        status === "upload" && width == 56
          ? "bg-success-shd1"
          : status === "upload" && width < 56
          ? "bg-primary"
          : status === "vote" && width >= 28
          ? "bg-primary"
          : "bg-primary-shd5"
      }
      rounded-sm`}
    ></div>
  );
};
