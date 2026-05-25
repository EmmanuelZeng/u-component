import React from "react";
import ArticleViewer from "./ArticleViewer";

export default {
  title: "COMPONENTS/organisms/ArticleViewer",
  component: ArticleViewer,
};

const Template = (args) => <ArticleViewer {...args} />;

export const Default = Template.bind({});
Default.args = {};
