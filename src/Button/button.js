import React from "react";

export const Button = (props) => {
  const {size, withIcon, borderOnly, iconOnly,textOnly} = props;
  console.log(borderOnly);
  return (
    <button
      className={`p-2 ${
        borderOnly&&!textOnly
          ? "border-primary-shd1 border-2 text-primary-shd1"
          : textOnly&&!borderOnly?"text-accent-shd1 focus:underline focus:outline-none":"bg-primary-shd1 text-white"
      }  flex items-center justify-center ${
        size === "large" && !iconOnly
          ? "w-46 h-14 text-xl"
          : size === "mediuem" && !iconOnly
          ? "w-32 h-10 text-base"
          : size === "small" && !iconOnly
          ? "w-28 h-8 text-xs"
          : iconOnly && size === "large"
          ? "w-14 h-14"
          : size === "mediuem" && iconOnly
          ? "w-10 h-10"
          : size === "small" && iconOnly
          ? "w-8 h-8"
          : null
      }  rounded-full  font-medium `}
    >
      {withIcon === "right" || iconOnly ? (
        <svg
          className={`${iconOnly ? null : "mr-2"}`}
          width={`${size === "large" ? 12 : 8}`}
          height={`${size === "large" ? 8 : 5}`}
          viewBox="0 0 8 5"
          fill={`${borderOnly&&!textOnly? "rgb(112, 72, 232)" :textOnly? "#00A8E8":"none"}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.86198 0.195343L3.99998 3.05734L1.13798 0.195343L0.195312 1.13801L3.99998 4.94268L7.80465 1.13801L6.86198 0.195343Z"
            fill={`${borderOnly? "rgb(112, 72, 232)" :textOnly? "#00A8E8":"white"}`}
          />
        </svg>
      ) : null}
      {iconOnly ? null : "Button Text"}
      {withIcon === "left" && !iconOnly ? (
        <svg
          width={`${iconOnly ? 15 : size === "large" ? 12 : 8}`}
          height={`${iconOnly ? 9 : size === "large" ? 8 : 5}`}
          className="ml-2"
          viewBox="0 0 12 8"
          fill={`${borderOnly ? "rgb(112, 72, 232)" : "none"}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.293 0.292999L5.99997 4.586L1.70697 0.292999L0.292969 1.707L5.99997 7.414L11.707 1.707L10.293 0.292999Z"
            fill={`${borderOnly ? "rgb(112, 72, 232)" :textOnly? "#00A8E8":"white"}`}
          />
        </svg>
      ) : null}
    </button>
  );
};
