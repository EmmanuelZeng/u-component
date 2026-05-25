import React from "react";
import Textarea from "./Textarea";

export default {
  title: "COMPONENTS/atoms/Textarea",
  component: Textarea,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "filled", "flushed", "outline", "outlined"],
    },
    size: { control: { type: "select" }, options: ["xs", "sm", "md", "lg"] },
  },
};

const Template = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Description",
  placeholder: "Décrivez votre projet...",
  variant: "outline",
};

export const Filled = Template.bind({});
Filled.args = {
  label: "Commentaire",
  placeholder: "Votre avis",
  variant: "filled",
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Message",
  error: true,
  helperText: "Le message est trop court",
  variant: "outline",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Notes",
  disabled: true,
  value: "Contenu verrouillé",
  variant: "outline",
};

export const AllVariants = () => (
  <div className="flex flex-col gap-4 max-w-md">
    {["default", "filled", "flushed", "outline"].map((variant) => (
      <Textarea
        key={variant}
        label={`Variant ${variant}`}
        placeholder={`Textarea ${variant}`}
        variant={variant}
      />
    ))}
  </div>
);
