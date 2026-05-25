import React from "react";
import Text from "./Text";

const sample =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.";

export default {
  title: "COMPONENTS/atoms/Text",
  component: Text,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
    },
    intent: {
      control: { type: "select" },
      options: ["default", "primary", "muted", "danger", "info", "success"],
    },
    weight: {
      control: { type: "select" },
      options: ["normal", "medium", "semibold", "bold"],
    },
    element: {
      control: { type: "select" },
      options: ["span", "p", "h1", "h2", "h3", "h4", "h5", "h6"],
    },
  },
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = { children: sample, intent: "default" };

export const Primary = Template.bind({});
Primary.args = { children: sample, intent: "primary" };

export const Muted = Template.bind({});
Muted.args = { children: sample, intent: "muted", size: "sm" };

export const Truncated = Template.bind({});
Truncated.args = {
  children: sample,
  truncate: true,
  className: "max-w-xs block",
};

export const AsHeading = Template.bind({});
AsHeading.args = { children: "Titre via Text", element: "h3", weight: "bold", size: "2xl" };

export const AllIntents = () => (
  <div className="flex flex-col gap-2">
    {["default", "primary", "muted", "danger", "info", "success"].map((intent) => (
      <Text key={intent} intent={intent}>
        Intent : {intent}
      </Text>
    ))}
  </div>
);
