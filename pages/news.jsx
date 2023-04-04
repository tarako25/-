import Footer from '@/components/Footer/Footer'
import News from '@/components/News/News'
import Header2 from '@/components/Header/Header2'
import React from 'react'
import styles from "styles/Home.module.css"

function news() {
  return (
    <div className={styles.all}>
      <Header2/>
      <News/>
      <Footer/>
    </div>
  )
}

export default news