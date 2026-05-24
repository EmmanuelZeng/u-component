import React from "react";
import Logo from "./Logo";

export default {
  title: "COMPONENTS/atoms/Logo",
  component: Logo,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "small", "medium", "large"],
    },
    variant: {
      control: { type: "select" },
      options: ["default", "monochrome", "inverted"],
    },
  },
};

const LOGO_SRC =
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = { src: LOGO_SRC, alt: "Logo React", size: "md" };

export const Large = Template.bind({});
Large.args = { src: LOGO_SRC, alt: "Logo large", size: "xl" };

export const Monochrome = Template.bind({});
Monochrome.args = { src: LOGO_SRC, alt: "Logo monochrome", variant: "monochrome" };

export const OnDarkBackground = () => (
  <div className="bg-dark p-6 rounded-lg inline-block">
    <Logo src={LOGO_SRC} alt="Logo inversé" variant="inverted" size="lg" />
  </div>
);

export const AllSizes = () => (
  <div className="flex items-end gap-6">
    {["xs", "sm", "md", "lg", "xl"].map((size) => (
      <Logo key={size} src={LOGO_SRC} alt={size} size={size} />
    ))}
  </div>
);
