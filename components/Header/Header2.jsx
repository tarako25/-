import Link from 'next/link'
import React, { useEffect } from 'react'
import styles from "components/Header/Header2.module.css"
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

function Header2() {

//スクロール時の処理(header)//

useEffect(() => {
  const menus = document.getElementById("menus");
  const menubox = document.getElementById("menubox");

  const openHandle =() => {
    menubox.classList.toggle(styles.opened);
  }
  menus.addEventListener("click", openHandle );
  return () => menus.removeEventListener("click", openHandle );
}, );
  return (
    <>
      <div className={styles.header} id="header">
            <div className={styles.headerlogo}>
                <Link href="../">
                  <p>SampleText</p>
                </Link>
            </div>
            <nav className={styles.headernavi}>
                <ul>
                    <Link href="./service">
                    <li>旅館内サービス</li>
                    </Link>
                    <Link href="./reserve">
                    <li>予約</li>
                    </Link>
                    <Link href="./news">
                    <li>お知らせ</li>
                    </Link>
                    <Link href="">
                    <li>交通案内</li>
                    </Link>
                    <Link href="">
                    <li>問い合わせ</li>
                    </Link>
                </ul>
            </nav>
            <div className={styles.iconmain} id="menus">
              <DensityMediumIcon className={styles.iconsub}/>
            </div>
      </div>
      <div className={styles.menubox} id="menubox">
        <ul>
                    <Link href="./service">
                    <li>旅館内サービス</li>
                    </Link>
                    <Link href="./reserve">
                    <li>予約</li>
                    </Link>
                    <Link href="./news">
                    <li>お知らせ</li>
                    </Link>
                    <Link href="">
                    <li>交通案内</li>
                    </Link>
                    <Link href="">
                    <li>問い合わせ</li>
                    </Link>
        </ul>
      </div>
    </>
  )
}

export default Header2