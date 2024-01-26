import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>Logo</div>
      <div className={styles.menuContainer}>
        <nav className={styles.menu}>
          <div className={styles.menu__item}>Поиск</div>
          <div className={styles.menu__item}></div>
          <div className={styles.menu__item}>Личный кабинет</div>
        </nav>
      </div>
    </header>
  )
}

export default Header