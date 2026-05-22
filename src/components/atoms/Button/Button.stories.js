import Button from "./Button";
// import "../../../index.css";

export default {
  title: "COMPONENTS/atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default",
  type: "default",
};
