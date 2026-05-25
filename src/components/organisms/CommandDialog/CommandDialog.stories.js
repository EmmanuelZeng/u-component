import React from "react";
import CommandDialog from "./CommandDialog";

export default {
  title: "COMPONENTS/organisms/CommandDialog",
  component: CommandDialog,
};

const Template = (args) => <CommandDialog {...args} />;

export const Default = Template.bind({});
Default.args = {};
