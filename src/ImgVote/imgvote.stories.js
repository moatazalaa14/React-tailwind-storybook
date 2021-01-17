import React from "react";
import {ImgVote} from "./imgvote";

export default {
  title: "Molecules/ImgVote",
  component: ImgVote,
   argTypes: {
        active:{control:"boolean"},
        like:{control:"boolean"},
        progress:{control:"boolean"},
            width: { 
                control: { type: 'range', min: 0, max: 56, step: 4 },
            },
    }
};

const Template = (args) => <ImgVote {...args} />;


export const Primary = Template.bind({});

Primary.args = {
 width:0
};