import React from 'react'
import {Toggle} from "../Toggle/toggle"
import {Tabs} from "../AllTabs/tabs" 
import {ImageUpload} from "../ImageUpload/imageupload"
import {Input} from "../Input/input" 
import {Button} from "../Button/button"
export const ImagePoll=()=> {
    return (
        <div>
            <div className="flex items-center">
                <div className="bg-primary w-10 h-10 rounded-full mr-4">

                </div>
                <Tabs />
            </div>
            <div>
                <Input placeholder="What do you want to ask about?" borderColor="border-grey-shd5"/>
            </div>
            <div className="mt-4 mb-4">
                <ImageUpload />
            </div>
            <hr className="border border-grey-shd6"/>
            <div className="flex justify-between">
                <div className="mt-4 flex items-center">
                    <Toggle />
                    <div className="ml-2 text-dark-grey">
                    Hide my identity 
                    </div>
                </div>
                <div className="mt-4">
                 <Button btnText="Post" size="small" />
                </div>
            </div>
        </div>
    )
}