import React from "react";
import Avatar from "./Avatar";

const SAMPLE_SRC =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop";

export default {
  title: "COMPONENTS/atoms/Avatar",
  component: Avatar,
  argTypes: {
    size: { control: { type: "select" }, options: ["xs", "sm", "md", "lg", "xl"] },
    shape: { control: { type: "select" }, options: ["circle", "square", "rounded"] },
  },
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = { alt: "Utilisateur par défaut" };

export const WithImage = Template.bind({});
WithImage.args = {
  src: SAMPLE_SRC,
  alt: "John Doe",
  size: "lg",
};

export const Bordered = Template.bind({});
Bordered.args = {
  src: SAMPLE_SRC,
  alt: "Avatar bordé",
  size: "md",
  bordered: true,
};

export const Square = Template.bind({});
Square.args = { src: SAMPLE_SRC, alt: "Carré", shape: "square", size: "md" };

export const AllSizes = () => (
  <div className="flex items-end gap-3">
    {["xs", "sm", "md", "lg", "xl"].map((size) => (
      <Avatar key={size} src={SAMPLE_SRC} alt={size} size={size} />
    ))}
  </div>
);

export const AllShapes = () => (
  <div className="flex gap-4">
    {["circle", "square", "rounded"].map((shape) => (
      <Avatar key={shape} src={SAMPLE_SRC} alt={shape} shape={shape} size="lg" />
    ))}
  </div>
);
