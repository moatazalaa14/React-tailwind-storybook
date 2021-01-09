import React from "react"
import {Tabs} from "./tabs"
import { withDesign } from 'storybook-addon-designs'


export default{
    title:"Molecules/Tabs",
    component:Tabs,
    decorators: [withDesign],
    argTypes: {
    icon: {
        control: {
          type: 'inline-radio',
          options: ['image',`text`,'more'],
        },
      },}
}

const Template = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  caption:"Image Poll",
  
};
Primary.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/y1c0A9oQFKX4SwKB9jGwdD/Pickly-(mostafa)?node-id=1080%3A968',
    },
  }

