import React from "react"
import {Voting} from "./voting"


export default{
    title:"Molecules/Voting",
    component:Voting ,
    argTypes: {
      width1: { 
          control: { type: 'range', min: 1, max: 100, step: 1 },
      },
      width2: { 
        control: { type: 'range', min: 1, max: 100, step: 1 },
    },
    width3: { 
      control: { type: 'range', min: 1, max: 100, step: 1 },
  },
  }
}
const Template = (args) => <Voting {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width1:1,
  width2:1,
  width3:1
};


