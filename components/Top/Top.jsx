import React from 'react'
import styles from "components/Top/Top.module.css"
import Image from 'next/image'
import img1 from "img/top.jpg"

function Top() {
  return (
    <div className={styles.top}>
      <div className={styles.topsub}>
          <Image src={img1} className={styles.img1}/>
          <div className={styles.kybox}>
            <p>Lorem ipsum dolor sit.</p>
            <div className={styles.description}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur iste doloremque?</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Top