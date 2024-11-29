import Link from "next/link";
import React from "react";
import PostArtile from "../elements/PostArticle";

const Header = async () => {
  return (
    <div>
      <div>
        <Link href="/">ho-mu</Link>
        <div>
          <div>
            <Link aria-label="検索" id="header-search" href="/search">
              検索
            </Link>
            <div>
              <div>
                <button aria-label="通知">通知</button>
              </div>
            </div>
            <PostArtile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
