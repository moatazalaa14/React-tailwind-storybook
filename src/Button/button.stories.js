import React from "react"
import {Button} from "./button"
import { withDesign } from 'storybook-addon-designs'


export default {
    title:"Atoms/Button",
    component:Button,
    decorators: [withDesign],
    argTypes: {
    borderOnly: { control: 'boolean' },
    iconOnly: {control:"boolean"},
    textOnly: {control:"boolean"},
    size: {
      control: {
        type: 'inline-radio',
        options: ['small', 'mediuem', 'large'],
      },
    },
    withIcon: {
        control: {
          type: 'inline-radio',
          options: ['right', 'left', 'none'],
        },
      }, 
  },
}


const Template = (args) => <Button {...args} />;


export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/y1c0A9oQFKX4SwKB9jGwdD/Pickly-(mostafa)?node-id=1189%3A733',
  },
}
Primary.args = {
  size:"large",
  withIcon:"none",
  borderOnly:false
};

export const PrimaryWithRightIcon = Template.bind({});
PrimaryWithRightIcon.args = {
  size:"large",
  withIcon:"right",
  borderOnly:false
};

export const PrimaryWithLeftIcon = Template.bind({});
PrimaryWithLeftIcon.args = {
  size:"large",
  withIcon:"left",
  borderOnly:false
};



export const Secondary = Template.bind({});
Secondary.args = {
  size:"large",
  withIcon:"none",
  borderOnly:true
};

export const SecondaryWithRightIcon = Template.bind({});
SecondaryWithRightIcon.args = {
  size:"large",
  withIcon:"right",
  borderOnly:true
};

export const SecondaryWithLeftIcon = Template.bind({});
SecondaryWithLeftIcon.args = {
  size:"large",
  withIcon:"left",
  borderOnly:true
};





// export const Secondary=()=><Input className="primary_lg" type="number" />
