import React from "react";
import ImageGallery from "./ImageGallery";

export default {
  title: "COMPONENTS/organisms/ImageGallery",
  component: ImageGallery,
};

const Template = (args) => <ImageGallery {...args} />;

export const Default = Template.bind({});
Default.args = {};
