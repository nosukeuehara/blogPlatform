import Header from "@/components/layouts/Header/Header";
import styles from "./page.module.css";
import commonStyles from "../../common.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={commonStyles.contentWidth}>
      <header className={styles.header}>
        <Header />
      </header>
      {children}
    </div>
  );
};

export default Layout;
