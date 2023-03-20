import Link from 'next/link'
import React, { useEffect } from 'react'
import styles from "components/Header/Header.module.css"
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

function Header() {

//スクロール時の処理(header)//
  useEffect(() => {
    const header = document.getElementById("header");
    const scrollHandler = () => {
      const cscroll = window.pageYOffset;
      if (0 < cscroll) {
        header.classList.add(styles.show);
      } else {
        header.classList.remove(styles.show);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div className={styles.header} id="header">
          <div className={styles.headerlogo}>
              <p>SampleText</p>
          </div>
          <nav className={styles.headernavi}>
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
          </nav>
          <DensityMediumIcon className={styles.icon}/>
    </div>
  )
}

export default Header