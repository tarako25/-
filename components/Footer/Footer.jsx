import React from 'react'
import styles from "components/Footer/Footer.module.css"

function Footer() {
  return (
    <div className={styles.footermain}>
      <div className={styles.footersub}>
          <div className={styles.footerlogo}>
          <p>SampleText</p>
          </div>
          <div className={styles.footermenus}>
            <ul>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
            <ul>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
            <ul>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2023 SampleText</p>
      </div>
    </div>
  )
}

export default Footer