import React from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";

export default {
  title: "COMPONENTS/organisms/ForgotPasswordForm",
  component: ForgotPasswordForm,
};

const Template = (args) => <ForgotPasswordForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
