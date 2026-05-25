import React from "react";
import MessagingPanel from "./MessagingPanel";

export default {
  title: "COMPONENTS/organisms/MessagingPanel",
  component: MessagingPanel,
};

const Template = (args) => <MessagingPanel {...args} />;

export const Default = Template.bind({});
Default.args = {};
