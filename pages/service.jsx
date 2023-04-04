import Footer from '@/components/Footer/Footer'
import Header2 from '@/components/Header/Header2'
import Service from '@/components/Service/Service'
import React from 'react'
import styles from "styles/Home.module.css"

function service() {
  return (
    <div className={styles.all}>
      <Header2/>
      <Service/>
      <Footer/>
    </div>
  )
}

export default service