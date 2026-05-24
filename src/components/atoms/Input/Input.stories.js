import React from "react";
import Input from "./Input";

export default {
  title: "COMPONENTS/atoms/Input",
  component: Input,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "filled", "flushed", "outline"],
    },
    size: { control: { type: "select" }, options: ["xs", "sm", "md", "lg", "xl"] },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel"],
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = { placeholder: "Saisir du texte..." };

export const Filled = Template.bind({});
Filled.args = { variant: "filled", placeholder: "Variant filled" };

export const Flushed = Template.bind({});
Flushed.args = { variant: "flushed", placeholder: "Variant flushed" };

export const Outline = Template.bind({});
Outline.args = { variant: "outline", placeholder: "Variant outline" };

export const Error = Template.bind({});
Error.args = { placeholder: "Email invalide", error: true, defaultValue: "bad@" };

export const Disabled = Template.bind({});
Disabled.args = { placeholder: "Désactivé", disabled: true };

export const AllVariants = () => (
  <div className="flex flex-col gap-4 max-w-sm">
    {["default", "filled", "flushed", "outline"].map((variant) => (
      <Input key={variant} variant={variant} placeholder={`Variant ${variant}`} />
    ))}
  </div>
);
