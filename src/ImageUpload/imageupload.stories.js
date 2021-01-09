import React from "react";
import {ImageUpload} from "./imageupload";
import { withDesign } from 'storybook-addon-designs'

export default {
  title: "Molecules/ImageUpload",
  component: ImageUpload,
  decorators: [withDesign],
};

export const Default = () => <ImageUpload />;
Default.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/y1c0A9oQFKX4SwKB9jGwdD/Pickly-(mostafa)?node-id=1080%3A968',
    },
  }