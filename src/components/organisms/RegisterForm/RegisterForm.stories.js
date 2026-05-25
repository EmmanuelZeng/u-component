import React from "react";
import RegisterForm from "./RegisterForm";

export default {
  title: "COMPONENTS/organisms/RegisterForm",
  component: RegisterForm,
};

const Template = (args) => <RegisterForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
