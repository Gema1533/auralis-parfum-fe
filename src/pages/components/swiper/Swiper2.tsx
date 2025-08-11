import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'


const Swiper2 = () => {
  return (
    <div className="h-[25em]  overflow-hidden">
      <Swiper
        modules={[Pagination,Autoplay]}
        slidesPerView={1}
        pagination
        autoplay={{
          delay: 4000,
        }}
      >
        <SwiperSlide>
          <div className="slider-item style1">
            <div className="slider-inner equal-element">
              <div className="slider-infor">
                <h5 className="title-small">New Arrivals!</h5>
                <h3 className="title-big">
                  Scandinavians
                  <br />
                  Collection
                </h3>
                <div className="price">
                  Price from:
                  <span className="number-price">$75.00</span>
                </div>
                <a href="#" className="button btn-shop-the-look bgroud-style">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className="slider-item style2">
            <div className="slider-inner equal-element">
              <div className="slider-infor">
                <h5 className="title-small">Table Supplies Sale!</h5>
                <h3 className="title-big">
                  Up to <span>75%</span> <br /> Store Items
                </h3>
                <div className="price">
                  Price from:
                  <span className="number-price">$95.00</span>
                </div>
                <a href="#" className="button btn-shop-now">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className="slider-item style3">
            <div className="slider-inner equal-element">
              <div className="slider-infor">
                <h5 className="title-small">New Arrivals!</h5>
                <h3 className="title-big">
                  Trending <br />
                  Collection
                </h3>
                <div className="price">
                  Price from:
                  <span className="number-price">$75.00</span>
                </div>
                <a href="#" className="button btn-shop-the-look bgroud-style">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Swiper2
