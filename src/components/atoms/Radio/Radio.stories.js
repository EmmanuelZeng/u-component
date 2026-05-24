import React, { useState } from "react";
import Radio from "./Radio";

export default {
  title: "COMPONENTS/atoms/Radio",
  component: Radio,
  argTypes: {
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
  },
};

const Template = (args) => {
  const [selected, setSelected] = useState("a");
  return (
    <div className="flex flex-col gap-3">
      <Radio
        {...args}
        name="demo"
        value="a"
        label="Option A"
        checked={selected === "a"}
        onChange={() => setSelected("a")}
      />
      <Radio
        name="demo"
        value="b"
        label="Option B"
        checked={selected === "b"}
        onChange={() => setSelected("b")}
        size={args.size}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = { size: "md" };

export const Error = () => (
  <Radio name="err" value="x" label="Option avec erreur" error />
);

export const Disabled = () => (
  <Radio name="dis" value="x" label="Option désactivée" disabled />
);
