import React from "react";
import StepIndicator from "./StepIndicator";

export default {
  title: "COMPONENTS/molecules/StepIndicator",
  component: StepIndicator,
};

const Template = (args) => <StepIndicator {...args} />;

const steps = [
  { label: "Préparation", description: "Collecte des informations" },
  { label: "Validation", description: "Vérification des données" },
  { label: "Confirmation", description: "Finalisation" },
];

export const Default = Template.bind({});
Default.args = {
  steps,
  activeIndex: 1,
};

export const Vertical = Template.bind({});
Vertical.args = {
  steps,
  activeIndex: 2,
  orientation: "vertical",
};
