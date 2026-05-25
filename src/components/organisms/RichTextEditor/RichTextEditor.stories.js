import React from "react";
import RichTextEditor from "./RichTextEditor";

export default {
  title: "COMPONENTS/organisms/RichTextEditor",
  component: RichTextEditor,
};

const Template = (args) => <RichTextEditor {...args} />;

export const Default = Template.bind({});
Default.args = {};
