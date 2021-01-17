import React from "react";

export const Caption = (props) => {
  const { txtCaption = "Black T-shirt" } = props;
  return (
    <div className="h-8 flex items-center bg-white opacity-70	rounded-sm pt-1.5 pb-1.5 pr-3 pl-3">
      <div className="text-sm flex items-center">
        <span className="mr-2">A</span>
        <svg
          width="1"
          height="12"
          viewBox="0 0 1 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1" height="12" fill="#5B6366" />
        </svg>
      </div>
      <div className="ml-2 text-sm font-bold ">{txtCaption}</div>
    </div>
  );
};
