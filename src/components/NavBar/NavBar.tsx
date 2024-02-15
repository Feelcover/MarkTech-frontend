import React from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <button className={styles.navBar__catalog}> Каталог товаров</button>
    </nav>
  );
};

export default NavBar;
