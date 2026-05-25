import React from "react";
import ProductMiniCard from "./ProductMiniCard";

export default {
  title: "COMPONENTS/molecules/ProductMiniCard",
  component: ProductMiniCard,
};

const Template = (args) => <ProductMiniCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
