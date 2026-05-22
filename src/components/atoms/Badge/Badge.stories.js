import Badge from "./Badge";


export default {
  title: "COMPONENTS/atoms/Badge",
  component: Badge,
};

const Template = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default",
  type: "default",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  type: "primary",
};

export const Info = Template.bind({});
Info.args = {
  children: "Info",
  type: "info",
};

export const Success = Template.bind({});
Success.args = {
  children: "Success",
  type: "success",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger",
  type: "danger",
};
