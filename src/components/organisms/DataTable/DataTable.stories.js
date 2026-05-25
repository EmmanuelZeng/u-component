import React from "react";
import DataTable from "./DataTable";

export default {
  title: "COMPONENTS/organisms/DataTable",
  component: DataTable,
};

const Template = (args) => <DataTable {...args} />;

export const Default = Template.bind({});
Default.args = {};
