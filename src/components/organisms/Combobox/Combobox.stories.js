import Combobox from "./Combobox";

export default {
    title: "COMPONENTS/organisms/Combobox",
    component: Combobox,
};

const Template = (args) => <Combobox {...args} />;

export const Default = Template.bind({});

Default.args = {
    placeholder: "Click me",
    textFieldProps: {
        size: "small",
        placeholder: "Enter your text"
    },
    optionKeys: ["name", "labelPart"],
    options: [
        {
            id: "434sdf",
            name: "Some name grand 1",
            labelPart: "435"
        },
        {
            id: "43hgf4sdf",
            name: "Some name 3 git sfs sdf sdf sdf sf  df df da fad fdafdafadf a fa f afaf af a f af a  sdfsdf sfdsd f sf s fs f sf s df sfs fs fs s",
            labelPart: "436"
        },
        {
            id: "434sdsdf",
            name: "Got some name 2",
            labelPart: "434"
        },
    ]
}