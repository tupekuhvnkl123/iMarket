import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import classes from "../../../../style/Layouts/Drawer/Search/Search.module.scss";
import { getAxiosRequest, getErrorMsg } from "../../../../utils/functions";
import { useQuery } from "react-query";
import SnackBar from "../../../UI/SnackBar";
const Search = () => {
    const inputRef = useRef(null);
    const [searchValue, setSearchValue] = useState("");
    const [search, setSearch] = useState(false);
    const { data, isError, error, refetch } = useQuery([searchValue], {
        enabled: search && !!searchValue.trim().length,
        queryFn: () => getAxiosRequest(`products/search/${searchValue}`).then((res) => {
            setSearch(false);
            return res;
        }),
    });
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (searchValue.trim()) {
                setSearch(true);
            }
        }, 600);
        return () => clearTimeout(timeout);
    }, [searchValue, refetch]);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: classes.container, children: [_jsxs("div", { className: classes.inputContainer, children: [_jsx("div", { children: _jsx(IoIosSearch, { className: classes.searchIcon }, void 0) }, void 0), _jsx("input", { value: searchValue, onChange: ({ target }) => setSearchValue(target.value), placeholder: "Search...", ref: inputRef, type: "text", className: classes.input }, void 0)] }, void 0), _jsx("ul", { children: data?.products.map((product) => (_jsx("div", { children: _jsx("p", { children: product.model }, void 0) }, product._id))) }, void 0)] }, void 0), _jsx(SnackBar, { open: isError, hideDuration: 5000, message: getErrorMsg(error) }, void 0)] }, void 0));
};
export default Search;
