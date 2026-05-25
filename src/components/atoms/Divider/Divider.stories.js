import React from "react";
import Divider from "./Divider";

export default {
  title: "COMPONENTS/atoms/Divider",
  component: Divider,
  argTypes: {
    orientation: { control: { type: "select" }, options: ["horizontal", "vertical"] },
    intent: { control: { type: "select" }, options: ["default", "muted", "primary"] },
    thickness: { control: { type: "select" }, options: ["thin", "medium", "thick"] },
  },
};

export const Simple = () => (
  <div className="w-64">
    <Divider />
  </div>
);

export const WithLabel = () => (
  <div className="w-64">
    <Divider label="OU" />
  </div>
);

export const Vertical = () => (
  <div className="flex items-center h-12 gap-4">
    <span className="text-sm">Gauche</span>
    <Divider orientation="vertical" thickness="medium" />
    <span className="text-sm">Droite</span>
  </div>
);

export const AllIntents = () => (
  <div className="w-64 space-y-6">
    {["default", "muted", "primary"].map((intent) => (
      <Divider key={intent} label={intent} intent={intent} />
    ))}
  </div>
);

export const InForm = () => (
  <div className="w-72 space-y-4">
    <p className="text-sm">Connexion par email</p>
    <Divider label="ou continuer avec" />
    <p className="text-sm text-center text-gray3">Google · GitHub</p>
  </div>
);
