import React from "react";
import SearchBar from "@theme-original/SearchBar";
import AskCookbook from "../../components/AskCookbook";

export default function SearchBarWrapper(props) {
  return (
    <>
      <SearchBar {...props} />
      <AskCookbook />
    </>
  );
}
