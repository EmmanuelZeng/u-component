import React from "react";
import Image from "./Image";

export default {
  title: "COMPONENTS/atoms/Image",
  component: Image,
  argTypes: {
    rounded: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl", "full"],
    },
    fit: { control: { type: "select" }, options: ["cover", "contain", "fill", "none"] },
    aspect: {
      control: { type: "select" },
      options: ["auto", "square", "video", "portrait"],
    },
  },
};

const SAMPLE_SRC =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop";

const Template = (args) => (
  <div className="w-48">
    <Image {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  src: SAMPLE_SRC,
  alt: "Portrait exemple",
  rounded: "md",
};

export const Circle = Template.bind({});
Circle.args = {
  src: SAMPLE_SRC,
  alt: "Avatar rond",
  rounded: "full",
  aspect: "square",
};

export const VideoAspect = Template.bind({});
VideoAspect.args = {
  src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=225&fit=crop",
  alt: "Paysage",
  aspect: "video",
  rounded: "lg",
  fullWidth: true,
};

export const WithFallback = () => (
  <div className="w-48 h-32">
    <Image
      src="https://invalid-url.example/image.jpg"
      alt="Image cassée"
      fallback={<span className="text-sm">Image indisponible</span>}
      rounded="md"
      fullWidth
      className="h-full"
    />
  </div>
);

export const AllRounded = () => (
  <div className="flex flex-wrap gap-4">
    {["none", "sm", "md", "lg", "full"].map((rounded) => (
      <div key={rounded} className="w-20 text-center">
        <Image
          src={SAMPLE_SRC}
          alt={rounded}
          rounded={rounded}
          aspect="square"
          className="w-20 h-20"
        />
        <span className="text-xs text-gray3 mt-1 block">{rounded}</span>
      </div>
    ))}
  </div>
);
