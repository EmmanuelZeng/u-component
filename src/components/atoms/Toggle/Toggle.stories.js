import Toggle from "./Toggle";

export default {
  title: "COMPONENTS/atoms/Toggle",
  component: Toggle,
};

const Template = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};
