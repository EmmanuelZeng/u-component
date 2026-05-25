import React from "react";
import CurrencyInput from "./CurrencyInput";

export default {
  title: "COMPONENTS/molecules/CurrencyInput",
  component: CurrencyInput,
};

const Template = (args) => <CurrencyInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
