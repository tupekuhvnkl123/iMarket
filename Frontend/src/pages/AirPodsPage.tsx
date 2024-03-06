import ProductsTemplate from "../components/Pages/ProductsPage/ProductsTemplate";
import { DUMMY_PRODUCTS, airPodsProductsPageData } from "../utils/consts";

const AirPodsPage: React.FC = () => {
  return (
    <>
      <ProductsTemplate
        products={DUMMY_PRODUCTS}
        staticData={airPodsProductsPageData}
      />
    </>
  );
};

export default AirPodsPage;
