import { useQuery } from "react-query";
import axios from "axios";
import ProductsTemplate from "../components/Pages/ProductsPage/ProductsTemplate";
import { iPhoneProductsPageData } from "../utils/consts";
import { ProductBrandsType } from "../components/Pages/ProductPage/ProductPage.types";
import { ProductsResponseType } from "./Pages.types";

const { VITE_API_ENDPOINT } = import.meta.env;

const IPhonePage: React.FC = () => {
  const fetchData = async (): ProductsResponseType => {
    const response = await axios.get(
      `${VITE_API_ENDPOINT}/products/brand/${ProductBrandsType.iPhone}`
    );

    return response.data;
  };

  const { data, isError, isLoading } = useQuery(
    `${ProductBrandsType.iPhone}-data`,
    fetchData
  );

  return (
    <>
      <ProductsTemplate
        isError={isError}
        isLoading={isLoading}
        products={data?.products}
        staticData={iPhoneProductsPageData}
        iPhonePage
      />
    </>
  );
};

export default IPhonePage;
