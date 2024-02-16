import React from 'react'
import styles from './Banner.module.scss'

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.wrapper}>
      <div className={styles.banner__start}/>
      <div className={styles.banner__mid}/>
      <div className={styles.container}>
      <div className={styles.banner__endUp}/>
      <div className={styles.banner__endDown}/>
      </div>
      </div>
    </section>
  )
}

export default Banner