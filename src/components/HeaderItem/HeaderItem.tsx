import React from "react";
import styles from "./HeaderItem.module.scss";

const HeaderItem = ({ backgroundImage }: { backgroundImage: string }) => {
  return <li className={styles.headerItem} style={{ backgroundImage }} />;
};

export default HeaderItem;
