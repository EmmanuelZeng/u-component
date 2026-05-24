import React from "react";
import Caption from "./Caption";

export default {
  title: "COMPONENTS/atoms/Caption",
  component: Caption,
  argTypes: {
    size: { control: { type: "select" }, options: ["xs", "sm", "md"] },
    intent: {
      control: { type: "select" },
      options: ["default", "muted", "danger", "success", "primary"],
    },
  },
};

const Template = (args) => <Caption {...args} />;

export const Default = Template.bind({});
Default.args = { children: "Dernière mise à jour : il y a 2 heures" };

export const Error = Template.bind({});
Error.args = { children: "Ce champ est obligatoire", intent: "danger" };

export const Success = Template.bind({});
Success.args = { children: "Enregistré avec succès", intent: "success" };
