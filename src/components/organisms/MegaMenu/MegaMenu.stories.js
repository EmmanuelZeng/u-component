import React from "react";
import MegaMenu from "./MegaMenu";

export default {
  title: "COMPONENTS/organisms/MegaMenu",
  component: MegaMenu,
};

const Template = (args) => <MegaMenu {...args} />;

export const Default = Template.bind({});
Default.args = {};
