import React from "react";
import CheckoutForm from "./CheckoutForm";

export default {
  title: "COMPONENTS/organisms/CheckoutForm",
  component: CheckoutForm,
};

const Template = (args) => <CheckoutForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
