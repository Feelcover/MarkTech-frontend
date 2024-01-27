import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}/>
      </div>
      <div className={styles.menuContainer}>
      <input className={styles.search} type="text" placeholder='Поиск...'/>
        <nav className={styles.menu}>
          <div className={styles.menu__item}>Вход</div>
          <div className={styles.menu__item}>Регистрация</div>
        </nav>
      </div>
    </header>
  )
}

export default Header