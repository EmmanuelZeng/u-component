import React from "react";
import Button from "./Button";

export default {
  title: "COMPONENTS/atoms/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline", "ghost", "destructive", "gradient"],
    },
    size: { control: { type: "select" }, options: ["xs", "sm", "md", "lg", "xl"] },
    rounded: { control: { type: "select" }, options: ["none", "sm", "md", "lg", "full"] },
    elevation: { control: { type: "select" }, options: ["none", "sm", "md", "lg"] },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: "Primary", variant: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { children: "Secondary", variant: "secondary" };

export const Outline = Template.bind({});
Outline.args = { children: "Outline", variant: "outline" };

export const Ghost = Template.bind({});
Ghost.args = { children: "Ghost", variant: "ghost" };

export const Destructive = Template.bind({});
Destructive.args = { children: "Supprimer", variant: "destructive" };

export const Gradient = Template.bind({});
Gradient.args = { children: "Gradient", variant: "gradient", elevation: "md" };

export const Loading = Template.bind({});
Loading.args = { children: "Chargement", variant: "primary", loading: true };

export const FullWidth = Template.bind({});
FullWidth.args = { children: "Pleine largeur", variant: "primary", fullWidth: true };

export const AllSizes = () => (
  <div className="flex flex-wrap items-center gap-3">
    {["xs", "sm", "md", "lg", "xl"].map((size) => (
      <Button key={size} size={size} variant="primary">
        {size}
      </Button>
    ))}
  </div>
);

export const AllVariants = () => (
  <div className="flex flex-wrap gap-3">
    {["primary", "secondary", "outline", "ghost", "destructive", "gradient"].map(
      (variant) => (
        <Button key={variant} variant={variant}>
          {variant}
        </Button>
      )
    )}
  </div>
);

// Rétrocompatibilité
export const LegacyFilled = Template.bind({});
LegacyFilled.args = { children: "Legacy filled", variant: "filled", type: "primary" };
