import React, { useState } from "react";
import Switch from "./Switch";

export default {
  title: "COMPONENTS/atoms/Switch",
  component: Switch,
  argTypes: {
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
    intent: {
      control: { type: "select" },
      options: ["default", "primary", "success", "danger"],
    },
  },
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return (
    <Switch
      {...args}
      checked={checked}
      onChange={setChecked}
      aria-label="Activer les notifications"
    />
  );
};

export const Default = Template.bind({});
Default.args = { intent: "primary" };

export const Checked = Template.bind({});
Checked.args = { checked: true, intent: "primary" };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true, checked: true };

export const AllIntents = () => {
  const [states, setStates] = useState({ primary: true, success: false, danger: true });
  return (
    <div className="flex flex-col gap-4">
      {["primary", "success", "danger"].map((intent) => (
        <div key={intent} className="flex items-center gap-3">
          <Switch
            intent={intent}
            checked={states[intent]}
            onChange={(v) => setStates((s) => ({ ...s, [intent]: v }))}
            aria-label={intent}
          />
          <span className="text-sm capitalize">{intent}</span>
        </div>
      ))}
    </div>
  );
};

export const AllSizes = () => {
  const [checked, setChecked] = useState(true);
  return (
    <div className="flex items-center gap-6">
      {["sm", "md", "lg"].map((size) => (
        <Switch
          key={size}
          size={size}
          checked={checked}
          onChange={setChecked}
          aria-label={`Taille ${size}`}
        />
      ))}
    </div>
  );
};
