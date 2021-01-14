import React from "react";
import {UserInfo} from "./userinfo";

export default {
  title: "Molecules/UserInfo",
  component: UserInfo,
   argTypes: {
        time:{control:"date"},
    }
};

const Template = (args) => <UserInfo {...args} />;


export const Primary = Template.bind({});

Primary.args = {
 
};