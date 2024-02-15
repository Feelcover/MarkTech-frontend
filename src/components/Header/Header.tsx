import React from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo/>
        <div className={styles.container}>
        <div className={styles.header__contact}>
        <a className={styles.header__contact__num} href='tel:+7 980 000-02-33'>+7 980 000-02-33</a>
        <p className={styles.header__contact__text}>Заказать звонок</p>
        </div>
        <ul className={styles.header__bar}>
          
        </ul>
        </div>
        <div className={styles.header__basket}>
          <p className={styles.header__basket__title}>Товаров на сумму</p>
          <span className={styles.header__basket__price}>2 000 ₽</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
