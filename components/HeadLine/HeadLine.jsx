import React from 'react'
import styles from "components/HeadLine/HeadLine.module.css"
import img1 from "img/top.jpg"
import Image from 'next/image'

function HeadLine() {
  return (
    <div className={styles.headlineall}>
      <div className={styles.headlinemain}>
        <div className={styles.headlinesub}>
          <div className={styles.hlbox}>
            <div className={styles.hltext}>
              <div className={styles.hltextbox}>
                <h2>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi illum voluptatum vel?</p>
              </div>
            </div>
            <div className={styles.hlimg}>
              <Image src={img1} className={styles.img}/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headlinemain2}>
        <div className={styles.headlinesub2}>
          <div className={styles.hlbox2}>
          <div className={styles.hlimg}>
              <Image src={img1} className={styles.img}/>
            </div>
            <div className={styles.hltext}>
              <div className={styles.hltextbox}>
                <h2>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi illum voluptatum vel?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headlinemain3}>
        <div className={styles.headlinesub}>
          <div className={styles.hlbox}>
            <div className={styles.hltext}>
              <div className={styles.hltextbox}>
                <h2>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi illum voluptatum vel?</p>
              </div>
            </div>
            <div className={styles.hlimg}>
              <Image src={img1} className={styles.img}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadLine