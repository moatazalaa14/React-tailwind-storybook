import React from "react";
import Img from "./postimage.jpg"
export const UserInfo = (props) => {
  const { username = "Black T-shirt" ,time=222} = props;
  const t =new Date(Date.now()-time)
  const h= t.getHours()
  return (
    <div className=" flex items-center">
        <div className="h-10 w-10 rounded-full mr-4">
            <img src={Img} alt="" className="rounded-full"/>
        </div> 
        <div>
            <p className="font-bold text-sm">{username}</p>
            <p className="text-sm text-dark-grey">
                {
                   h.toString() + " Hours"
                }
            </p>
        </div>
    </div>
  );
};
