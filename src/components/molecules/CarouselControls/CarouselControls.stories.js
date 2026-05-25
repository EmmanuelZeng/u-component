import React from "react";
import CarouselControls from "./CarouselControls";

export default {
  title: "COMPONENTS/molecules/CarouselControls",
  component: CarouselControls,
};

const Template = (args) => <CarouselControls {...args} />;

export const Default = Template.bind({});
Default.args = {};
