import React from "react";
import KeyValuePair from "./KeyValuePair";

export default {
  title: "COMPONENTS/molecules/KeyValuePair",
  component: KeyValuePair,
};

const Template = (args) => <KeyValuePair {...args} />;

export const Default = Template.bind({});
Default.args = {};
