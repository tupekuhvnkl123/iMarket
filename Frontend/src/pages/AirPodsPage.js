import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { ProductBrandsType } from "../components/Pages/ProductPage/ProductPage.types";
import ProductsTemplate from "../components/Pages/ProductsPage/ProductsTemplate";
import { airPodsProductsPageData } from "../utils/consts";
import { useQuery } from "react-query";
import { getAxiosRequest, getErrorMsg, scrollToTop } from "../utils/functions";
import { useEffect } from "react";
const AirPodsPage = () => {
    const fetchData = () => getAxiosRequest(`/products/brand/${ProductBrandsType.AirPods}`);
    const { data, isError, isLoading, error } = useQuery(`${ProductBrandsType.AirPods}-data`, fetchData);
    useEffect(() => {
        scrollToTop("auto");
    }, []);
    return (_jsx(_Fragment, { children: _jsx(ProductsTemplate, { isError: isError, isLoading: isLoading, products: data?.products, staticData: airPodsProductsPageData, errorMsg: getErrorMsg(error) }, void 0) }, void 0));
};
export default AirPodsPage;
