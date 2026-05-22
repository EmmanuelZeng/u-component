import DashboardLayout from "./DashboardLayout";

export default {
  title: "COMPONENTS/templates/DashboardLayout",
  component: DashboardLayout,
};

const Template = (args) => <DashboardLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo_url: "https://via.placeholder.com/150x50?text=Logo",
  sidebarList: [
    { name: "Tableau de bord", active: "/", icon: "🏠" },
    { name: "Produits", active: "/products", icon: "🛍️" },
    { name: "Paramètres", active: "/settings", icon: "⚙️" },
  ],
  children: <div className="p-4 bg-white rounded-lg shadow-sm">Contenu du dashboard</div>,
};
