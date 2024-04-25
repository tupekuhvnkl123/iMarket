import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useRef } from "react";
import { useMutation, useQuery } from "react-query";
import PreviewCard from "./PreviewCard";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import { getAxiosRequest } from "../../../utils/functions";
import ProductsList from "./ProductsList";
import classes from "../../../style/Pages/ProductsPage/ProductsTemplate.module.scss";
import SnackBar from "../../UI/SnackBar";
const ProductsTemplate = ({ staticData, products, iPhonePage, isLoading, isError, errorMsg, }) => {
    const { isLoggedIn } = useContext(AuthContext);
    const { data: favorites, refetch } = useQuery("favorites", {
        enabled: isLoggedIn,
        queryFn: () => getAxiosRequest("/user/favorites"),
    });
    const addToFavorite = async (model) => {
        const response = await axios.post("/user/addToFavorite", { model });
        return response.data;
    };
    const { mutate: addToFavHandler, isError: addToFavIsError } = useMutation({
        mutationFn: (model) => addToFavorite(model).then(() => {
            refetch();
        }),
    });
    const productsListRef = useRef(null);
    const { previewImage, background, title } = staticData;
    const scrollIntoProductsView = () => {
        if (productsListRef.current) {
            productsListRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (_jsxs("main", { children: [_jsx("div", { className: classes.previewBackground, style: { backgroundImage: `url(${background})` }, children: _jsx("section", { className: classes.previewSection, children: _jsx(PreviewCard, { previewImage: previewImage, title: title, iPhonePage: iPhonePage, arrowClickHandler: scrollIntoProductsView }, void 0) }, void 0) }, void 0), _jsx(ProductsList, { products: products, productsListRef: productsListRef, isLoading: isLoading, addToFavHandler: addToFavHandler, favorites: favorites }, void 0), _jsx(SnackBar, { open: isError || addToFavIsError, hideDuration: 5000, message: errorMsg }, void 0)] }, void 0));
};
export default ProductsTemplate;
