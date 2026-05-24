import React, { useState } from "react";
import Slider from "./Slider";

export default {
  title: "COMPONENTS/atoms/Slider",
  component: Slider,
  argTypes: {
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
    intent: { control: { type: "select" }, options: ["default", "success", "danger"] },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value ?? 50);
  return (
    <div className="w-64">
      <Slider {...args} value={value} onChange={setValue} aria-label="Volume" />
      <p className="mt-2 text-sm text-gray3">Valeur : {value}</p>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = { value: 50 };

export const Success = Template.bind({});
Success.args = { value: 75, intent: "success" };

export const Error = Template.bind({});
Error.args = { value: 20, error: true };

export const Disabled = Template.bind({});
Disabled.args = { value: 40, disabled: true };
