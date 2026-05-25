import React from "react";
import ProductDetailsSection from "./ProductDetailsSection";

export default {
  title: "COMPONENTS/organisms/ProductDetailsSection",
  component: ProductDetailsSection,
};

const Template = (args) => <ProductDetailsSection {...args} />;

export const Default = Template.bind({});
Default.args = {};
