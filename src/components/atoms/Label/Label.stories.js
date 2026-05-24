import React from "react";
import Label from "./Label";

export default {
  title: "COMPONENTS/atoms/Label",
  component: Label,
  argTypes: {
    size: { control: { type: "select" }, options: ["xs", "sm", "md", "lg"] },
    intent: {
      control: { type: "select" },
      options: ["default", "muted", "danger", "success"],
    },
  },
};

const Template = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = { children: "Nom complet", htmlFor: "name" };

export const Required = Template.bind({});
Required.args = { children: "Email", htmlFor: "email", required: true };

export const Disabled = Template.bind({});
Disabled.args = { children: "Champ désactivé", disabled: true };

export const Error = Template.bind({});
Error.args = { children: "Mot de passe", intent: "danger", required: true };
