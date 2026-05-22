import IconButton from "./IconButton";


export default {
  title: "COMPONENTS/atoms/IconButton",
  component: IconButton,
};

const Template = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "default",
};

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
};

export const Info = Template.bind({});
Info.args = {
  type: "info",
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
};

export const Danger = Template.bind({});
Danger.args = {
  type: "danger",
};