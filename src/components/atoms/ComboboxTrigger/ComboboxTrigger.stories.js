import React, { useState } from "react";
import ComboboxTrigger from "./ComboboxTrigger";

export default {
  title: "COMPONENTS/atoms/ComboboxTrigger",
  component: ComboboxTrigger,
  argTypes: {
    variant: { control: { type: "select" }, options: ["default", "filled", "outline"] },
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
  },
};

const Template = (args) => {
  const [value, setValue] = useState("");
  return (
    <ComboboxTrigger
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = { placeholder: "Rechercher un pays..." };

export const Filled = Template.bind({});
Filled.args = { variant: "filled", placeholder: "Recherche filled" };

export const WithValue = Template.bind({});
WithValue.args = { value: "Paris", placeholder: "Ville" };

export const Error = Template.bind({});
Error.args = { error: true, placeholder: "Recherche invalide" };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true, value: "Verrouillé" };
