import React from "react";
import ActivityFeed from "./ActivityFeed";

export default {
  title: "COMPONENTS/organisms/ActivityFeed",
  component: ActivityFeed,
};

const Template = (args) => <ActivityFeed {...args} />;

export const Default = Template.bind({});
Default.args = {};
