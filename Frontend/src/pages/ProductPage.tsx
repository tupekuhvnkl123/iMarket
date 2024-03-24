import { useParams, useLocation } from "react-router-dom";
import ProductTemplate from "../components/Pages/ProductPage/ProductTemplate";
import { matchStaticImages } from "../utils/staticImages";
import axios from "axios";
import { useQuery } from "react-query";
import { ProductResponseType } from "./Pages.types";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "@mui/material";
import ProductLoadingSkeleton from "../components/Pages/ProductPage/ProductLoadingSkeleton";
import { scrollToTop } from "../utils/functions";

const { VITE_API_ENDPOINT } = import.meta.env;

const ProductPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const brand = pathname.split("/")[1];
  const { model } = useParams();

  const staticImages = matchStaticImages(brand, model);

  const fetchData = async (): ProductResponseType => {
    const response = await axios.get(`${VITE_API_ENDPOINT}/products/${model}`);
    if (response.data.product.brand !== brand) {
      const productRoute = `/${response.data.product.brand}/${model}`;
      navigate(productRoute);
    }
    return response.data;
  };

  const { data, isError, isLoading } = useQuery(`${model}`, fetchData);

  const errorMessage = "Could not find product info, please try to refresh.";
  scrollToTop("auto");

  return (
    <>
      {data && (
        <ProductTemplate
          productData={data.product}
          staticImages={staticImages}
          productRoute={model}
        />
      )}
      {isLoading && <ProductLoadingSkeleton />}
      {isError && (
        <Snackbar
          open={isError}
          autoHideDuration={5000}
          message={errorMessage}
        />
      )}
    </>
  );
};

export default ProductPage;
