import React from "react";
import SearchBar from "./SearchBar";

export default {
  title: "COMPONENTS/molecules/SearchBar",
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
