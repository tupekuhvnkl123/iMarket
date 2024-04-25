import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import FavoriteItem from "./FavoriteItem";
import classes from "../../../../style/Layouts/Drawer/Favorites/Favorites.module.scss";
import ExploreCard from "../../../UI/ExploreCard";
import { useMutation, useQuery } from "react-query";
import { PuffLoader } from "react-spinners";
import { getAxiosRequest, getErrorMsg } from "../../../../utils/functions";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import axios from "axios";
import SnackBar from "../../../UI/SnackBar";
const Favorites = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const { data, isError, isLoading, error, refetch } = useQuery("favorites", {
        enabled: isLoggedIn,
        queryFn: () => getAxiosRequest("/user/favorites"),
    });
    const removeFromFavorite = async (model) => {
        const response = await axios.post("/user/addToFavorite", { model });
        return response.data;
    };
    const { mutate: removeFavHandler, isError: removeFavIsError, error: removeFavError, } = useMutation({
        mutationFn: (model) => removeFromFavorite(model).then(() => {
            refetch();
        }),
    });
    if (isLoading) {
        return (_jsx("div", { className: classes.loaderContainer, children: _jsx(PuffLoader, { color: "white" }, void 0) }, void 0));
    }
    if (!data?.favorites?.length) {
        return _jsx(ExploreCard, { text: "Your favorites list is empty..." }, void 0);
    }
    return (_jsxs(_Fragment, { children: [_jsx("ul", { className: classes.favoritesList, children: data &&
                    data.favorites.map((product) => (_jsx(FavoriteItem, { product: product, onRemoveFavorite: removeFavHandler }, product._id))) }, void 0), _jsx(SnackBar, { open: isError || removeFavIsError, hideDuration: 5000, message: getErrorMsg(error || removeFavError) }, void 0)] }, void 0));
};
export default Favorites;
