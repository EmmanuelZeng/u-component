import React from "react";
import ChartsPanel from "./ChartsPanel";

export default {
  title: "COMPONENTS/organisms/ChartsPanel",
  component: ChartsPanel,
};

const Template = (args) => <ChartsPanel {...args} />;

export const Default = Template.bind({});
Default.args = {};
