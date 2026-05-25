import React from "react";
import CommandPalette from "./CommandPalette";

export default {
  title: "COMPONENTS/organisms/CommandPalette",
  component: CommandPalette,
};

const Template = (args) => <CommandPalette {...args} />;

export const Default = Template.bind({});
Default.args = {};
