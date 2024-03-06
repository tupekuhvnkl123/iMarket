import ProductsTemplate from "../components/Pages/ProductsPage/ProductsTemplate";
import { DUMMY_PRODUCTS, iPhoneProductsPageData } from "../utils/consts";

const IPhonePage: React.FC = () => {
  return (
    <>
      <ProductsTemplate
        products={DUMMY_PRODUCTS}
        staticData={iPhoneProductsPageData}
        iPhonePage
      />
    </>
  );
};

export default IPhonePage;
