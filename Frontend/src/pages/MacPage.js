import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import ProductsTemplate from "../components/Pages/ProductsPage/ProductsTemplate";
import { macProductsPageData } from "../utils/consts";
import { ProductBrandsType } from "../components/Pages/ProductPage/ProductPage.types";
import { useQuery } from "react-query";
import { getAxiosRequest, getErrorMsg, scrollToTop } from "../utils/functions";
import { useEffect } from "react";
const MacPage = () => {
    const fetchData = () => getAxiosRequest(`/products/brand/${ProductBrandsType.Mac}`);
    const { data, isError, isLoading, error } = useQuery(`${ProductBrandsType.Mac}-data`, fetchData);
    useEffect(() => {
        scrollToTop("auto");
    }, []);
    return (_jsx(_Fragment, { children: _jsx(ProductsTemplate, { isError: isError, isLoading: isLoading, products: data?.products, staticData: macProductsPageData, errorMsg: getErrorMsg(error) }, void 0) }, void 0));
};
export default MacPage;
