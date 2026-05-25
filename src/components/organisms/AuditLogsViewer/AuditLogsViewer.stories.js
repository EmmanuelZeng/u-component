import React from "react";
import AuditLogsViewer from "./AuditLogsViewer";

export default {
  title: "COMPONENTS/organisms/AuditLogsViewer",
  component: AuditLogsViewer,
};

const Template = (args) => <AuditLogsViewer {...args} />;

export const Default = Template.bind({});
Default.args = {};
