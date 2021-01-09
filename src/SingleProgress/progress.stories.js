import React from "react"
import {SingleProgress} from "./progress"


export default{
    title:"Atoms/ProgressForPost",
    component:SingleProgress,
    argTypes: {
        width: { 
            control: { type: 'range', min: 0, max: 56, step: 4 },
        },
    }
}

const Template = (args) => <SingleProgress {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width:1
};

export const ProgressDone = Template.bind({});
ProgressDone.args = {
  width:56
};
