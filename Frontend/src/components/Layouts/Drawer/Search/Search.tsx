import { IoIosSearch } from "react-icons/io";
import { useEffect, useRef } from "react";
import classes from "../../../../style/Layouts/Drawer/Search/Search.module.scss";

const Search: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.inputContainer}>
        <div>
          <IoIosSearch className={classes.searchIcon} />
        </div>
        <input
          placeholder="Search..."
          ref={inputRef}
          type="text"
          className={classes.input}
        />
      </div>
    </div>
  );
};

export default Search;
