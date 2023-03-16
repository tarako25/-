import React from 'react'
import styles from "components/Front/Front.module.css"
import img1 from "img/top.jpg"
import Image from 'next/image'

function Front() {
  return (
    <div>
      <div className={styles.frontall}>
        <div className={styles.front}>
          <div className={styles.fronttop}>
            <div className={styles.left}>
              <h2>Lorem ipsum dolor sit.</h2>
              <p>Lorem ipsum dolor sit, amet lorem4consectetur adipisicing elit. Vero iste illum error maxime voluptas neque earum facere corrupti culpa eius.</p>
            </div>
            <div className={styles.right}>
              <Image src={img1} className={styles.img1}/>
            </div>
          </div>
        </div>
        <div className={styles.front2}>
          <div className={styles.fronttop}>
          <div className={styles.right}>
              <Image src={img1} className={styles.img1}/>
            </div>
            <div className={styles.left}>
              <h2>Lorem ipsum dolor sit amet consectetur.</h2>
              <p>Lorem ipsum dolor sit, amet Lorem ipsum dolor sit amet. consectetur adipisicing elit. Vero iste illum error maxime voluptas neque earum facere corrupti culpa eius.</p>
            </div>
          </div>
        </div>
        <div className={styles.front}>
          <div className={styles.fronttop}>
            <div className={styles.left}>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p>Lorem ipsum dolor sit, amet lorem4consectetur adipisicing elit. Vero iste illum error maxime voluptas neque earum facere corrupti culpa eius.</p>
            </div>
            <div className={styles.right}>
              <Image src={img1} className={styles.img1}/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.service}>
        <div className={styles.hl}>
          <h1>Service</h1>
        </div>
        <div className={styles.imgbox}>
            <div className={styles.box2}>
              <Image src={img1} className={styles.img3}/>
              <h3>Lorem ipsum dolor</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum qui obcaecati laboriosam assumenda fugiat voluptatem sunt vero ad adipisci odio.</p>
            </div>
            <div className={styles.box2}>
              <Image src={img1} className={styles.img3}/>
              <h3>Lorem ipsum dolor</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum qui obcaecati laboriosam assumenda fugiat voluptatem sunt vero ad adipisci odio.</p>
            </div>
            <div className={styles.box2}>
              <Image src={img1} className={styles.img3}/>
              <h3>Lorem ipsum dolor</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum qui obcaecati laboriosam assumenda fugiat voluptatem sunt vero ad adipisci odio.</p>
            </div>
            <div className={styles.box2}>
              <Image src={img1} className={styles.img3}/>
              <h3>Lorem ipsum dolor</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum qui obcaecati laboriosam assumenda fugiat voluptatem sunt vero ad adipisci odio.</p>
            </div>
            <div className={styles.box2}>
              <Image src={img1} className={styles.img3}/>
              <h3>Lorem ipsum dolor</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum qui obcaecati laboriosam assumenda fugiat voluptatem sunt vero ad adipisci odio.</p>
            </div>
            <div className={styles.box2}>
              <Image src={img1} className={styles.img3}/>
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
              <Image src={img1} className={styles.img2}/>
              <div className={styles.text}>
                <h3>CorseA</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, optio ipsa reprehenderit laboriosam excepturi.</p>
                <p className={styles.yen}>30000$</p>
              </div>
            </div>
            <div className={styles.box1}>
              <Image src={img1} className={styles.img2}/>
              <div className={styles.text}>
                <h3>CorseA</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit, optio ipsa reprehenderit laboriosam excepturi.</p>
                <p className={styles.yen}>30000$</p>
              </div>
            </div>
            <div className={styles.box1}>
              <Image src={img1} className={styles.img2}/>
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
              <Image src={img1} className={styles.img4}/>
              <p>【Lorem, ipsum dolor.】Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className={styles.article}>
              <Image src={img1} className={styles.img4}/>
              <p>【Lorem, ipsum dolor.】Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className={styles.article}>
              <Image src={img1} className={styles.img4}/>
              <p>【Lorem, ipsum dolor.】Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className={styles.article}>
              <Image src={img1} className={styles.img4}/>
              <p>【Lorem, ipsum dolor.】Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className={styles.article}>
              <Image src={img1} className={styles.img4}/>
              <p>【Lorem, ipsum dolor.】Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className={styles.article}>
              <Image src={img1} className={styles.img4}/>
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
          <div className={styles.Abox}>
            <span>A.</span>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum.</h2>
          </div>
          <div className={styles.Qbox}>
            <span>Q.</span>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit?</h2>
          </div>
          <div className={styles.Abox}>
            <span>A.</span>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum.</h2>
          </div>
          <div className={styles.Qbox}>
            <span>Q.</span>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit?</h2>
          </div>
          <div className={styles.Abox}>
            <span>A.</span>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum.</h2>
          </div>
        </div>
      </div>
      <div className={styles.acesess}>
        <div className={styles.hl}>
          <h1>Acesess</h1>
        </div>
      </div>
    </div>
  )
}

export default Front