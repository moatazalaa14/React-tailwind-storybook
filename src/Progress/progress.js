import React from "react"


export const Progress=(props)=>{
    const {width}=props;
    return(
        <div className={`w-${width} h-1 ${width==56?"bg-success-shd1":"bg-primary-shd1"} rounded-sm`}>

        </div>
    )
}