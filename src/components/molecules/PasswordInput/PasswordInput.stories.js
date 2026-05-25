import React from "react";
import PasswordInput from "./PasswordInput";

export default {
  title: "COMPONENTS/molecules/PasswordInput",
  component: PasswordInput,
};

const Template = (args) => <PasswordInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
