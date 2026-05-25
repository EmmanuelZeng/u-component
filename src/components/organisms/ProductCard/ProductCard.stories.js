import ProductCard from "./ProductCard";

export default {
  title: "COMPONENTS/organisms/ProductCard",
  component: ProductCard,
};

const Template = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Chaise de bureau ergonomique",
  description: "Un siège confortable avec un design moderne et un support lombaire réglable.",
  price: "129€",
  image: "https://images.unsplash.com/photo-1560185127-6f5d097c8ee7?auto=format&fit=crop&w=800&q=80",
};
