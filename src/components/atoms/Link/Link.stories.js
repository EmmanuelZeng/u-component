import React from "react";
import Link from "./Link";

export default {
  title: "COMPONENTS/atoms/Link",
  component: Link,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "muted", "danger", "ghost"],
    },
    size: { control: { type: "select" }, options: ["xs", "sm", "md", "lg"] },
  },
};

const Template = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: "En savoir plus", href: "#", variant: "primary" };

export const External = Template.bind({});
External.args = {
  children: "Documentation",
  href: "https://example.com",
  external: true,
};

export const Disabled = Template.bind({});
Disabled.args = { children: "Lien désactivé", disabled: true };

export const AllVariants = () => (
  <div className="flex flex-wrap gap-4">
    {["default", "primary", "muted", "danger", "ghost"].map((variant) => (
      <Link key={variant} href="#" variant={variant}>
        {variant}
      </Link>
    ))}
  </div>
);
