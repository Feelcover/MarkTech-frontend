import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <div className={styles.logo} />
      </div>
      <div className={styles.menuContainer}>
        <input className={styles.search} type="text" placeholder="Поиск..." />
        <nav className={styles.menu}>
          <Link className={styles.menu__item} to="/">
            <Button type="button" height={32} width={72} backgroundColor="#f2f2f2" color="#000000" text="Вход" />
          </Link>
          <Link className={styles.menu__item} to="/">
            <Button type="button" height={32} width={125} text="Регистрация" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
