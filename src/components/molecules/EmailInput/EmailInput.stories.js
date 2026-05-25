import React from "react";
import EmailInput from "./EmailInput";

export default {
  title: "COMPONENTS/molecules/EmailInput",
  component: EmailInput,
};

const Template = (args) => <EmailInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
