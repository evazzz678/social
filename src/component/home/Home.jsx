import React, { useState } from 'react'
import Header from '../header/Header'
import "./Home.css"
import Sidebar from './../../component/sidebar/Sidebar'
import Feeds from "./../../component/feeds/Feeds"
import Stories from '../stories/Stories'
import Posts from '../posts/Posts'


import pic1 from "./../../assets/pic1.jpg"
import pic2 from "./../../assets/pic2.jpg"

function Home() {



  return (
    <div className='home'>






      <div className='content-page'>


        <div className='content-page-2'>
          {/* <Feeds /> */}
          {/* /*<Feeds />
          <Feeds /> */}

          <Posts pic1={pic1} pic2={pic2} />
          <Posts pic1={pic1} pic2={pic2} />
          <Posts pic1={pic1} pic2={pic2} />

        </div>


      </div>



    </div>
  )
}

export default Home