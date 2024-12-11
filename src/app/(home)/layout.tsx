import Header from "@/components/layouts/Header/Header";
import commonStyles from "../common.module.css";
import styles from "./page.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={commonStyles.contentWidth}>
      <div className={styles.header}>
        <Header />
      </div>
      {children}
    </div>
  );
};

export default Layout;
