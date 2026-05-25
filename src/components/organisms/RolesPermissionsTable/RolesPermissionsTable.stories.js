import React from "react";
import RolesPermissionsTable from "./RolesPermissionsTable";

export default {
  title: "COMPONENTS/organisms/RolesPermissionsTable",
  component: RolesPermissionsTable,
};

const Template = (args) => <RolesPermissionsTable {...args} />;

export const Default = Template.bind({});
Default.args = {};
