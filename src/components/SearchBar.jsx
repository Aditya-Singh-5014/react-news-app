import React from "react";
import { CiSearch } from "react-icons/ci";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <CiSearch size={24} className="search-icon" />
      <input
        type="text"
        placeholder="Search articles..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
