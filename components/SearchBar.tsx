"use client";

import React, { FormEvent, useState } from "react";
import { SearchManufacturer } from "@components";

const SearchBar = () => {
  const [manufacturer, setmanufacturer] = useState("");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted", manufacturer);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setmanufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
