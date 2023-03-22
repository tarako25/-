import React, { useRef, useEffect } from 'react';
import styles from "components/Top/Top.module.css";
import Image from 'next/image';
import img1 from "img/ryokan.jpg";

function Top() {
  const kyboxRef = useRef(null);

  useEffect(() => {
    const kybox = kyboxRef.current;
    const back = document.getElementById("back")
    const des = document.getElementById("des")
    back.classList.add(styles.fadeIn);
    kybox.classList.add(styles.fadeIn);
    des.classList.add(styles.fadeIn);
  }, []);

  return (
    <div className={styles.top}>
      <div className={styles.topsub}>
          <Image src={img1} className={styles.img1} alt="top" id="back"/>
          <div className={styles.kybox}>
            <p ref={kyboxRef} className={styles.description1}>「心に残る旅の思い出を。」</p>
            <div className={styles.description2} id="des">
              <p>歴史と文化が息づく温泉旅館。古き良き日本の情緒を感じるお部屋や、地元の食材を活かした料理で、日本の美を存分に堪能できます。特別なひとときを、ゆったりとお過ごしください。</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Top;

