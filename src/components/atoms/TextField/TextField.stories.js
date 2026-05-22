import TextField from "./TextField";

export default {
    title: "COMPONENTS/Atoms/Textfield",
    component: TextField
}

const Template = args => <TextField {...args} />

export const Default = Template.bind({});

Default.args = {
    suffix: <span>Fc</span>,
    // prefix: ""
}