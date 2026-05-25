import React from "react";
import MediaPlayerControls from "./MediaPlayerControls";

export default {
  title: "COMPONENTS/molecules/MediaPlayerControls",
  component: MediaPlayerControls,
};

const Template = (args) => <MediaPlayerControls {...args} />;

export const Default = Template.bind({});
Default.args = {};
