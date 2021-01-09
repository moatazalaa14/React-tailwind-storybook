import React from "react"
import {Tab} from "./tab"
import { withDesign } from 'storybook-addon-designs'


export default{
    title:"Molecules/Tab",
    component:Tab,
    decorators: [withDesign],
    argTypes: {
    icon: {
        control: {
          type: 'inline-radio',
          options: ['image',`text`,'more'],
        },
      },
      isTrue:{control:"boolean"},
    }
}

const Template = (args) => <Tab {...args} />;

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

