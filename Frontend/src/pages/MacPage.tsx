import ProductsTemplate from "../components/Pages/ProductsPage/ProductsTemplate";
import { macProductsPageData } from "../utils/consts";
import { ProductsResponseType } from "./Pages.types";
import { ProductBrandsType } from "../components/Pages/ProductPage/ProductPage.types";
import { useQuery } from "react-query";
import { getAxiosRequest, getErrorMsg, scrollToTop } from "../utils/functions";
import { ProductItemType } from "../components/Pages/ProductsPage/ProductsPage.types";
import { useEffect } from "react";

const MacPage: React.FC = () => {
  const fetchData = (): ProductsResponseType =>
    getAxiosRequest<{ products: ProductItemType[] }>(
      `/products/brand/${ProductBrandsType.Mac}`
    );

  const { data, isError, isLoading, error } = useQuery(
    `${ProductBrandsType.Mac}-data`,
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
        staticData={macProductsPageData}
        errorMsg={getErrorMsg(error)}
      />
    </>
  );
};

export default MacPage;
