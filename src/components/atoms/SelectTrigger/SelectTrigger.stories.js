import React, { useState } from "react";
import SelectTrigger from "./SelectTrigger";

export default {
  title: "COMPONENTS/atoms/SelectTrigger",
  component: SelectTrigger,
  argTypes: {
    variant: { control: { type: "select" }, options: ["default", "filled", "outline"] },
    size: { control: { type: "select" }, options: ["xs", "sm", "md", "lg"] },
  },
};

const Template = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <SelectTrigger
      {...args}
      open={open}
      onClick={() => setOpen(!open)}
    >
      France
    </SelectTrigger>
  );
};

export const Default = Template.bind({});
Default.args = { placeholder: "Choisir un pays" };

export const Filled = Template.bind({});
Filled.args = { variant: "filled", children: "Belgique" };

export const Error = Template.bind({});
Error.args = { error: true, placeholder: "Sélection requise" };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true, children: "Option verrouillée" };

export const AllVariants = () => (
  <div className="flex flex-col gap-3 max-w-xs">
    {["default", "filled", "outline"].map((variant) => (
      <SelectTrigger key={variant} variant={variant} placeholder={`Variant ${variant}`} />
    ))}
  </div>
);
