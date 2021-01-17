import React from 'react'

export const TextPoll=(props)=> {
    const {optionTxt ="Option One" ,isWinner,isChoose}=props
    return (
        <div className={`${isWinner?"bg-primary-shd1 text-white":"bg-grey-bg hover:bg-grey-shd6"} justify-between  h-10 rounded-md flex items-center cursor-pointer`}>
            <div className="flex items-center h-full">

            <div className="w-6 h-6 bg-white text-dark-grey ml-2 flex justify-center items-center mr-3">
                A
            </div>
            <div className="text-sm">
                {optionTxt}
            </div>
            {isChoose?<div className="ml-3">
            <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.66656 6.39048L1.47123 4.19515L0.528564 5.13782L3.66656 8.27582L10.1379 1.80448L9.19523 0.861816L3.66656 6.39048Z" fill={isWinner?"white":"#00171F"}/>
</svg>

            </div>:null}


            </div>
           { isWinner?<div className="mr-4 font-bold">
                75%
            </div>:null}
        </div>
    )
}