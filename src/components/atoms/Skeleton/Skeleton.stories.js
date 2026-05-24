import React from "react";
import Skeleton from "./Skeleton";

export default {
  title: "COMPONENTS/atoms/Skeleton",
  component: Skeleton,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["text", "circular", "rectangular", "rounded"],
    },
    size: { control: { type: "select" }, options: ["xs", "sm", "md", "lg"] },
  },
};

const Template = (args) => <Skeleton {...args} />;

export const Text = Template.bind({});
Text.args = { variant: "text", width: "200px" };

export const Circular = Template.bind({});
Circular.args = { variant: "circular", size: "md" };

export const Rounded = Template.bind({});
Rounded.args = { variant: "rounded", width: "100%", height: "120px" };

export const CardPlaceholder = () => (
  <div className="flex gap-4 p-4 border border-gray1 rounded-lg max-w-sm">
    <Skeleton variant="circular" size="lg" />
    <div className="flex-1 space-y-2">
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="rounded" width="100%" height="60px" />
    </div>
  </div>
);

export const ListPlaceholder = () => (
  <div className="space-y-3 max-w-sm">
    {[1, 2, 3].map((i) => (
      <Skeleton key={i} variant="text" width={`${100 - i * 10}%`} />
    ))}
  </div>
);
