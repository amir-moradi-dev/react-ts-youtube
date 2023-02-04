import React, { FormEvent, useContext, useState } from "react";
import classes from "./index.module.css";
import Search from "@mui/icons-material/Search";
import { StateContext } from "../../store/StateContext";

function SearchForm() {
  const { setSearchKeyCtx } = useContext(StateContext);
  const [searchKey, setSearchKey] = useState("");

  function onFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearchKeyCtx(searchKey);
    return;
  }

  return (
    <>
      <form className={classes.searchForm} onSubmit={onFormSubmit}>
        <input
          type={"text"}
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder={"Youtube Video..."}
        />
        <button type={"submit"}>
          {" "}
          <Search />{" "}
        </button>
      </form>
    </>
  );
}

export default SearchForm;
