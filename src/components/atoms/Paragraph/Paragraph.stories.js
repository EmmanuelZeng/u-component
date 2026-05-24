import React from "react";
import Paragraph from "./Paragraph";

export default {
  title: "COMPONENTS/atoms/Paragraph",
  component: Paragraph,
  argTypes: {
    size: { control: { type: "select" }, options: ["xs", "sm", "md", "lg", "xl"] },
    intent: {
      control: { type: "select" },
      options: ["default", "muted", "primary", "danger"],
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right", "justify"],
    },
  },
};

const Template = (args) => <Paragraph {...args} />;

const sample =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export const Default = Template.bind({});
Default.args = { children: sample };

export const Muted = Template.bind({});
Muted.args = { children: sample, intent: "muted", size: "sm" };

export const Large = Template.bind({});
Large.args = { children: sample, size: "lg", weight: "medium" };
