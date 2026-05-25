import React, { useState } from "react";
import OTPInput from "./OTPInput";

export default {
  title: "COMPONENTS/atoms/OTPInput",
  component: OTPInput,
  argTypes: {
    length: { control: { type: "number", min: 4, max: 8 } },
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
  },
};

const Template = (args) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <OTPInput {...args} value={value} onChange={setValue} />
      <p className="mt-3 text-sm text-gray3">Code saisi : {value || "—"}</p>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = { length: 6, size: "md" };

export const FourDigits = Template.bind({});
FourDigits.args = { length: 4, size: "md" };

export const Error = Template.bind({});
Error.args = { length: 6, error: true, value: "123" };

export const Disabled = Template.bind({});
Disabled.args = { length: 6, disabled: true, value: "123456" };
