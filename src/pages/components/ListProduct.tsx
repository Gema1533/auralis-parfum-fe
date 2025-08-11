import React from 'react'

const ListProduct = ({ nav = true, paginate = false }: { nav?: boolean, paginate? : boolean }) => {
  return (
    <div className="flex flex-col">
      <div className="stelina-tabs   defaul">
        <div className="container !p-0">
          <div className={` tab-head  ${!nav && 'hidden'} `}>
            <ul className="tab-link">
              <li className="active">
                <a data-toggle="tab" aria-expanded="true" href="#bestseller">
                  Bestseller
                </a>
              </li>

              <li className="">
                <a data-toggle="tab" aria-expanded="true" href="#top-rated">
                  Top Rated
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-container mb-10 ">
            <div className="stelina-product ">
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 ">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="product-item !mb-0   style-1">
                    <div className="product-inner equal-element">
                      <div className="product-top">
                        <div className="flash">
                          <span className="onnew">
                            <span className="text">new</span>
                          </span>
                        </div>
                      </div>
                      <div className="product-thumb">
                        <div className="thumb-inner">
                          <a href="#">
                            <img
                              src="/assets/images/product-item-8.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-info">
                        <h5 className="product-name product_title">
                          <a href="#">Patiala Eau</a>
                        </h5>
                        <div className="group-info">
                          <div className="stars-rating">
                            <div className="star-rating">
                              <span className="star-3"></span>
                            </div>
                            <div className="count-star">(3)</div>
                          </div>
                          <div className="price">
                            <del>$65</del>
                            <ins>$45</ins>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className={`${!paginate && "hidden"} flex items-center space-x-2 gap-3 justify-center `}>
     
          <button className="!px-3 !py-1 rounded-lg !border !border-gray-300 !bg-white !text-gray-700 hover:!bg-[#ab8e66] hover:!text-white">
            Prev
          </button>

          <button className="!px-3 !py-1 rounded-lg !border !border-gray-300 !bg-[#ab8e66]">
            1
          </button>
          <button className="!px-3 !py-1 rounded-lg !border !border-gray-300 !bg-white !text-gray-700 hover:!bg-[#ab8e66] hover:!text-white">
            2
          </button>
          <button className="!px-3 !py-1 rounded-lg !border !border-gray-300 !bg-white !text-gray-700 hover:!bg-[#ab8e66] hover:!text-white">
            3
          </button>
          <span className="!px-2 text-gray-400">...</span>
          <button className="!px-3 !py-1 rounded-lg !border !border-gray-300 !bg-white !text-gray-700 hover:!bg-[#ab8e66] hover:!text-white">
            10
          </button>

          <button className="!px-3 !py-1 rounded-lg !border !border-gray-300 !bg-white !text-gray-700 hover:!bg-[#ab8e66] hover:!text-white">
            Next
          </button>

        </div>
    </div>
  )
}

export default ListProduct
