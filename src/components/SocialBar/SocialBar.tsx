import React from "react";
import styles from "./SocialBar.module.scss";
const SocialBar = () => {
  return (
    <ul className={styles.socialBar}>
      <li
        className={styles.socialBar__item}
        style={{ backgroundImage: "url(/public/images/inst.svg)" }}
      />
      <li
        className={styles.socialBar__item}
        style={{ backgroundImage: "url(/public/images/vk.svg)" }}
      />
      <li
        className={styles.socialBar__item}
        style={{
          backgroundImage: "url(/public/images/tg.svg)",
          backgroundPosition: "8px 1px",
        }}
      />
    </ul>
  );
};

export default SocialBar;
