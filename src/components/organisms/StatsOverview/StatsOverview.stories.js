import React from "react";
import StatsOverview from "./StatsOverview";

export default {
  title: "COMPONENTS/organisms/StatsOverview",
  component: StatsOverview,
};

const Template = (args) => <StatsOverview {...args} />;

export const Default = Template.bind({});
Default.args = {};
