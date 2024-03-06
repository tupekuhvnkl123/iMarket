import ProductsTemplate from "../components/Pages/ProductsPage/ProductsTemplate";
import { DUMMY_PRODUCTS, macProductsPageData } from "../utils/consts";

const MacPage: React.FC = () => {
  return (
    <>
      <ProductsTemplate
        products={DUMMY_PRODUCTS}
        staticData={macProductsPageData}
      />
    </>
  );
};

export default MacPage;
