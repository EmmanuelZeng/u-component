import React from "react";
import FloatingActionButton from "./FloatingActionButton";

const PlusIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

export default {
  title: "COMPONENTS/atoms/FloatingActionButton",
  component: FloatingActionButton,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "destructive", "gradient"],
    },
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
    position: { control: { type: "select" }, options: ["static", "fixed"] },
  },
};

const Template = (args) => (
  <FloatingActionButton {...args}>
    <PlusIcon />
  </FloatingActionButton>
);

export const Primary = Template.bind({});
Primary.args = { variant: "primary", "aria-label": "Ajouter" };

export const Extended = Template.bind({});
Extended.args = {
  variant: "primary",
  extended: true,
  label: "Créer",
  "aria-label": "Créer un élément",
};

export const Loading = Template.bind({});
Loading.args = { variant: "primary", loading: true, "aria-label": "Chargement" };

export const AllVariants = () => (
  <div className="flex flex-wrap gap-6 items-center">
    {["primary", "secondary", "destructive", "gradient"].map((variant) => (
      <FloatingActionButton key={variant} variant={variant} aria-label={variant}>
        <PlusIcon />
      </FloatingActionButton>
    ))}
  </div>
);
