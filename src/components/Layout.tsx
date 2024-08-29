import styles from "../styles/Layout.module.scss";
import { FC, useEffect, useState } from "react";
import useComponentReSize from "../hooks/useComponentReSize";
import classname from "classnames/bind";
import Sidebar from "./Sidebar";
const cx = classname.bind(styles);
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  const [componentRef, size] = useComponentReSize();
  const [isOversize, setIsOversize] = useState<boolean>();
  useEffect(() => {
    if (size.width > 1536) {
      setIsOversize(true);
    } else {
      setIsOversize(false);
    }
  }, [size]);
  return (
    <section ref={componentRef} className={`${cx("app")}`}>
      <section className={`${cx("main-container")}`}>{children}</section>
    </section>
  );
};

export default Layout;
