import React from "react";
import Badge from "./Badge";

export default {
  title: "COMPONENTS/atoms/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["success", "warning", "danger", "info", "neutral", "primary"],
    },
    size: { control: { type: "select" }, options: ["xs", "sm", "md", "lg"] },
    rounded: { control: { type: "select" }, options: ["none", "sm", "md", "lg", "full"] },
  },
};

const Template = (args) => <Badge {...args} />;

export const Neutral = Template.bind({});
Neutral.args = { children: "Neutral", variant: "neutral" };

export const Primary = Template.bind({});
Primary.args = { children: "Primary", variant: "primary" };

export const Success = Template.bind({});
Success.args = { children: "Success", variant: "success" };

export const Warning = Template.bind({});
Warning.args = { children: "Warning", variant: "warning" };

export const Danger = Template.bind({});
Danger.args = { children: "Danger", variant: "danger" };

export const Info = Template.bind({});
Info.args = { children: "Info", variant: "info" };

export const AllVariants = () => (
  <div className="flex flex-wrap gap-2">
    {["success", "warning", "danger", "info", "neutral", "primary"].map(
      (variant) => (
        <Badge key={variant} variant={variant}>
          {variant}
        </Badge>
      )
    )}
  </div>
);

export const AllSizes = () => (
  <div className="flex flex-wrap items-center gap-2">
    {["xs", "sm", "md", "lg"].map((size) => (
      <Badge key={size} size={size} variant="primary">
        {size}
      </Badge>
    ))}
  </div>
);

// Rétrocompatibilité
export const LegacyType = Template.bind({});
LegacyType.args = { children: "Legacy", type: "success" };
