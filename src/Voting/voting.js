import React from "react"


export const Voting=(props)=>{
    const {width1,width2,width3}=props;
    return(
        <div className="flex bg-black">
            <div className="mr-4">🌟 {width1}%</div>
            <div className="bg-primary w-2 h-64 rounded-full mr-64"></div>
            <div className="mr-4">🌟 {width1}%</div>
            <div className="bg-primary w-2 h-64 rounded-full mr-64"></div>
            <div className="mr-4">🌟 {width1}%</div>
            <div className="bg-primary w-2 h-64 rounded-full mr-64"></div>
        </div>
    )
}