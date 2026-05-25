import React from "react";
import Tag from "./Tag";

export default {
  title: "COMPONENTS/atoms/Tag",
  component: Tag,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "success", "warning", "danger", "outline"],
    },
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
    rounded: { control: { type: "select" }, options: ["sm", "md", "lg", "full"] },
  },
};

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = { children: "React" };

export const Removable = Template.bind({});
Removable.args = {
  children: "TypeScript",
  variant: "primary",
  removable: true,
  onRemove: () => alert("Tag supprimé"),
};

export const AllVariants = () => (
  <div className="flex flex-wrap gap-2">
    {["default", "primary", "success", "warning", "danger", "outline"].map(
      (variant) => (
        <Tag key={variant} variant={variant}>
          {variant}
        </Tag>
      )
    )}
  </div>
);

export const Disabled = Template.bind({});
Disabled.args = { children: "Désactivé", disabled: true };
