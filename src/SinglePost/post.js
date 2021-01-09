import React from "react";
import Img from "./postimage.jpg";
export const SinglePost = () => {
  return (
    <div
      className="relative rounded-t-lg"
      style={{
        width: "704px",
        height: "708px",
      }}
    >
      <div className="rounded-t-lg overflow-hidden">
        <img src={Img} className="w-full absolute rounded-t-lg h-full" />
      </div>
      <div className="absolute flex justify-end w-full">
        <div className="m-4 w-8 h-8 rounded-full bg-white flex justify-center items-center ">
          <svg
            width="4"
            height="12"
            viewBox="0 0 4 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.99984 4.66669C1.2665 4.66669 0.666504 5.26669 0.666504 6.00002C0.666504 6.73335 1.2665 7.33335 1.99984 7.33335C2.73317 7.33335 3.33317 6.73335 3.33317 6.00002C3.33317 5.26669 2.73317 4.66669 1.99984 4.66669ZM1.99984 0.666687C1.2665 0.666687 0.666504 1.26669 0.666504 2.00002C0.666504 2.73335 1.2665 3.33335 1.99984 3.33335C2.73317 3.33335 3.33317 2.73335 3.33317 2.00002C3.33317 1.26669 2.73317 0.666687 1.99984 0.666687ZM1.99984 8.66669C1.2665 8.66669 0.666504 9.26669 0.666504 10C0.666504 10.7334 1.2665 11.3334 1.99984 11.3334C2.73317 11.3334 3.33317 10.7334 3.33317 10C3.33317 9.26669 2.73317 8.66669 1.99984 8.66669Z"
              fill="#5B6366"
            />
          </svg>
        </div>
      </div>
      <input type="text" placeholder="Type caption (optional)" />
    </div>
  );
};
