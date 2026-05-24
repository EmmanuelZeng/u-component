import React from "react";
import IconButton from "./IconButton";

const ArrowIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export default {
  title: "COMPONENTS/atoms/IconButton",
  component: IconButton,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline", "ghost", "destructive"],
    },
    size: { control: { type: "select" }, options: ["xs", "sm", "md", "lg", "xl"] },
    rounded: { control: { type: "select" }, options: ["none", "sm", "md", "lg", "full"] },
  },
};

const Template = (args) => (
  <IconButton {...args} aria-label="Suivant">
    <ArrowIcon />
  </IconButton>
);

export const Ghost = Template.bind({});
Ghost.args = { variant: "ghost" };

export const Primary = Template.bind({});
Primary.args = { variant: "primary" };

export const Outline = Template.bind({});
Outline.args = { variant: "outline" };

export const Destructive = Template.bind({});
Destructive.args = { variant: "destructive" };

export const Loading = Template.bind({});
Loading.args = { variant: "primary", loading: true };

export const AllVariants = () => (
  <div className="flex flex-wrap gap-3">
    {["primary", "secondary", "outline", "ghost", "destructive"].map((variant) => (
      <IconButton key={variant} variant={variant} aria-label={variant}>
        <ArrowIcon />
      </IconButton>
    ))}
  </div>
);

export const AllSizes = () => (
  <div className="flex items-center gap-3">
    {["xs", "sm", "md", "lg", "xl"].map((size) => (
      <IconButton key={size} size={size} variant="primary" aria-label={size}>
        <ArrowIcon />
      </IconButton>
    ))}
  </div>
);
