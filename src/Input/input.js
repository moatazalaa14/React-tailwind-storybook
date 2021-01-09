import React, { useState } from "react";
export const Input = (props) => {
  const [typing, setTyping] = useState("");
  const {
    variant,
    value,
    type,
    label,
    placeholder,
    backgroundColor,
    color,
    borderColor,
    borderKind,
    borderSize = 4,
    width = 100,
    height,
    handleClick,
    icon,
  } = props;
  console.log(borderColor);
  const handlingFoucs = () => {
    setTyping("");
  };
  return (
    <>
      <label>{label}</label>
      <br />
      <div
        className={`relative flex ${borderColor} border-2 rounded-md w-64 pl-2 h-10`}
      >
        {icon==="left"?<div className="w-4 h-fyll flex items-center relative">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.999801 7.66669H1.66647V9.00002V12.3334C1.66647 13.0687 2.26447 13.6667 2.9998 13.6667H4.9998H8.9998H10.9998C11.7351 13.6667 12.3331 13.0687 12.3331 12.3334V9.00002V7.66669H12.9998C13.2691 7.66669 13.5131 7.50402 13.6158 7.25536C13.7191 7.00602 13.6618 6.71936 13.4711 6.52869L7.47113 0.528691C7.21047 0.268024 6.78913 0.268024 6.52847 0.528691L0.528467 6.52869C0.337801 6.71936 0.280467 7.00602 0.383801 7.25536C0.486467 7.50402 0.730467 7.66669 0.999801 7.66669ZM5.66647 12.3334V9.00002H8.33313V12.3334H5.66647ZM6.9998 1.94269L10.9998 5.94269V9.00002L11.0005 12.3334H9.66647V9.00002C9.66647 8.26469 9.06847 7.66669 8.33313 7.66669H5.66647C4.93113 7.66669 4.33313 8.26469 4.33313 9.00002V12.3334H2.9998V9.00002V7.00002V5.94269L6.9998 1.94269Z" fill="#8D9A9E"/>
</svg>

        </div>:null}
        <input
          type={type}
          className="absolute border-4 w-full outline-none z-40"
          onChange={(e) => setTyping(e.target.value)}
          style={{
            color: `${color}`,
            width: `${width}px`,
            height: `${height}px`,
            outline: "2px solid transparent",
            outlineOffset: "2px",
            zIndex: "1",
          }}
          className={variant}
          type={type}
          value={type === "button" ? "logIn" : typing}
          placeholder={placeholder}
          onClick={handleClick}
        />
        <div className="absolute flex items-center justify-end pr-6 h-full w-full z-0">
          {borderColor === "border-success-shd1" ? (
            <button className="mr-2">
              <svg
                width="11"
                height="9"
                viewBox="0 0 11 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.66681 6.39061L1.47148 4.19527L0.528809 5.13794L3.66681 8.27594L10.1381 1.8046L9.19547 0.861938L3.66681 6.39061Z"
                  fill="#07B255"
                />
              </svg>
            </button>
          ) : borderColor === "border-error-shd1" ? (
            <button className="mr-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.96883 0.333374C3.31016 0.333374 0.333496 3.32404 0.333496 7.00004C0.333496 10.676 3.32416 13.6667 7.00016 13.6667C10.6762 13.6667 13.6668 10.676 13.6668 7.00004C13.6668 3.32404 10.6622 0.333374 6.96883 0.333374ZM7.00016 12.3334C4.0595 12.3334 1.66683 9.94071 1.66683 7.00004C1.66683 4.05937 4.04483 1.66671 6.96883 1.66671C9.9275 1.66671 12.3335 4.05937 12.3335 7.00004C12.3335 9.94071 9.94083 12.3334 7.00016 12.3334Z"
                  fill="#FE544A"
                />
                <path
                  d="M6.3335 3.66663H7.66683V8.33329H6.3335V3.66663ZM6.3335 8.99996H7.66683V10.3333H6.3335V8.99996Z"
                  fill="#FE544A"
                />
              </svg>
            </button>
          ) : typing ? (
            <div className="flex">
              <button className="mr-2" onClick={handlingFoucs}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.00016 0.333313C3.32416 0.333313 0.333496 3.32398 0.333496 6.99998C0.333496 10.676 3.32416 13.6666 7.00016 13.6666C10.6762 13.6666 13.6668 10.676 13.6668 6.99998C13.6668 3.32398 10.6762 0.333313 7.00016 0.333313ZM9.80483 8.86198L8.86216 9.80465L7.00016 7.94265L5.13816 9.80465L4.1955 8.86198L6.0575 6.99998L4.1955 5.13798L5.13816 4.19531L7.00016 6.05731L8.86216 4.19531L9.80483 5.13798L7.94283 6.99998L9.80483 8.86198Z"
                    fill="#8D9A9E"
                  />
                </svg>
              </button>
            </div>
          ) : null}
          {icon === "right" ? (
            <button>
              <svg
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.86198 0.195374L3.99998 3.05737L1.13798 0.195374L0.195312 1.13804L3.99998 4.94271L7.80465 1.13804L6.86198 0.195374Z"
                  fill="#94ACB5"
                />
              </svg>
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

// ,border:`${borderColor} ${borderKind} ${borderSize}px`
