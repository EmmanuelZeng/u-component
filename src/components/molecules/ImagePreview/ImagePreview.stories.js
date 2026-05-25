import React from "react";
import ImagePreview from "./ImagePreview";

export default {
  title: "COMPONENTS/molecules/ImagePreview",
  component: ImagePreview,
};

const Template = (args) => <ImagePreview {...args} />;

export const Default = Template.bind({});
Default.args = {};
