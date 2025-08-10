import React from 'react'
import FilterSection from '../components/FilterSection'
import ListProduct from '../components/ListProduct'

const shop = () => {
  return (
    <div className="stelina-tabs  default rows-space-40">
      <div className="container text-center">
        <h3 className="!text-white !my-10">Our Products</h3>
        <FilterSection />
        <div className="mt-15">
          <ListProduct nav={false} />
        </div>
      </div>
    </div>
  )
}

export default shop
