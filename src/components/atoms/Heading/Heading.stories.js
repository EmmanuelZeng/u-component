import React from "react";
import Heading from "./Heading";

export default {
  title: "COMPONENTS/atoms/Heading",
  component: Heading,
  argTypes: {
    level: { control: { type: "select" }, options: [1, 2, 3, 4, 5, 6] },
    intent: {
      control: { type: "select" },
      options: ["default", "primary", "muted", "danger", "success"],
    },
    align: { control: { type: "select" }, options: ["left", "center", "right"] },
  },
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = { children: "Titre principal", level: 2 };

export const Primary = Template.bind({});
Primary.args = { children: "Titre primary", level: 1, intent: "primary" };

export const Muted = Template.bind({});
Muted.args = { children: "Titre atténué", level: 3, intent: "muted" };

export const AllLevels = () => (
  <div className="flex flex-col gap-3">
    {[1, 2, 3, 4, 5, 6].map((level) => (
      <Heading key={level} level={level}>
        Heading niveau {level}
      </Heading>
    ))}
  </div>
);
