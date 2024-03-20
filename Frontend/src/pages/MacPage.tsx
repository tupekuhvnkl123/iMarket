import axios from "axios";
import ProductsTemplate from "../components/Pages/ProductsPage/ProductsTemplate";
import { macProductsPageData } from "../utils/consts";
import { ProductsResponseType } from "./Pages.types";
import { ProductBrandsType } from "../components/Pages/ProductPage/ProductPage.types";
import { useQuery } from "react-query";

const { VITE_API_ENDPOINT } = import.meta.env;

const MacPage: React.FC = () => {
  const fetchData = async (): ProductsResponseType => {
    const response = await axios.get(
      `${VITE_API_ENDPOINT}/products/brand/${ProductBrandsType.Mac}`
    );

    return response.data;
  };

  const { data, isError, isLoading } = useQuery(
    `${ProductBrandsType.Mac}-data`,
    fetchData
  );
  return (
    <>
      <ProductsTemplate
        isError={isError}
        isLoading={isLoading}
        products={data?.products}
        staticData={macProductsPageData}
      />
    </>
  );
};

export default MacPage;
