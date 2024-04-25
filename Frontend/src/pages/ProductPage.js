import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams, useLocation } from "react-router-dom";
import ProductTemplate from "../components/Pages/ProductPage/ProductTemplate";
import { matchStaticImages } from "../utils/staticImages";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import ProductLoadingSkeleton from "../components/Pages/ProductPage/ProductLoadingSkeleton";
import { getErrorMsg, scrollToTop } from "../utils/functions";
import { useEffect } from "react";
import SnackBar from "../components/UI/SnackBar";
const ProductPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const brand = pathname.split("/")[1];
    const { model } = useParams();
    const staticImages = matchStaticImages(brand, model);
    const fetchData = async () => {
        const response = await axios.get(`/products/${model}`);
        if (response.data.product.brand !== brand) {
            const productRoute = `/${response.data.product.brand}/${model}`;
            navigate(productRoute);
        }
        return response.data;
    };
    const { data, isError, isLoading, error } = useQuery(`${model}`, fetchData);
    const addToCart = async (data) => {
        const response = await axios.post("/cart", data);
        return response.data;
    };
    const addToCartMutate = useMutation({
        mutationFn: addToCart,
    });
    useEffect(() => {
        scrollToTop("auto");
    }, []);
    return (_jsxs(_Fragment, { children: [data && (_jsx(ProductTemplate, { productData: data.product, staticImages: staticImages, productRoute: model, onBuyNow: addToCartMutate.mutate }, void 0)), isLoading && _jsx(ProductLoadingSkeleton, {}, void 0), _jsx(SnackBar, { open: (isError || addToCartMutate.isError) && !addToCartMutate.isSuccess, hideDuration: 5000, message: getErrorMsg(error || addToCartMutate.error) }, void 0), _jsx(SnackBar, { success: true, open: addToCartMutate.isSuccess, message: `${model?.replace(/-/g, " ")} added to your cart.`, hideDuration: 3000 }, void 0)] }, void 0));
};
export default ProductPage;
