import React from "react";
import PhoneInput from "./PhoneInput";

export default {
  title: "COMPONENTS/molecules/PhoneInput",
  component: PhoneInput,
};

const Template = (args) => <PhoneInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
