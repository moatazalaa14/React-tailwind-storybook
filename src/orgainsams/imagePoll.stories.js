import React from "react";
import {ImagePoll} from "./imagePoll";

export default {
  title: "Molecules/ImagePoll",
  component: ImagePoll,
  argTypes:{
      caption:{control:"text"}
  }
};

export const Default = (args) => <ImagePoll {...args} />;
