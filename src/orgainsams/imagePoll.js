import React from 'react'
import {UserInfo} from "../userInfo/userinfo"
import {ImgVote} from "../ImgVote/imgvote"
export const ImagePoll=(props)=> {
    const {caption = "Yes or NO?"} =props
    return (
        <div style={{ height: "708px", width: "708px" }} className="shadow-heavy rounded-sm">
            <div className="mr-4 ml-4">
            <div className="flex justify-between items-center"  >
                <div className="ml-4 mt-4">
                    <UserInfo />
                </div>
                <div className="mr-5 cursor-pointer">
                <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill="#8D9A9E"/>
</svg>

                </div>
            </div>
                <hr className="border border-grey-shd6 mt-3"/>
                <div className="mt-4 ml-4 font-bold text-md mb-4">
                    <p>{caption}</p>
                </div>
                <div className="w-full h-full">
                    <ImgVote like={true} />
                </div>
                </div>
        </div>
    )
}