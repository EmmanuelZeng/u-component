import React from "react";
import FileUploadField from "./FileUploadField";

export default {
  title: "COMPONENTS/molecules/FileUploadField",
  component: FileUploadField,
};

const Template = (args) => <FileUploadField {...args} />;

export const Default = Template.bind({});
Default.args = {};
