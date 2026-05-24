import React from "react";
import Icon from "./Icon";

const HeartIcon = () => (
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
  />
);

export default {
  title: "COMPONENTS/atoms/Icon",
  component: Icon,
  argTypes: {
    size: { control: { type: "select" }, options: ["xs", "sm", "md", "lg", "xl"] },
    intent: {
      control: { type: "select" },
      options: ["default", "primary", "muted", "danger", "success", "white"],
    },
  },
};

const Template = (args) => (
  <Icon as="svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...args}>
    <HeartIcon />
  </Icon>
);

export const Default = Template.bind({});
Default.args = { size: "md", intent: "default" };

export const Primary = Template.bind({});
Primary.args = { size: "lg", intent: "primary" };

export const WithLabel = Template.bind({});
WithLabel.args = { size: "md", intent: "danger", label: "Favori" };

export const AllSizes = () => (
  <div className="flex items-center gap-4">
    {["xs", "sm", "md", "lg", "xl"].map((size) => (
      <Icon
        key={size}
        as="svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        size={size}
        intent="primary"
      >
        <HeartIcon />
      </Icon>
    ))}
  </div>
);

export const AllIntents = () => (
  <div className="flex items-center gap-4">
    {["default", "primary", "muted", "danger", "success"].map((intent) => (
      <Icon
        key={intent}
        as="svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        size="md"
        intent={intent}
      >
        <HeartIcon />
      </Icon>
    ))}
  </div>
);
