import React from "react";
import Separator from "./Separator";

export default {
  title: "COMPONENTS/atoms/Separator",
  component: Separator,
  argTypes: {
    orientation: { control: { type: "select" }, options: ["horizontal", "vertical"] },
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
    intent: { control: { type: "select" }, options: ["default", "muted", "primary"] },
  },
};

export const Horizontal = () => (
  <div className="w-64">
    <p className="text-sm text-dark">Section A</p>
    <Separator className="my-3" />
    <p className="text-sm text-dark">Section B</p>
  </div>
);

export const Vertical = () => (
  <div className="flex items-center h-10 gap-4">
    <span className="text-sm">Accueil</span>
    <Separator orientation="vertical" />
    <span className="text-sm">Profil</span>
    <Separator orientation="vertical" />
    <span className="text-sm">Paramètres</span>
  </div>
);

export const AllIntents = () => (
  <div className="w-64 space-y-4">
    {["default", "muted", "primary"].map((intent) => (
      <Separator key={intent} intent={intent} size="md" />
    ))}
  </div>
);
