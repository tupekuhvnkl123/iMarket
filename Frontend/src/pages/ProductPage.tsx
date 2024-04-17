import { useParams, useLocation } from "react-router-dom";
import ProductTemplate from "../components/Pages/ProductPage/ProductTemplate";
import { matchStaticImages } from "../utils/staticImages";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { ProductResponseType } from "./Pages.types";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "@mui/material";
import ProductLoadingSkeleton from "../components/Pages/ProductPage/ProductLoadingSkeleton";
import { getErrorMsg, scrollToTop } from "../utils/functions";
import { useEffect } from "react";
import SuccessPopout from "../components/UI/SuccessPopout";

export type AddToCartData = {
  model: string;
  colorId: string;
  optionId: string;
};

const ProductPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const brand = pathname.split("/")[1];
  const { model } = useParams();

  const staticImages = matchStaticImages(brand, model);

  const fetchData = async (): ProductResponseType => {
    const response = await axios.get(`/products/${model}`);
    if (response.data.product.brand !== brand) {
      const productRoute = `/${response.data.product.brand}/${model}`;
      navigate(productRoute);
    }
    return response.data;
  };

  const { data, isError, isLoading, error } = useQuery(`${model}`, fetchData);

  const addToCart = async (data: AddToCartData) => {
    const response = await axios.post("/cart", data);

    return response.data;
  };

  const addToCartMutate = useMutation({
    mutationFn: addToCart,
  });

  useEffect(() => {
    scrollToTop("auto");
  }, []);

  return (
    <>
      {data && (
        <ProductTemplate
          productData={data.product}
          staticImages={staticImages}
          productRoute={model}
          onBuyNow={addToCartMutate.mutate}
        />
      )}
      {isLoading && <ProductLoadingSkeleton />}

      <Snackbar
        open={isError || addToCartMutate.isError}
        autoHideDuration={5000}
        message={getErrorMsg(error || addToCartMutate.error)}
      />

      <SuccessPopout
        open={addToCartMutate.isSuccess}
        text={`${model} added to your cart.`}
      />
    </>
  );
};

export default ProductPage;
