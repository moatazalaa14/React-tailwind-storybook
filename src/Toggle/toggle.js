import React, { useState } from "react";

export const Toggle = (props) => {
  const { isTrue, size } = props;
  const [toggle, setToggle] = useState(isTrue);
  const handlingToggle = () => {
    console.log(toggle);
    setToggle(!toggle);
  };
  return (
    <div
      onClick={handlingToggle}
      className={`cursor-pointer ${
        size === "small" ? "w-7 h-4" : "w-10 h-6"
      } rounded-full flex  ${
        toggle || isTrue
          ? "bg-primary-shd7 justify-end pr-1 hover:bg-primary-shd6"
          : "bg-grey-shd4 pl-1 hover:bg-grey-shd3 "
      } pt-1 pb-1 focus:border-grey-shd5 focus:border-4`}
    >
      <div
        className={`${size === "small" ? "w-2 h-2" : "w-4 h-4"} ${
          toggle || isTrue ? "bg-primary" : "bg-white"
        } rounded-full`}
      ></div>
    </div>
  );
};
