import React from "react";
import {TextPoll} from "./textpoll";

export default {
  title: "Molecules/TextPoll",
  component: TextPoll,
  argTypes:{
      optionTxt:{control:"text"},
      isWinner:{control:"boolean"},
      isChoose:{control:"boolean"}
  }
};

export const Default = (args) => <TextPoll {...args} />;
