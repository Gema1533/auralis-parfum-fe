import React from 'react'
import HomeSlider from '../components/HomeSlider'
import BoxBanner from '../components/BoxBanner'
import LongBanner1 from '../components/LongBanner1'
import BoxDesc from '../components/BoxDesc'
import ListProduct from '../components/ListProduct'

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <BoxBanner/>
      <ListProduct/>
      <div className='mt-5'>
      <LongBanner1/>
      </div>
      <BoxDesc/>
    </div>
  )
}

export default Home
