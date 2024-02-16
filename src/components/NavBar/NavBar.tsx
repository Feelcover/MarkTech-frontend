import { url } from "inspector";
import React from "react";
import Search from "../Search/Search";
import SocialBar from "../SocialBar/SocialBar";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navBar}>
       <div>
       <button className={styles.navBar__catalog}>
            <span className={styles.navBar__catalog__text}>Каталог товаров</span>
        </button>
       </div>
        <div className={styles.rightContainer}>
        <div className={styles.container}>
            <ul className={styles.navBar__menu}>
                <li className={styles.navBar__menu__item}>О компании</li>
                <li className={styles.navBar__menu__item}>Акции</li>
                <li className={styles.navBar__menu__item}>Хиты сезона</li>
                <li className={styles.navBar__menu__item}>Новинки</li>
            </ul>
        <SocialBar/>
        </div>
        </div>
        <Search />
      </nav>
    </div>
  );
};

export default NavBar;
