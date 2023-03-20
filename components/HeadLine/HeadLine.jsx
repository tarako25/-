import React, { useEffect } from "react";
import styles from "components/HeadLine/HeadLine.module.css"
import img1 from "img/top.jpg"
import Image from 'next/image'

function HeadLine() {

  useEffect(() => {
    const hl1 = document.getElementById("hl1");
    const hl2 = document.getElementById("hl2");
    const hl3 = document.getElementById("hl3");
    const handleScroll = () => {
    const scroll = window.pageYOffset;
    const fade1 = hl1.getBoundingClientRect();
    const fade2 = hl2.getBoundingClientRect();
    const fade3 = hl3.getBoundingClientRect();
    const height1 = fade1.top;
    const height2 = fade2.top;
    const height3 = fade3.top;
  
    if( 500 > height1){
      hl1.classList.add(styles.slideIn);
      if( 500 > height2){
        hl2.classList.add(styles.slideIn);
        if( 700 > height3){
          hl3.classList.add(styles.slideIn);
        }
      }
    }
  }
     window.addEventListener("scroll", handleScroll);
  },[]);

  return (
    <div className={styles.headlineall}>
      <div className={styles.headlinemain}>
        <div className={styles.headlinesub} id="hl1">
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
        <div className={styles.headlinesub2} id="hl2">
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
        <div className={styles.headlinesub3} id="hl3">
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