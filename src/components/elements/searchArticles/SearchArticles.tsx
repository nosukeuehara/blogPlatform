import Link from "next/link";
import React from "react";

const SearchArticles = () => {
  return (
    <Link aria-label="検索" id="header-search" href="/search">
      検索
    </Link>
  );
};

export default SearchArticles;
