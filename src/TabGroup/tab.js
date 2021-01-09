import React, { useState } from "react";
import { Radio } from "../RadioBox/radio";
export const Tab = (props) => {
  const { caption, icon ,isTrue } = props;
  const [isToggled, setIsToggled] = useState(false);
  const handlingToggling = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div
      // onClick={handlingToggling}
      className={`w-36 h-8 rounded-full flex ${
        isToggled||isTrue ? "border-grey border" : null
      } justify-center items-center cursor-pointer`}
    >
      <div>
        <Radio size="small" isTrue={isToggled ||isTrue ? true : false} />
      </div>
      <div className="mr-2 ml-2">
        {icon === "image" ? (
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.99951 5.33334C4.5518 5.33334 4.99951 4.88562 4.99951 4.33334C4.99951 3.78105 4.5518 3.33334 3.99951 3.33334C3.44723 3.33334 2.99951 3.78105 2.99951 4.33334C2.99951 4.88562 3.44723 5.33334 3.99951 5.33334Z"
              fill="#5B6366"
            />
            <path
              d="M5.99951 7.33333L4.99951 6L2.99951 8.66666H4.99951H6.99951H10.9995L7.99951 4.66666L5.99951 7.33333Z"
              fill="#5B6366"
            />
            <path
              d="M12.3325 0.666664H1.66585C0.93052 0.666664 0.33252 1.26466 0.33252 2V10C0.33252 10.7353 0.93052 11.3333 1.66585 11.3333H12.3325C13.0679 11.3333 13.6659 10.7353 13.6659 10V2C13.6659 1.26466 13.0679 0.666664 12.3325 0.666664ZM1.66585 10V2H12.3325L12.3339 10H1.66585Z"
              fill="#5B6366"
            />
          </svg>
        ) : icon === "text" ? (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.6665 5.33333H7.33317V6.66666H2.6665V5.33333ZM2.6665 2.66666H9.97984V4H2.6665V2.66666ZM2.6665 8H11.3332V9.33333H2.6665V8ZM0.666504 0.666664H1.99984V11.3333H0.666504V0.666664Z"
              fill="#5B6366"
            />
          </svg>
        ) : (
          <svg
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.2685 4.724C11.2358 4.65334 11.1952 4.586 11.1378 4.52867L7.13784 0.528669C7.0805 0.471336 7.01317 0.430669 6.9425 0.398002C6.9225 0.388669 6.90117 0.383336 6.87984 0.376002C6.82384 0.357336 6.7665 0.345336 6.70717 0.342003C6.69317 0.340669 6.6805 0.333336 6.6665 0.333336H1.99984C1.2645 0.333336 0.666504 0.931336 0.666504 1.66667V12.3333C0.666504 13.0687 1.2645 13.6667 1.99984 13.6667H9.99984C10.7352 13.6667 11.3332 13.0687 11.3332 12.3333V5C11.3332 4.986 11.3258 4.97334 11.3245 4.95867C11.3212 4.89934 11.3098 4.842 11.2905 4.786C11.2838 4.76467 11.2778 4.744 11.2685 4.724ZM9.05717 4.33334H7.33317V2.60934L9.05717 4.33334ZM1.99984 12.3333V1.66667H5.99984V5C5.99984 5.36867 6.29784 5.66667 6.6665 5.66667H9.99984L10.0012 12.3333H1.99984Z"
              fill="#5B6366"
            />
            <path
              d="M3.3335 7H8.66683V8.33334H3.3335V7ZM3.3335 9.66667H8.66683V11H3.3335V9.66667ZM3.3335 4.33334H4.66683V5.66667H3.3335V4.33334Z"
              fill="#5B6366"
            />
          </svg>
        )}
      </div>
      <p className="text-sm	font-medium text-dark-grey">{caption}</p>
    </div>
  );
};
