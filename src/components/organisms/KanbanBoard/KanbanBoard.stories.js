import React from "react";
import KanbanBoard from "./KanbanBoard";

export default {
  title: "COMPONENTS/organisms/KanbanBoard",
  component: KanbanBoard,
};

const Template = (args) => <KanbanBoard {...args} />;

export const Default = Template.bind({});
Default.args = {};
