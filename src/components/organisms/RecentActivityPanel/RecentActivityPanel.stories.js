import React from "react";
import RecentActivityPanel from "./RecentActivityPanel";

export default {
  title: "COMPONENTS/organisms/RecentActivityPanel",
  component: RecentActivityPanel,
};

const Template = (args) => <RecentActivityPanel {...args} />;

export const Default = Template.bind({});
Default.args = {};
