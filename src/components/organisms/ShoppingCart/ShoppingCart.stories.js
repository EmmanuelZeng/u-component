import React from "react";
import ShoppingCart from "./ShoppingCart";

export default {
  title: "COMPONENTS/organisms/ShoppingCart",
  component: ShoppingCart,
};

const Template = (args) => <ShoppingCart {...args} />;

export const Default = Template.bind({});
Default.args = {};
