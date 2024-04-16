import { ProductBrandsType } from "../components/Pages/ProductPage/ProductPage.types";
import ProductsTemplate from "../components/Pages/ProductsPage/ProductsTemplate";
import { airPodsProductsPageData } from "../utils/consts";
import { ProductsResponseType } from "./Pages.types";
import { useQuery } from "react-query";
import { getAxiosRequest, getErrorMsg, scrollToTop } from "../utils/functions";
import { ProductItemType } from "../components/Pages/ProductsPage/ProductsPage.types";

const AirPodsPage: React.FC = () => {
  const fetchData = (): ProductsResponseType =>
    getAxiosRequest<{ products: ProductItemType[] }>(
      `/products/brand/${ProductBrandsType.AirPods}`
    );

  const { data, isError, isLoading, error } = useQuery(
    `${ProductBrandsType.AirPods}-data`,
    fetchData
  );
  scrollToTop("auto");

  return (
    <>
      <ProductsTemplate
        isError={isError}
        isLoading={isLoading}
        products={data?.products}
        staticData={airPodsProductsPageData}
        errorMsg={getErrorMsg(error)}
      />
    </>
  );
};

export default AirPodsPage;
