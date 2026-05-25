import React from "react";
import ChatWindow from "./ChatWindow";

export default {
  title: "COMPONENTS/organisms/ChatWindow",
  component: ChatWindow,
};

const Template = (args) => <ChatWindow {...args} />;

export const Default = Template.bind({});
Default.args = {};
