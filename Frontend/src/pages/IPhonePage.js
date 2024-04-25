import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useQuery } from "react-query";
import ProductsTemplate from "../components/Pages/ProductsPage/ProductsTemplate";
import { iPhoneProductsPageData } from "../utils/consts";
import { ProductBrandsType } from "../components/Pages/ProductPage/ProductPage.types";
import { getAxiosRequest, getErrorMsg, scrollToTop } from "../utils/functions";
import { useEffect } from "react";
const IPhonePage = () => {
    const fetchData = () => getAxiosRequest(`/products/brand/${ProductBrandsType.iPhone}`);
    const { data, isError, isLoading, error } = useQuery(`${ProductBrandsType.iPhone}-data`, fetchData);
    useEffect(() => {
        scrollToTop("auto");
    }, []);
    return (_jsx(_Fragment, { children: _jsx(ProductsTemplate, { isError: isError, isLoading: isLoading, products: data?.products, staticData: iPhoneProductsPageData, errorMsg: getErrorMsg(error), iPhonePage: true }, void 0) }, void 0));
};
export default IPhonePage;
