import React from "react";
import EmptyState from "./EmptyState";

export default {
  title: "COMPONENTS/molecules/EmptyState",
  component: EmptyState,
};

const Template = (args) => <EmptyState {...args} />;

export const Default = Template.bind({});
Default.args = {};
