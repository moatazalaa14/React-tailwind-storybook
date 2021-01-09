import React ,{useState} from "react";

export const Checkbox = (props) => {
  const { isTrue, size } = props;
  const [toggle,setToggle]=useState(isTrue)
  const handleToggle=()=>{
    setToggle(!toggle)
  }
  return (
    <div>
      <div onClick={handleToggle} className={`cursor-pointer ${size==="small"?"w-4 h-4":"w-6 h-6"} ${toggle||isTrue?"bg-primary hover:bg-primary-shd8":"border border-grey-shd1 hover:border-2 hover:border-grey-shd2"} rounded-sm flex justify-center items-center focus:border-2 focus:border-black`}>
        <svg
          width={size==="small"?7:9}
          height={size==="small"?5:7}
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.66632 6.39073L1.47099 4.19539L0.52832 5.13806L3.66632 8.27606L10.1377 1.80473L9.19499 0.862061L3.66632 6.39073Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};
