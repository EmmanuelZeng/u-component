import React from "react";
import FileManager from "./FileManager";

export default {
  title: "COMPONENTS/organisms/FileManager",
  component: FileManager,
};

const Template = (args) => <FileManager {...args} />;

export const Default = Template.bind({});
Default.args = {};
