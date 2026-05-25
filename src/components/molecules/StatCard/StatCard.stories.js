import React from "react";
import StatCard from "./StatCard";

export default {
  title: "COMPONENTS/molecules/StatCard",
  component: StatCard,
};

const Template = (args) => <StatCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
