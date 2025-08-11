import React from 'react'
import FilterSection from '../components/FilterSection'
import ListProduct from '../components/ListProduct'

const shop = () => {
  return (
    <div className="stelina-tabs  default rows-space-40">
      <div className="container  text-center">
        <h3 className="!text-white !mb-5">Our Products</h3>
        <FilterSection />
        <div className="mt-10">
          <ListProduct nav={false} paginate={true} />
        </div>
      </div>
    </div>
  )
}

export default shop
