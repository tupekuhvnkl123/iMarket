import { IoIosSearch } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import classes from "../../../../style/Layouts/Drawer/Search/Search.module.scss";
import { getAxiosRequest, getErrorMsg } from "../../../../utils/functions";
import { useQuery } from "react-query";
import SnackBar from "../../../UI/SnackBar";
import { SearchItemType } from "./Search.types";

const Search: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const [search, setSearch] = useState<boolean>(false);

  const { data, isError, error, refetch } = useQuery([searchValue], {
    enabled: search && !!searchValue.trim().length,
    queryFn: () =>
      getAxiosRequest<{ products: SearchItemType[] }>(
        `products/search/${searchValue}`
      ).then((res) => {
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

  return (
    <>
      <div className={classes.container}>
        <div className={classes.inputContainer}>
          <div>
            <IoIosSearch className={classes.searchIcon} />
          </div>
          <input
            value={searchValue}
            onChange={({ target }) => setSearchValue(target.value)}
            placeholder="Search..."
            ref={inputRef}
            type="text"
            className={classes.input}
          />
        </div>

        <ul>
          {data?.products.map((product) => (
            <div key={product._id}>
              <p>{product.model}</p>
            </div>
          ))}
        </ul>
      </div>
      <SnackBar
        open={isError}
        hideDuration={5000}
        message={getErrorMsg(error)}
      />
    </>
  );
};

export default Search;
