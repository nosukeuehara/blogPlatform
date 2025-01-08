import Header from "@/components/layouts/Header/Header";
import styles from "./page.module.css";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout_mainContent}>
      <div className={styles.block_header}>
        <Header />
      </div>
      {children}
    </div>
  );
};

export default Layout;
