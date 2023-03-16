import Link from 'next/link'
import React from 'react'
import styles from "components/Header/Header.module.css"

function Header() {
  return (
    <div className={styles.header}>
          <div className={styles.headerlogo}>
              <p>SampleText</p>
          </div>
          <navi className={styles.headernavi}>
              <ul>
                  <Link href="">
                  <li>Company</li>
                  </Link>
                  <Link href="">
                  <li>Service</li>
                  </Link>
                  <Link href="">
                  <li>Career</li>
                  </Link>
                  <Link href="">
                  <li>Acces</li>
                  </Link>
                  <Link href="">
                  <li>Recruit</li>
                  </Link>
                  <Link href="">
                  <li>Contact</li>
                  </Link>
              </ul>
          </navi>
    </div>
  )
}

export default Header