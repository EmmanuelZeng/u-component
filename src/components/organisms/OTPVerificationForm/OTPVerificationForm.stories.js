import React from "react";
import OTPVerificationForm from "./OTPVerificationForm";

export default {
  title: "COMPONENTS/organisms/OTPVerificationForm",
  component: OTPVerificationForm,
};

const Template = (args) => <OTPVerificationForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
