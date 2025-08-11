import React from 'react'
import Swiper2 from './swiper/Swiper2'

const ProductInformation = () => {
  return (
    <div className="container  !p-0">
      <div className="row ">
        <div className="content-area !text-white">
          <div className="site-main">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-15 gap-y-10">
              <div className="">
                <Swiper2 />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h1 className="product-title !text-white">Glorious Eau</h1>
                <div className="stars-rating">
                  <div className="star-rating">
                    <span className="star-5"></span>
                  </div>
                  <div className="count-star">(7)</div>
                </div>
                <div className="availability !text-white">
                  availability:
                  <a href="#">in Stock</a>
                </div>
                <div className="price !text-white">
                  <span>$45</span>
                </div>
                <div className="product-details-description !text-white">
                  <ul>
                    <li>Vestibulum tortor quam</li>
                    <li>Imported</li>
                    <li>Art.No. 06-7680</li>
                  </ul>
                </div>
                <div className="variations">
                  <div className="attribute attribute_size flex items-center mt-5">
                  <div className="list-size flex  !-0">
                         <div className="me-2">Size:</div>
                      <a href="#" className="">
                        50 ml
                      </a>
                      <a href="#" className="">
                        70 ml
                      </a>
                      <a href="#" className="active">
                        100 ml
                      </a>
                    </div>
                  </div>
                </div>
                <div className="group-button ">
        
                  <div className="quantity-add-to-cart flex mt-5">
                    <div className="quantity">
                      <div className="control">
                        <a
                          className="btn-number qtyminus quantity-minus"
                          href="#"
                        >
                          -
                        </a>
                        <input
                          type="text"
                          data-step="1"
                          data-min="0"
                          value="1"
                          title="Qty"
                          className="input-qty qty !text-white"
                          size={4}
                        />
                        <a
                          href="#"
                          className="btn-number qtyplus quantity-plus"
                        >
                          +
                        </a>
                      </div>
                    </div>
                    <button className="single_add_to_cart_button button !ms-4">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-details-product">
              <ul className="tab-link">
                <li className="active">
                  <a
                    data-toggle="tab"
                    aria-expanded="true"
                    href="#product-descriptions"
                  >
                    Descriptions{' '}
                  </a>
                </li>
              </ul>
              <div className="tab-container">
                <div id="product-descriptions" className="tab-panel active">
                  <p>
                    Quisque quis ipsum venenatis, fermentum ante volutpat,
                    ornare enim. Phasellus molestie risus non aliquet cursus.
                    Integer vestibulum mi lorem, id hendrerit ante lobortis non.
                    Nunc ante ante, lobortis non pretium non, vulputate vel
                    nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor
                    vulputate nulla. Phasellus sed laoreet velit.
                  </p>
                  <p>
                    Proin fringilla urna vel mattis euismod. Etiam sodales,
                    massa non tincidunt iaculis, mauris libero scelerisque
                    justo, ut rutrum lectus urna sit amet quam. Nulla maximus
                    vestibulum mi vitae accumsan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInformation
