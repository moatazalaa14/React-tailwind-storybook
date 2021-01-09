import React from "react";
import {Msg} from "./msg";

export default {
  title: "Molecules/Msg",
  component: Msg,
  argTypes: {
      isSuccess:{control:"boolean"},
    }
};

const Template = (args) => <Msg {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  
  
};
