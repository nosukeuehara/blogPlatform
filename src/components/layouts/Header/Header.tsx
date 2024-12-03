import React from "react";
import SiteIcon from "@/components/elements/siteIcon/SiteIcon";
import SearchArticles from "@/components/elements/searchArticles/SearchArticles";
import PostArticle from "../../elements/postArticle/PostArticle";

const Header = () => {
  return (
    <div>
      <SiteIcon />
      <SearchArticles />
      <PostArticle />
    </div>
  );
};

export default Header;
