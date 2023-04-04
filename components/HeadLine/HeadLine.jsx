import React, { useEffect } from "react";
import styles from "components/HeadLine/HeadLine.module.css"
import view1 from "img/view1.jpg"
import view2 from "img/view2.jpg"
import view3 from "img/view3.jpg"
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
                <h2>歴史ある自然に囲まれた旅館「柳屋」</h2>
                <p>創立100年を迎えた当旅館は大自然に囲まれた歴史ある温泉旅館で、日々の疲れやストレスを忘れ旅先の憩いの場を追求したのが「柳屋」です。</p>
              </div>
            </div>
            <div className={styles.hlimg}>
              <Image src={view1} className={styles.img}/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headlinemain2}>
        <div className={styles.headlinesub2} id="hl2">
          <div className={styles.hlbox2}>
          <div className={styles.hlimg}>
              <Image src={view2} className={styles.img}/>
            </div>
            <div className={styles.hltext}>
              <div className={styles.hltextbox}>
                <h2>和の風情に包まれる昔ながらの街並み</h2>
                <p>伝統的な街並みは、昔ながらの建物や石畳の道などが織りなす美しい景観が特徴です。その美しさは、時代を超えて愛され続けています。</p>
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
                <h2>世界が羨む美肌の湯、極上の癒し</h2>
                <p>季節折々に変化する山々と川が織りなす美しい景色を楽しみながら、自然と一体化した贅沢なひと時を過ごせます。</p>
              </div>
            </div>
            <div className={styles.hlimg}>
              <Image src={view3} className={styles.img}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadLine