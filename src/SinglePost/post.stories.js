import React from "react";
import {SinglePost} from "./post";

export default {
  title: "Molecules/Single Post",
  component: SinglePost,
  argTypes: {
    postStatus: {
        control: {
          type: 'inline-radio',
          options: ['success',`error`,'uploading'],
        },
      },
    }
};

export const Default = (args) => <SinglePost {...args} />;
Default.args={
  
}
