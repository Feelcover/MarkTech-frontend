import React from 'react'
import styles from './Search.module.scss'

const Search = () => {
  return (
    <div className={styles.wrapper}>
        <input className={styles.input} placeholder='Поиск по каталогу'/>
    </div>
  )
}

export default Search