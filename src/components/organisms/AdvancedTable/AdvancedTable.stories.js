import React from "react";
import AdvancedTable from "./AdvancedTable";

export default {
  title: "COMPONENTS/organisms/AdvancedTable",
  component: AdvancedTable,
};

const Template = (args) => <AdvancedTable {...args} />;

export const Default = Template.bind({});
Default.args = {};
