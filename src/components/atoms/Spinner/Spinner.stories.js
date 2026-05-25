import React from "react";
import Spinner from "./Spinner";

export default {
  title: "COMPONENTS/atoms/Spinner",
  component: Spinner,
  argTypes: {
    size: { control: { type: "select" }, options: ["xs", "sm", "md", "lg", "xl"] },
    intent: {
      control: { type: "select" },
      options: ["default", "primary", "white", "muted", "danger", "success"],
    },
  },
};

const Template = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = { size: "md" };

export const Primary = Template.bind({});
Primary.args = { size: "lg", intent: "primary" };

export const OnDarkBackground = () => (
  <div className="bg-primary p-6 rounded-lg inline-flex">
    <Spinner intent="white" size="lg" />
  </div>
);

export const AllSizes = () => (
  <div className="flex items-center gap-6">
    {["xs", "sm", "md", "lg", "xl"].map((size) => (
      <Spinner key={size} size={size} label={`Chargement ${size}`} />
    ))}
  </div>
);

export const AllIntents = () => (
  <div className="flex flex-wrap items-center gap-6">
    {["default", "primary", "muted", "danger", "success"].map((intent) => (
      <Spinner key={intent} intent={intent} size="md" />
    ))}
  </div>
);
