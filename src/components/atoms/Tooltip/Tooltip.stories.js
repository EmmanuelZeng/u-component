import React from "react";
import Tooltip from "./Tooltip";
import Button from "../Button/Button";

export default {
  title: "COMPONENTS/atoms/Tooltip",
  component: Tooltip,
  argTypes: {
    intent: { control: { type: "select" }, options: ["default", "primary", "danger"] },
    position: {
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
    },
  },
};

const Template = (args) => (
  <div className="flex items-center justify-center p-16">
    <Tooltip {...args}>
      <Button variant="outline">Survoler ici</Button>
    </Tooltip>
  </div>
);

export const Default = Template.bind({});
Default.args = { content: "Info-bulle par défaut", position: "top" };

export const Primary = Template.bind({});
Primary.args = { content: "Action principale", intent: "primary", position: "bottom" };

export const Danger = Template.bind({});
Danger.args = { content: "Action destructive", intent: "danger", position: "right" };

export const AllPositions = () => (
  <div className="grid grid-cols-2 gap-16 p-16 place-items-center">
    {["top", "bottom", "left", "right"].map((position) => (
      <Tooltip key={position} content={`Position ${position}`} position={position}>
        <Button variant="ghost" size="sm">
          {position}
        </Button>
      </Tooltip>
    ))}
  </div>
);
