import React from "react";
import UserMiniCard from "./UserMiniCard";

export default {
  title: "COMPONENTS/molecules/UserMiniCard",
  component: UserMiniCard,
};

const Template = (args) => <UserMiniCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
