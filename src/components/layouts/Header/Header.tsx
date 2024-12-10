import React from "react";
import SiteIcon from "@/components/elements/siteIcon/SiteIcon";
import SearchArticles from "@/components/elements/searchArticles/SearchArticles";
import PostArticle from "../../elements/postArticle/PostArticle";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.appHeaderInner}>
      <SiteIcon />
      <div className={styles.headerContents}>
        <SearchArticles />
        <PostArticle />
      </div>
    </div>
  );
};

export default Header;
