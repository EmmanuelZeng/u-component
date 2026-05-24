import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

export default {
  title: "COMPONENTS/atoms/ProgressBar",
  component: ProgressBar,
  argTypes: {
    size: { control: { type: "select" }, options: ["xs", "sm", "md", "lg"] },
    intent: {
      control: { type: "select" },
      options: ["default", "primary", "success", "warning", "danger"],
    },
  },
};

const Template = (args) => (
  <div className="w-64">
    <ProgressBar {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = { value: 60, showLabel: true };

export const Success = Template.bind({});
Success.args = { value: 100, intent: "success", showLabel: true };

export const Warning = Template.bind({});
Warning.args = { value: 45, intent: "warning" };

export const Danger = Template.bind({});
Danger.args = { value: 15, intent: "danger" };

export const Indeterminate = Template.bind({});
Indeterminate.args = { indeterminate: true };

export const Animated = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="w-64">
      <ProgressBar value={value} showLabel intent="primary" />
    </div>
  );
};
