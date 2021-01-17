import React from "react";
import Img from "../userInfo/postimage.jpg";
import { Caption } from "../imageCaption/caption.js";
import {Progress} from "../Progress/progress.js"
export const ImgVote = (props) => {
  const { active, like ,progress,width=0 ,progressStatus } = props;

  return (
    <div className="relative " style={{ height: "550px", width: "676px" }}>
      <div className="absolute w-full h-full">
        <img src={Img} alt="" className="rounded-md h-full w-full" />
      </div>
      <div className="absolute flex justify-between	w-full items-end h-full cursor-pointer">
        <div className="ml-4 mb-4 ">
          <Caption />
        </div>
        {like ? (
          <div className="flex">
            <div className="h-10 w-10 bg-error flex justify-center items-center rounded-full mr-4 mb-4">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 0H15H4.693C3.864 0 3.112 0.521 2.82 1.298L0.063 8.649C0.021 8.761 0 8.88 0 9V11C0 12.103 0.897 13 2 13H7.612L6.49 16.367C6.287 16.975 6.389 17.649 6.764 18.169C7.14 18.689 7.746 19 8.388 19H10C10.297 19 10.578 18.868 10.769 18.64L15.469 13H18C19.103 13 20 12.103 20 11V2C20 0.897 19.103 0 18 0ZM9.531 17H8.386L9.948 12.316C10.051 12.011 9.999 11.676 9.811 11.415C9.623 11.154 9.321 11 9 11H2V9.181L4.693 2H14V11.638L9.531 17ZM16 11V2H18L18.001 11H16Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="h-10 w-10 bg-primary flex justify-center items-center rounded-full mr-4 mb-4">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6H12.388L13.511 2.633C13.713 2.025 13.611 1.351 13.236 0.831C12.861 0.311 12.253 0 11.612 0H10C9.703 0 9.422 0.132 9.231 0.36L4.531 6H2C0.897 6 0 6.897 0 8V17C0 18.103 0.897 19 2 19H5H15.307C16.136 19 16.888 18.479 17.18 17.702L19.937 10.351C19.979 10.239 20 10.12 20 10V8C20 6.897 19.103 6 18 6ZM2 8H4V17H2V8ZM18 9.819L15.307 17H6V7.362L10.468 2H11.614L10.052 6.683C9.949 6.988 10.001 7.323 10.189 7.584C10.377 7.846 10.679 8 11 8H18V9.819Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        ) :progress?  
        <div className="rounded-full w-24 flex justify-center mr-4 mb-4">
          <div className="flex">
          <div className="bg-white font-bold h-8 w-24 z-0 w-4 rounded-md flex justify-center items-center">
            {
              "🌟"+ Math.round((width/56)*100) +"%"
            }
          </div>
          <div className=" flex justify-end w-4 bg-white rounded-full">
            <Progress width={width} status="vote" isVoting={true}/>
            </div>
          </div>
        </div>
        :(
          <div className="h-10 w-10 bg-primary flex justify-center items-center rounded-full mr-4 mb-4">
            {active ? (
              <svg
                width="20"
                height="19"
                viewBox="0 0 28 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.9399 2.38804C23.4239 0.880044 21.4319 0.0493774 19.3279 0.0493774C17.3506 0.0493774 15.4719 0.785377 13.9999 2.12671C12.5279 0.785377 10.6506 0.0493774 8.67189 0.0493774C6.56789 0.0493774 4.57589 0.880044 3.05456 2.39338C-0.0827738 5.54404 -0.0814406 10.472 3.05723 13.6094L13.9999 24.552L24.9426 13.6094C28.0812 10.472 28.0826 5.54404 24.9399 2.38804Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99998 1.59499C8.89598 0.588987 7.48798 0.0369873 6.00398 0.0369873C4.42598 0.0369873 2.93198 0.659987 1.79098 1.79499C-0.562019 4.15799 -0.561019 7.85399 1.79298 10.207L9.12498 17.539C9.29498 17.838 9.62298 18.031 9.99998 18.031C10.322 18.031 10.609 17.868 10.792 17.622L18.207 10.207C20.561 7.85299 20.561 4.15799 18.205 1.79099C17.068 0.659987 15.574 0.0369873 13.996 0.0369873C12.513 0.0369873 11.104 0.588987 9.99998 1.59499ZM16.791 3.20499C18.354 4.77599 18.355 7.22999 16.793 8.79299L9.99998 15.586L3.20698 8.79299C1.64498 7.22999 1.64598 4.77599 3.20498 3.20899C3.96498 2.45299 4.95898 2.03699 6.00398 2.03699C7.04898 2.03699 8.03898 2.45299 8.79298 3.20699L9.29298 3.70699C9.68398 4.09799 10.316 4.09799 10.707 3.70699L11.207 3.20699C12.719 1.69799 15.281 1.70199 16.791 3.20499Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
