import Text from "./Text";

export default {
  title: "COMPONENTS/atoms/Text",
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: `I will be the leader of a company that ends up being worth billions
  of dollars, because I got the answers. I understand culture. I am
  the nucleus. I think that’s a responsibility that I have, to push
  possibilities, to show people, this is the level that things could
  be at.`,
  type: "default",
};

export const Primary = Template.bind({});
Primary.args = {
  children: `I will be the leader of a company that ends up being worth billions
  of dollars, because I got the answers. I understand culture. I am
  the nucleus. I think that’s a responsibility that I have, to push
  possibilities, to show people, this is the level that things could
  be at.`,
  type: "primary",
};

export const Info = Template.bind({});
Info.args = {
  children: `I will be the leader of a company that ends up being worth billions
  of dollars, because I got the answers. I understand culture. I am
  the nucleus. I think that’s a responsibility that I have, to push
  possibilities, to show people, this is the level that things could
  be at.`,
  type: "info",
};

export const Success = Template.bind({});
Success.args = {
  children: `I will be the leader of a company that ends up being worth billions
  of dollars, because I got the answers. I understand culture. I am
  the nucleus. I think that’s a responsibility that I have, to push
  possibilities, to show people, this is the level that things could
  be at.`,
  type: "success",
};

export const Danger = Template.bind({});
Danger.args = {
  children: `I will be the leader of a company that ends up being worth billions
  of dollars, because I got the answers. I understand culture. I am
  the nucleus. I think that’s a responsibility that I have, to push
  possibilities, to show people, this is the level that things could
  be at.`,
  type: "danger",
};
