import { Link } from 'react-router-dom'
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
          <Link className={styles.menu__item} to='/'>Вход</Link>
          <Link className={styles.menu__item} to='/'>Регистрация</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header