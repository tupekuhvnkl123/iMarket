import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ProductItem from "./ProductItem";
import Skeleton from "react-loading-skeleton";
import classes from "../../../style/Pages/ProductsPage/ProductsList.module.scss";
const skeletonItems = [0, 1, 2, 3, 4, 5, 6, 7];
const ProductsList = ({ productsListRef, products, isLoading, addToFavHandler, favorites, }) => (_jsxs("ul", { ref: productsListRef, className: classes.productsList, children: [isLoading &&
            skeletonItems.map((num) => (_jsx(Skeleton, { className: classes.skeletonItem }, num))), products &&
            products.map((product) => {
                const favorited = favorites?.favorites.some((fav) => fav._id === product._id);
                return (_jsx(ProductItem, { data: product, onAddToFavorite: addToFavHandler, addedToFav: favorited }, product._id));
            })] }, void 0));
export default ProductsList;
