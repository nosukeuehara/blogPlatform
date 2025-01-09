import React from "react";
import SiteIcon from "@/components/elements/siteIcon/SiteIcon";
import SearchArticles from "@/components/elements/searchArticles/SearchArticles";
import PostArticle from "../../elements/postArticle/PostArticle";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.bl_header}>
      <SiteIcon />
      <div className={styles.bl_header__actionArea}>
        <SearchArticles />
        <PostArticle />
      </div>
    </div>
  );
};

export default Header;
