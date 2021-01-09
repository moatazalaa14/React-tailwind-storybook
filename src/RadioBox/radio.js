import React ,{useState} from "react";

export const Radio = (props) => {
  const { isTrue, size } = props;
  const [toggle,setToggle]=useState(isTrue)
  const handleToggle=()=>{
    setToggle(!toggle)
  }
  return (
    
      <div onClick={handleToggle} className={`cursor-pointer ${size==="small"?"w-4 h-4":"w-6 h-6"} ${toggle||isTrue?"bg-primary hover:bg-primary-shd8":"border border-grey-shd1 hover:border-2 hover:border-grey-shd2"} rounded-full flex justify-center items-center focus:border-2 focus:border-black`}>
          <div className={`${size==="small"?"w-1.5 h-1.5":"w-3 h-3"} rounded-full bg-white`}></div>
      </div>
    
  );
};
