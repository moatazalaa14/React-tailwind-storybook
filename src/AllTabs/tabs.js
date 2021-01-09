import React, { useState } from "react";
import {Tab} from "../TabGroup/tab"
export const Tabs = (props) => {
  const { caption, icon } = props;
  const [isImage, setIsImage] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isMore, setIsMore] = useState(false);

  const handlingImagePost=()=>{
      setIsImage(!isImage)
      setIsText(false)
      setIsMore(false)
  }
  const handlingTextPost=()=>{
    setIsText(!isText)
    setIsImage(false)
    setIsMore(false)
}
const handlingMorePost=()=>{
    setIsMore(!isMore)
    setIsText(false)
    setIsImage(false)
}
console.log(isImage,isText,isMore)
  return (
    <div className="flex">
        <div onClick={handlingImagePost} >
            <Tab icon="image" caption="Image Poll" className="mr-2 ml-2" isTrue={isImage?true:false}/>
        </div>
        <div onClick={handlingTextPost}>
            <Tab icon="text" caption="Text Poll" className="mr-2 ml-2"  isTrue={isText?true:false}/>
        </div>
        <div onClick={handlingMorePost}>
        <Tab icon="more" caption="Image Or Text" className="mr-2 ml-2"  isTrue={isMore?true:false}/>
        </div>
    </div>
  );
};
