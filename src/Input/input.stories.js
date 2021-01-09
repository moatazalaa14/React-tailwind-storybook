import React from "react"
import {Input} from "./input"


export default {
    title:"Atoms/Input",
    component:Input,
    argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    icon: { control: {
      type:"select",
      options:['none','right','left'],
    },},
    // borderColor: { control: 'color' },
    borderColor: { control: {
      type:"inline-radio",
      options:['border-grey-shd5','border-error-shd1','border-success-shd1','border-grey-shd7'],
    }
    
    },
    borderSize: { 
      control: { type: 'range', min: 1, max: 20, step: 2 },
    },
    borderKind: { control: 'text' },
    type: {
      control: {
        type: 'inline-radio',
        options: ['number', 'email', 'button' ,'text'],
      },
    },
    width: { 
      control: { type: 'range', min: 20, max: 400, step: 10 },
    },
    height: { 
      control: { type: 'range', min:20, max: 400, step: 10 },
    },
    handleClick:{action:"clicked"}
  },
}


const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary_small",
  backgroundColor:"",
  color:"white",
  label: 'Username',
  type:"text",
  placeholder:"Ex:Naruto",
  borderColor:"border-primary-shd1",
  borderKind:"solid",
  borderSize:"5px",
  notRead:"false",
  width:"300px",
  height:"300px",
  icon:"right"
  

};


export const Error = Template.bind({});
Error.args = {
  variant: "secondary_large",
  label: 'Email',
  type:"email",
  placeholder:"Ex:Ex@example.com",
  borderColor:"border-error-shd1"
  
};

export const Success = Template.bind({});
Success.args = {
  variant: "Third",
  label: '',
  type:"email",
  borderColor:"border-success-shd1",
  handleClick:()=>console.log("clicked")
  
};

// export const Secondary=()=><Input className="primary_lg" type="number" />
