import Avatar from "./Avatar";

export default {
  title: "COMPONENTS/atoms/Avatar",
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {
  width: 3,
  height: 3,
  alt: "avatar-by-default",
  type: "circle",
};