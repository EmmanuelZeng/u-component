import React from "react";
import MobileNavigation from "./MobileNavigation";

export default {
  title: "COMPONENTS/organisms/MobileNavigation",
  component: MobileNavigation,
};

const Template = (args) => <MobileNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {};
