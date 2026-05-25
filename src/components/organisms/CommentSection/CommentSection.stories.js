import React from "react";
import CommentSection from "./CommentSection";

export default {
  title: "COMPONENTS/organisms/CommentSection",
  component: CommentSection,
};

const Template = (args) => <CommentSection {...args} />;

export const Default = Template.bind({});
Default.args = {};
