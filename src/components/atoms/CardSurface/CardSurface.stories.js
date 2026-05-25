import React from "react";
import CardSurface from "./CardSurface";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";

export default {
  title: "COMPONENTS/atoms/CardSurface",
  component: CardSurface,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "elevated", "outlined", "ghost", "filled"],
    },
    rounded: { control: { type: "select" }, options: ["none", "sm", "md", "lg", "xl"] },
    padding: { control: { type: "select" }, options: ["none", "sm", "md", "lg", "xl"] },
  },
};

const Template = (args) => (
  <CardSurface {...args} className="max-w-sm">
    <Heading level={4}>Titre de la carte</Heading>
    <Paragraph size="sm" intent="muted" className="mt-2">
      Contenu de la carte avec un texte descriptif.
    </Paragraph>
    <Button variant="primary" size="sm" className="mt-4">
      Action
    </Button>
  </CardSurface>
);

export const Default = Template.bind({});
Default.args = { variant: "default" };

export const Elevated = Template.bind({});
Elevated.args = { variant: "elevated", rounded: "lg" };

export const Outlined = Template.bind({});
Outlined.args = { variant: "outlined" };

export const Interactive = Template.bind({});
Interactive.args = { variant: "elevated", interactive: true };

export const AllVariants = () => (
  <div className="grid grid-cols-2 gap-4 max-w-2xl">
    {["default", "elevated", "outlined", "ghost", "filled"].map((variant) => (
      <CardSurface key={variant} variant={variant} padding="md">
        <Paragraph size="sm" weight="semibold">
          {variant}
        </Paragraph>
      </CardSurface>
    ))}
  </div>
);
