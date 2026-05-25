import React from "react";
import SettingsPanel from "./SettingsPanel";

export default {
  title: "COMPONENTS/organisms/SettingsPanel",
  component: SettingsPanel,
};

const Template = (args) => <SettingsPanel {...args} />;

export const Default = Template.bind({});
Default.args = {};
