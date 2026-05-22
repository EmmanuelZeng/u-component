import Navbar from "./Navbar";

export default {
    title: "COMPONENTS/organisms/Navbar",
    component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});

Default.args = {
    user: {
        fullname: "Kinyamaniyi Kyunyu Samkin",
        email: "samkin1997@gmail.com",
        username: "CD/DEF/PPC-UFB-236"
    }
}