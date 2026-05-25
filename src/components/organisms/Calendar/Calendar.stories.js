import React from "react";
import Calendar from "./Calendar";

export default {
  title: "COMPONENTS/organisms/Calendar",
  component: Calendar,
};

const Template = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {};
