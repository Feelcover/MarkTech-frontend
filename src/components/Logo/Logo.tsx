import React from 'react'
import styles from './Logo.module.scss'

const Logo = () => {
  return (
        <div className={styles.logo}>
          <span className={styles.orange}>M</span>ark
          <br />
          Tec<span className={styles.orange}>h</span>
        </div>
  )
}

export default Logo