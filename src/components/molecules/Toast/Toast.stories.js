import React from "react";
import Toast from "./Toast";

export default {
  title: "COMPONENTS/molecules/Toast",
  component: Toast,
};

const Template = (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {};
