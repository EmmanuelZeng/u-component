import React from "react";
import Blockquote from "./Blockquote";

export default {
  title: "COMPONENTS/atoms/Blockquote",
  component: Blockquote,
  argTypes: {
    intent: { control: { type: "select" }, options: ["default", "primary", "muted"] },
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
  },
};

const Template = (args) => <Blockquote {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "La simplicité est la sophistication suprême.",
  cite: "https://example.com",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Design is not just what it looks like. Design is how it works.",
  intent: "primary",
};

export const Muted = Template.bind({});
Muted.args = {
  children: "Citation avec fond atténué pour mettre en valeur un extrait.",
  intent: "muted",
};
