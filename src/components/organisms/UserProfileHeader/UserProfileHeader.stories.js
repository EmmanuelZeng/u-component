import React from "react";
import UserProfileHeader from "./UserProfileHeader";

export default {
  title: "COMPONENTS/organisms/UserProfileHeader",
  component: UserProfileHeader,
};

const Template = (args) => <UserProfileHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
