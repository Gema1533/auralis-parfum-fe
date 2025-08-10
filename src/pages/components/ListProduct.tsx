import React from 'react'

const ListProduct = ({ nav = true }: { nav?: boolean }) => {
  return (
    <div className="stelina-tabs  defaul">
      <div className="container ">
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
        <div className="tab-container ">
          <div className="stelina-product ">
            <div className="grid grid-cols-3 grid-rows-3 gap-4 p-2 max-w-max !p-0">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="product-item   style-1">
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
  )
}

export default ListProduct
