import React from "react";
import ProductCardGrid from "./ProductCardGrid";

export default {
  title: "COMPONENTS/organisms/ProductCardGrid",
  component: ProductCardGrid,
};

const Template = (args) => <ProductCardGrid {...args} />;

export const Default = Template.bind({});
Default.args = {};
