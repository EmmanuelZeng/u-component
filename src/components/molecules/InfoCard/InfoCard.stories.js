import React from "react";
import InfoCard from "./InfoCard";

export default {
  title: "COMPONENTS/molecules/InfoCard",
  component: InfoCard,
};

const Template = (args) => <InfoCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
