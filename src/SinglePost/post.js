import React from "react";
// import Img from "./postimage.jpg";
import Img from "./img2.jpg";
// import Img3 from "./img3";
// import Img4 from "./img4"
import {Progress} from "../Progress/progress"
import {Msg} from "../Misc/msg"
export const SinglePost = (props) => {

  const {postStatus} =props
  return (
    <div>
    <div
      className="relative rounded-t-lg"
      style={{
        width: "704px",
        height: "708px",
      }}
    >
      <div className="rounded-t-lg overflow-hidden">
      <div className="absolute z-40 flex justify-center items-center bg-primary-shd7 w-full h-full rounded-t-lg" style={{
          background: "rgba(237, 232, 252, 0.88)"
        }}>
          {postStatus==="uploading"?<div className="w-52 h-3 bg-white z-50 rounded-md">
            <div className="m-1">
              <Progress width="40"/>
            </div>
          </div>:postStatus==="success"?<div><Msg isSuccess={true}/></div>:postStatus==="error"?<div><Msg /></div>:null}
        </div>
        <img src={Img} className="w-full absolute rounded-t-lg h-full z-10" />
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
    </div>
    <div className="mt-1 border border-grey-shd5 rounded-b-lg h-10 relative" style={{
        width: "704px",
      }}>
        <svg className="absolute z-50 mt-2 ml-2 mr-3 mb-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#F2F9FF"/>
<path d="M14.085 14.4023H9.91504L8.97852 17H7.625L11.4258 7.04688H12.5742L16.3818 17H15.0352L14.085 14.4023ZM10.3115 13.3223H13.6953L12 8.66699L10.3115 13.3223Z" fill="#8D9A9E"/>
</svg>

      <input type="text" placeholder="Type caption (optional)" className="z-10 absolute rounded-b-lg w-full focus:outline-none pt-2 h-full pl-11 pb-3"/>
    </div>
    </div>
  );
};
