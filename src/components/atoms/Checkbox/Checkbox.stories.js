import React, { useState } from "react";
import Checkbox from "./Checkbox";

export default {
  title: "COMPONENTS/atoms/Checkbox",
  component: Checkbox,
  argTypes: {
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
  },
};

const Template = (args) => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

export const Default = Template.bind({});
Default.args = { label: "J'accepte les conditions", name: "terms" };

export const Required = Template.bind({});
Required.args = {
  label: "Newsletter",
  name: "newsletter",
  required: true,
};

export const Error = Template.bind({});
Error.args = {
  label: "Option obligatoire",
  name: "required-opt",
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Option désactivée",
  name: "disabled",
  disabled: true,
  checked: true,
};

export const AllSizes = () => {
  const [checked, setChecked] = useState(true);
  return (
    <div className="flex flex-col gap-3">
      {["sm", "md", "lg"].map((size) => (
        <Checkbox
          key={size}
          name={`size-${size}`}
          label={`Taille ${size}`}
          size={size}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      ))}
    </div>
  );
};
