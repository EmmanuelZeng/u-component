import SearchField from "./SearchField";

export default {
  title: "COMPONENTS/molecules/SearchField",
  component: SearchField,
};

const Template = (args) => <SearchField {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "",
  placeholder: "Rechercher...",
};
