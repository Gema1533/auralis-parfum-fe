import React from 'react'

const BoxBanner = () => {
  return (
    <div className="banner-wrapp rows-space-35">
      <div className="container">
        <div className="grid gap-x-10 grid-cols-12 ">
          <div className="col-span-12 md:col-span-4 ">
            <div className="banner">
              <div className="item-banner style14">
                <div className="inner">
                  <div className="banner-content">
                    <h4 className="stelina-subtitle">End this weekend</h4>
                    <h3 className="title">
                      Big Sale <br />
                      75% Off
                    </h3>
                    <div className="code">
                      Use promo Code:
                      <span className="nummer-code">STELINA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-4">
            <div className="banner">
              <div className="item-banner style12 ">
                <div className="inner">
                  <div className="banner-content">
                    <h3 className="title">Best Seller</h3>
                    <div className="description">
                      Check out our your <br /> perfume collection now!
                    </div>
                    <a href="#" className="button btn-shop-now">
                      Shop now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-4">
            <div className="banner">
              <div className="item-banner style12 type2">
                <div className="inner">
                  <div className="banner-content">
                    <h3 className="title">Lookbook</h3>
                    <div className="description">
                      New Jewelry Collections <br />
                      Summer Lookbook
                    </div>
                    <a href="#" className="button btn-view-the-look">
                      Shop now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxBanner
