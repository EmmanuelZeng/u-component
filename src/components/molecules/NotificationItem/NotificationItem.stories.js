import React from "react";
import NotificationItem from "./NotificationItem";

export default {
  title: "COMPONENTS/molecules/NotificationItem",
  component: NotificationItem,
};

const Template = (args) => <NotificationItem {...args} />;

export const Default = Template.bind({});
Default.args = {};
