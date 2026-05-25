import React from "react";
import ConfirmationPrompt from "./ConfirmationPrompt";

export default {
  title: "COMPONENTS/molecules/ConfirmationPrompt",
  component: ConfirmationPrompt,
};

const Template = (args) => <ConfirmationPrompt {...args} />;

export const Default = Template.bind({});
Default.args = {};
