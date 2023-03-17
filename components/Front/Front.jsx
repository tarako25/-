import React from 'react'
import styles from "components/Front/Front.module.css"
import img1 from "img/top.jpg"
import Image from 'next/image'

function Front() {
  return (
    <div>
      <div className={styles.service}>
        <div className={styles.hl}>
          <h1>Service</h1>
        </div>
        <div className={styles.imgbox}>
            <div className={styles.box2}>
              <Image src={img1} className={styles.img3} alt="service0"/>
              <h3>Lorem ipsum dolor</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum qui obcaecati laboriosam assumenda fugiat voluptatem sunt vero ad adipisci odio.</p>
            </div>
            <div className={styles.box2}>
              <Image src={img1} className={styles.img3} alt="service1"/>
              <h3>Lorem ipsum dolor</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum qui obcaecati laboriosam assumenda fugiat voluptatem sunt vero ad adipisci odio.</p>
            </div>
            <div className={styles.box2}>
              <Image src={img1} className={styles.img3} alt="service2"/>
              <h3>Lorem ipsum dolor</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum qui obcaecati laboriosam assumenda fugiat voluptatem sunt vero ad adipisci odio.</p>
            </div>
            <div className={styles.box2}>
              <Image src={img1} className={styles.img3} alt="service3"/>
              <h3>Lorem ipsum dolor</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum qui obcaecati laboriosam assumenda fugiat voluptatem sunt vero ad adipisci odio.</p>
            </div>
            <div className={styles.box2}>
              <Image src={img1} className={styles.img3} alt="service4"/>
              <h3>Lorem ipsum dolor</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum qui obcaecati laboriosam assumenda fugiat voluptatem sunt vero ad adipisci odio.</p>
            </div>
            <div className={styles.box2}>
              <Image src={img1} className={styles.img3} alt="service5"/>
              <h3>Lorem ipsum dolor</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum qui obcaecati laboriosam assumenda fugiat voluptatem sunt vero ad adipisci odio.</p>
            </div>
        </div>
        <div className={styles.btn}>
          <p>More</p>
        </div>        
      </div>
      <div className={styles.prim}>
        <div className={styles.hl}>
          <h1>Prim&Corse</h1>
        </div>
        <div className={styles.imgbox}>
            <div className={styles.box1}>
              <Image src={img1} className={styles.img2} alt="price1"/>
              <div className={styles.text}>
                <h3>CorseA</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, optio ipsa reprehenderit laboriosam excepturi.</p>
                <p className={styles.yen}>30000$</p>
              </div>
            </div>
            <div className={styles.box1}>
              <Image src={img1} className={styles.img2} alt="price2"/>
              <div className={styles.text}>
                <h3>CorseA</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, optio ipsa reprehenderit laboriosam excepturi.</p>
                <p className={styles.yen}>30000$</p>
              </div>
            </div>
            <div className={styles.box1}>
              <Image src={img1} className={styles.img2} alt="price3"/>
              <div className={styles.text}>
                <h3>CorseA</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, optio ipsa reprehenderit laboriosam excepturi.</p>
                <p className={styles.yen}>30000$</p>
              </div>
            </div>
        </div>
        <div className={styles.btn}>
          <p>Click here to apply</p>
        </div>      
      </div>
      <div className={styles.news}>
        <div className={styles.hl}>
          <h1>News</h1>
        </div>
          <div className={styles.newsbox}>
            <div className={styles.article}>
              <Image src={img1} className={styles.img4} alt="news1"/>
              <p>【Lorem, ipsum dolor.】Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className={styles.article}>
              <Image src={img1} className={styles.img4} alt="news2"/>
              <p>【Lorem, ipsum dolor.】Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className={styles.article}>
              <Image src={img1} className={styles.img4} alt="news3"/>
              <p>【Lorem, ipsum dolor.】Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className={styles.article}>
              <Image src={img1} className={styles.img4} alt="news4"/>
              <p>【Lorem, ipsum dolor.】Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className={styles.article}>
              <Image src={img1} className={styles.img4} alt="news5"/>
              <p>【Lorem, ipsum dolor.】Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className={styles.article}>
              <Image src={img1} className={styles.img4} alt="news6"/>
              <p>【Lorem, ipsum dolor.】Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className={styles.btn}>
            More
          </div>
      </div>
      <div className={styles.QAall}>
        <div className={styles.hl}>
          <h1>Q&A</h1>
        </div>
        <div className={styles.QAboxs}>
          <div className={styles.Qbox}>
            <span>Q.</span>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit?</h2>
          </div>
          <div className={styles.Qbox}>
            <span>Q.</span>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit?</h2>
          </div>
          <div className={styles.Qbox}>
            <span>Q.</span>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit?</h2>
          </div>
        </div>
      </div>
      <div className={styles.access}>
        <div className={styles.hl}>
          <h1>Access</h1>
        </div>
        <div className={styles.acbox}>
          <div className={styles.acleft}>
            <h2>Lorem ipsum</h2>
            <p>TEL 090-XXXX-XXXX</p>
            <p>〒 XXX-XXXX</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className={styles.acright}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.663210352083!2d139.80812331555146!3d35.7099045860057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ed0d12f9adf%3A0x7d1d4fb31f43f72a!2z5p2x5Lqs44K544Kr44Kk44OE44Oq44O8!5e0!3m2!1sja!2sjp!4v1678942735541!5m2!1sja!2sjp" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.map}></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Front