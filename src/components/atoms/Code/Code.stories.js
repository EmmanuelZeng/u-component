import React from "react";
import Code from "./Code";

export default {
  title: "COMPONENTS/atoms/Code",
  component: Code,
  argTypes: {
    variant: { control: { type: "select" }, options: ["inline", "block"] },
    size: { control: { type: "select" }, options: ["xs", "sm", "md"] },
  },
};

const Template = (args) => <Code {...args} />;

export const Inline = Template.bind({});
Inline.args = { children: "npm install @sbsdevit/def-components", variant: "inline" };

export const Block = Template.bind({});
Block.args = {
  children: `const App = () => {\n  return <Button variant="primary">Click</Button>;\n};`,
  variant: "block",
};

export const InlineInText = () => (
  <p className="text-dark">
    Utilisez la commande <Code>npm run start</Code> pour lancer le projet.
  </p>
);
