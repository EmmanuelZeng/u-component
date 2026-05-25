import React, { useState } from "react";
import Option from "./Option";

export default {
  title: "COMPONENTS/atoms/Option",
  component: Option,
};

const options = [
  { value: "fr", label: "France" },
  { value: "be", label: "Belgique" },
  { value: "ch", label: "Suisse" },
  { value: "ca", label: "Canada", disabled: true },
];

export const Default = () => {
  const [selected, setSelected] = useState("fr");
  return (
    <ul role="listbox" className="w-48 border border-gray2 rounded-lg overflow-hidden bg-white">
      {options.map((opt) => (
        <Option
          key={opt.value}
          value={opt.value}
          selected={selected === opt.value}
          disabled={opt.disabled}
          onSelect={setSelected}
        >
          {opt.label}
        </Option>
      ))}
    </ul>
  );
};

export const Selected = () => (
  <ul role="listbox" className="w-48 border border-gray2 rounded-lg overflow-hidden bg-white">
    <Option value="a" selected onSelect={() => {}}>
      Option sélectionnée
    </Option>
    <Option value="b" onSelect={() => {}}>
      Option normale
    </Option>
  </ul>
);

export const Disabled = () => (
  <ul role="listbox" className="w-48 border border-gray2 rounded-lg overflow-hidden bg-white">
    <Option value="a" disabled onSelect={() => {}}>
      Option désactivée
    </Option>
  </ul>
);
