import { useQuery } from "react-query";
import ProductsTemplate from "../components/Pages/ProductsPage/ProductsTemplate";
import { iPhoneProductsPageData } from "../utils/consts";
import { ProductBrandsType } from "../components/Pages/ProductPage/ProductPage.types";
import { ProductsResponseType } from "./Pages.types";
import { getAxiosRequest, getErrorMsg, scrollToTop } from "../utils/functions";
import { ProductItemType } from "../components/Pages/ProductsPage/ProductsPage.types";
import { useEffect } from "react";

const IPhonePage: React.FC = () => {
  const fetchData = (): ProductsResponseType =>
    getAxiosRequest<{ products: ProductItemType[] }>(
      `/products/brand/${ProductBrandsType.iPhone}`
    );

  const { data, isError, isLoading, error } = useQuery(
    `${ProductBrandsType.iPhone}-data`,
    fetchData
  );
  useEffect(() => {
    scrollToTop("auto");
  }, []);

  return (
    <>
      <ProductsTemplate
        isError={isError}
        isLoading={isLoading}
        products={data?.products}
        staticData={iPhoneProductsPageData}
        errorMsg={getErrorMsg(error)}
        iPhonePage
      />
    </>
  );
};

export default IPhonePage;
