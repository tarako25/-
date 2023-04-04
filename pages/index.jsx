import Footer from '@/components/Footer/Footer'
import Front from '@/components/Front/Front'
import Top from '@/components/Top/Top'
import Header from 'components/Header/Header'
import React from 'react'
import styles from "styles/Home.module.css"

function index() {

  return (
    <div className={styles.all}>
      <Header/>
      <Top/>
      <Front/>
      <Footer/>
    </div>
  )
}

export default index;