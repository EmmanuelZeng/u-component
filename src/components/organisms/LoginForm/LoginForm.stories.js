import React from "react";
import LoginForm from "./LoginForm";

export default {
  title: "COMPONENTS/organisms/LoginForm",
  component: LoginForm,
};

const Template = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
