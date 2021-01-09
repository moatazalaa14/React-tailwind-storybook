import React from "react";

export const Msg = (props) => {
  const { isSuccess } = props;
  return (
    <div className="grid grid-cols-1 justify-items-center items-center">
      {isSuccess ? (
        <svg
        className="mb-11"
          width="49"
          height="38"
          viewBox="0 0 49 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.3336 27.9533L5.35689 16.9767L0.643555 21.69L16.3336 37.38L48.6902 5.02333L43.9769 0.309998L16.3336 27.9533Z"
            fill="#07B255"
          />
        </svg>
      ) : (
        <svg
          className="mb-11"
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.8432 0.666664C15.5498 0.666664 0.666504 15.62 0.666504 34C0.666504 52.38 15.6198 67.3333 33.9998 67.3333C52.3798 67.3333 67.3332 52.38 67.3332 34C67.3332 15.62 52.3098 0.666664 33.8432 0.666664ZM33.9998 60.6667C19.2965 60.6667 7.33317 48.7033 7.33317 34C7.33317 19.2967 19.2232 7.33333 33.8432 7.33333C48.6365 7.33333 60.6665 19.2967 60.6665 34C60.6665 48.7033 48.7032 60.6667 33.9998 60.6667Z"
            fill="#FE544A"
          />
          <path
            d="M30.6665 17.3333H37.3332V40.6667H30.6665V17.3333ZM30.6665 44H37.3332V50.6667H30.6665V44Z"
            fill="#FE544A"
          />
        </svg>
      )}

      <div className="grid grid-cols-1 justify-items-center">
        <p className={`${isSuccess?"text-grey":"text-error"} font-bold`}>{isSuccess?"Congratulations!":"Image couldn’t be uploaded!"}</p>
        <span className={`${isSuccess?"text-grey":"text-error"}`}>{isSuccess?"sub text":"Max size is 2 MB"}</span>
      </div>
    </div>
  );
};
