import Link from "next/link";
import React from "react";

const SearchArticles = () => {
  return (
    <div>
      <Link aria-label="検索" id="header-search" href="/search">
        検索
      </Link>
    </div>
  );
};

export default SearchArticles;
