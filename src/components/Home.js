import React from 'react'
import Carousel from './Carousel.js'

const Home = () => {
  return (<>
    <div className='home'>
        <h1 >Featured Product</h1>
        <p>Explore and discover a variety of products</p>
    </div>
    <Carousel key="yoyo"/>
    </>
  )
}

export default Home