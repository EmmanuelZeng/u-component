import React from "react";
import CRUDManagementPanel from "./CRUDManagementPanel";

export default {
  title: "COMPONENTS/organisms/CRUDManagementPanel",
  component: CRUDManagementPanel,
};

const Template = (args) => <CRUDManagementPanel {...args} />;

export const Default = Template.bind({});
Default.args = {};
