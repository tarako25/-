import Footer from '@/components/Footer/Footer'
import Header2 from '@/components/Header/Header2'
import Reserve from '@/components/Reserve/Reserve'
import React from 'react'
import styles from "styles/Home.module.css"

function reserve() {
  return (
    <div className={styles.all}>
      <Header2/>
      <Reserve/>
      <Footer/>
    </div>
  )
}

export default reserve