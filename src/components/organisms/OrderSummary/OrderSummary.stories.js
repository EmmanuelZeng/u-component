import React from "react";
import OrderSummary from "./OrderSummary";

export default {
  title: "COMPONENTS/organisms/OrderSummary",
  component: OrderSummary,
};

const Template = (args) => <OrderSummary {...args} />;

export const Default = Template.bind({});
Default.args = {};
