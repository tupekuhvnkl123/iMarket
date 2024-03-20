import axios from "axios";
import { ProductBrandsType } from "../components/Pages/ProductPage/ProductPage.types";
import ProductsTemplate from "../components/Pages/ProductsPage/ProductsTemplate";
import { airPodsProductsPageData } from "../utils/consts";
import { ProductsResponseType } from "./Pages.types";
import { useQuery } from "react-query";

const { VITE_API_ENDPOINT } = import.meta.env;

const AirPodsPage: React.FC = () => {
  const fetchData = async (): ProductsResponseType => {
    const response = await axios.get(
      `${VITE_API_ENDPOINT}/products/brand/${ProductBrandsType.AirPods}`
    );

    return response.data;
  };

  const { data, isError, isLoading } = useQuery(
    `${ProductBrandsType.AirPods}-data`,
    fetchData
  );

  return (
    <>
      <ProductsTemplate
        isError={isError}
        isLoading={isLoading}
        products={data?.products}
        staticData={airPodsProductsPageData}
      />
    </>
  );
};

export default AirPodsPage;
