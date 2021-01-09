import React from "react";
import {Radio} from "./radio";
import { withDesign } from 'storybook-addon-designs'


export default{
    title:"Atoms/RadioBtn",
    component:Radio,
    decorators: [withDesign],
    argTypes: {
      isTrue:{control:"boolean"},
      size: {
        control: {
          type: 'inline-radio',
          options: ['small','large'],
        },
      },
    }
}

const Template = (args) => <Radio {...args} />;


export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/y1c0A9oQFKX4SwKB9jGwdD/Pickly-(mostafa)?node-id=1103%3A3',
  },
}
Primary.args = {
  
};