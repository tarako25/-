import React, { useEffect } from 'react'
import styles from "components/Front/Front.module.css"
import img1 from "img/top.jpg"
import Image from 'next/image'
import HeadLine from '../HeadLine/HeadLine'
import s1 from "img/s1.jpg"
import s2 from "img/s2.jpg"
import s3 from "img/s3.jpg"
import s4 from "img/s4.jpg"
import s5 from "img/s5.jpg"
import s6 from "img/s6.jpg"
import c1 from "img/c1.jpg"
import c2 from "img/c2.jpg"
import c3 from "img/c3.jpg"


function Front() {

  useEffect(() => {
    const element1 = document.getElementById("element1");
    const element2 = document.getElementById("element2");
    const element3 = document.getElementById("element3");
    const element4 = document.getElementById("element4");
    const element5 = document.getElementById("element5");
    const handleScroll = () => {
    const fade1 = element1.getBoundingClientRect();
    const fade2 = element2.getBoundingClientRect();
    const fade3 = element3.getBoundingClientRect();
    const fade4 = element4.getBoundingClientRect();
    const fade5 = element5.getBoundingClientRect();
    const height1 = fade1.top;
    const height2 = fade2.top;
    const height3 = fade3.top;
    const height4 = fade4.top;
    const height5 = fade5.top;
  
    if( 1100 > height1){
      element1.classList.add(styles.slideIn);
      if( 1000 > height2){
        element2.classList.add(styles.slideIn);
        if( 1000 > height3){
          element3.classList.add(styles.slideIn);
          if( 1000 > height4){
            element4.classList.add(styles.slideIn);
            if( 1000 > height5){
              element5.classList.add(styles.slideIn);
            }
          }
        }
      }
    }
  }
     window.addEventListener("scroll", handleScroll);
  },[])

  return (
    <div>
      <HeadLine/>
      <div className={styles.service} id="element1">
        <div className={styles.hl}>
          <h1>旅館内サービス</h1>
        </div>
        <div className={styles.imgbox}>
            <div className={styles.box2}>
              <Image src={s1} className={styles.img3} alt="service0"/>
              <h3>イベントスペース</h3>
              <p>季節ごとによって陶芸や演奏会・マグロ解体ショーなどのイベントがこのフロアで行われます。※コロナの影響により一部イベントが行われない可能性があります</p>
            </div>
            <div className={styles.box2}>
              <Image src={s2} className={styles.img3} alt="service1"/>
              <h3>お食事</h3>
              <p>時期に合わせた旬の食材を贅沢に使った日本料理を味わうことが出来ます。※季節よって料理が異なります。</p>
            </div>
            <div className={styles.box2}>
              <Image src={s3} className={styles.img3} alt="service2"/>
              <h3>天然温泉</h3>
              <p>温泉に含まれる天然成分は、肌の美容や健康促進に効果があるとされ、古くから「美肌の湯」として親しまれています。外には岩盤浴があり景色を楽しみながら入浴できます。</p>
            </div>
            <div className={styles.box2}>
              <Image src={s4} className={styles.img3} alt="service3"/>
              <h3>サウナ</h3>
              <p>上質なヒノキ材が使用されたサウナの空間。天然の抗菌効果を持ち、湿度の高い環境でも美しさを保ち続ける優れた木材が、心身ともにリラックスさせます</p>
            </div>
            <div className={styles.box2}>
              <Image src={s5} className={styles.img3} alt="service4"/>
              <h3>アロマテラピー</h3>
              <p>当館のセラピストが、自然から抽出された植物の香りを用いて、リラックス効果や疲れの解消、ストレス軽減など、心身のバランスを整える効果が期待できます。</p>
            </div>
            <div className={styles.box2}>
              <Image src={s6} className={styles.img3} alt="service5"/>
              <h3>レクリエーション</h3>
              <p>卓球/ビリヤード/カラオケルーム/プールやジムなどが充実しており旅行先での思い出作りにぴったりです!!※コロナの影響により一部変更する可能性があります</p>
            </div>
        </div>
        <div className={styles.btn}>
          <p>もっと見る</p>
        </div>        
      </div>
      <div className={styles.prim} id="element2">
        <div className={styles.hl}>
          <h1>料金/コース</h1>
        </div>
        <div className={styles.imgbox2}>
            <div className={styles.box1}>
              <Image src={c1} className={styles.img2} alt="price1"/>
              <div className={styles.text}>
                <h3>スタンダートコース</h3>
                <p>お造り(2種)、小鉢、蒸し物、寿司(10巻)、タイの炊き込みご飯、季節のデザート、てっちり、山菜のかき揚げ、焼き物、磯辺揚げ、等</p>
                <p className={styles.yen}>7000円</p>
              </div>
            </div>
            <div className={styles.box1}>
              <Image src={c2} className={styles.img2} alt="price2"/>
              <div className={styles.text}>
                <h3>デラックスコース</h3>
                      <p>お造り(3種)、小鉢(2種)、蒸し物、寿司(5巻)、タイの炊き込みご飯、季節のデザート(2種)、てっちり、山菜のかき揚げ、つみれ鍋、さしみ盛り合わせ、伊勢エビ、等</p>
                <p className={styles.yen}>10000円</p>
              </div>
            </div>
            <div className={styles.box1}>
              <Image src={c3} className={styles.img2} alt="price3"/>
              <div className={styles.text}>
                <h3>プレミアムコース</h3>
                <p>お造り(3種)、小鉢(2種)、蒸し物、寿司(5巻)、タイの炊き込みご飯、季節のデザート(2種)、山菜のかき揚げ、つみれ鍋、さしみ盛り合わせ、グルクンの唐揚げ、タラバガニ、伊勢エビ、等</p>
                <p className={styles.yen}>15000円</p>
              </div>
            </div>
        </div>
        <div className={styles.btn}>
          <p>こちらから申し込む</p>
        </div>      
      </div>
      <div className={styles.news} id="element3">
        <div className={styles.hl}>
          <h1>お知らせ</h1>
        </div>
          <div className={styles.newsbox}>
            <div className={styles.article}>
              <div className={styles.img4}>
                <Image src={img1} alt="img" className={styles.img4s}/>
              </div>
              <p>【Lorem, ipsum dolor.】Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className={styles.article}>
              <div className={styles.img4}>
                <Image src={img1} alt="img" className={styles.img4s}/>
              </div>
              <p>【Lorem, ipsum dolor.】Lorem ipsum dolor sit amet consectetur.</p>
            </div>  
            <div className={styles.article}>
              <div className={styles.img4}>
                <Image src={img1} alt="img" className={styles.img4s}/>
              </div>
              <p>【Lorem, ipsum dolor.】Lorem ipsum dolor sit amet consectetur.</p>
            </div>  
            <div className={styles.article}>
              <div className={styles.img4}>
                <Image src={img1} alt="img" className={styles.img4s}/>
              </div>
              <p>【Lorem, ipsum dolor.】Lorem ipsum dolor sit amet consectetur.</p>
            </div>  
            <div className={styles.article}>
              <div className={styles.img4}>
                <Image src={img1} alt="img" className={styles.img4s}/>
              </div>
              <p>【Lorem, ipsum dolor.】Lorem ipsum dolor sit amet consectetur.</p>
            </div>  
            <div className={styles.article}>
              <div className={styles.img4}>
                <Image src={img1} alt="img" className={styles.img4s}/>
              </div>
              <p>【Lorem, ipsum dolor.】Lorem ipsum dolor sit amet consectetur.</p>
            </div>           
          </div>
          <div className={styles.btn}>
            More
          </div>
      </div>
      <div className={styles.QAall} id="element4">
        <div className={styles.hl}>
          <h1>よくある質問</h1>
        </div>
        <div className={styles.QAboxs}>
          <div className={styles.QAbox}>
            <div className={styles.Qbox}>
              <span>Q.</span>
              <h2>チェックインとチェックアウトの時間は何時ですか？</h2>
            </div>
            <div className={styles.Abox}>
              <span>A.</span>
              <h2>チェックインは8:00~22:00まで受け付けており、チェックアウトはいつでも可能です。</h2>
            </div>
          </div>
          <div className={styles.QAbox}>
            <div className={styles.Qbox}>
              <span>Q.</span>
              <h2>館内でのWi-Fiは利用できるか？</h2>
            </div>
            <div className={styles.Abox}>
              <span>A.</span>
              <h2>フロント室内にて当館専用のフリーWi-Fiが用意されています。</h2>
            </div>
          </div>
          <div className={styles.QAbox}>
            <div className={styles.Qbox}>
              <span>Q.</span>
              <h2>客室に風呂やシャワーは付いているのか？</h2>
            </div>
            <div className={styles.Abox}>
              <span>A.</span>
              <h2>客室には、シャワー、トイレ、冷蔵庫、テレビ、電話などがあります。</h2>
            </div>
          </div>
          <div className={styles.QAbox}>
            <div className={styles.Qbox}>
              <span>Q.</span>
              <h2>予約した際のキャンセル料はいくらかかりますか?</h2>
            </div>
            <div className={styles.Abox}>
              <span>A.</span>
              <h2>予約の当日までにキャンセルの連絡があった場合キャンセル料はかかりません。当日の場合2万円のキャンセル料がかかります</h2>
            </div>
          </div>
          <div className={styles.QAbox}>
            <div className={styles.Qbox}>
              <span>Q.</span>
              <h2>支払のタイミングは?</h2>
            </div>
            <div className={styles.Abox}>
              <span>A.</span>
              <h2>本ページからの予約でのカード支払いや、館内でチェックイン時に支払う2択になります。</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.access} id="element5">
        <div className={styles.hl}>
          <h1>交通案内</h1>
        </div>
        <div className={styles.acbox}>
          <div className={styles.acleft}>
            <h2>温泉旅館「柳屋」</h2>
            <p>TEL 090-12342-56702</p>
            <p>〒 121-23434</p>
            <p>1918年（大正07年）09月</p>
            <p>福岡市墨田区押上1丁目1-2-21</p>
            <p>箱崎駅から柳屋行きバスから14分/箱崎駅から車で10分</p>
            <p>6:00~24:00まで受付対応</p>
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