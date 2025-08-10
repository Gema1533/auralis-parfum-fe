import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebook, FaTiktok } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { SiShopee } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="footer style7 mt-10 !p-0">
      <div className="container">
        <div className="container-wapper ">
          <div className="row ">
            <div className="box-footer col-xs-12 col-sm-4 col-md-4 col-lg-4 hidden-sm hidden-md hidden-lg">
              <div className="stelina-newsletter style1">
                <div className="flex justify-center my-10">
                    <a href="/">
                    <img
                      src="/assets/img/logo/mainLogo1.png"
                      className="!min-w !max-w-80"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="newsletter-form-wrap">
                  <div className="list">
                    Sign up for our free video course and <br /> urban garden
                    inspiration
                  </div>
                  <input
                    type="email"
                    className="input-text email email-newsletter"
                    placeholder="Your email letter"
                  />
                  <button className="button btn-submit submit-newsletter">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
            <div className="box-footer col-xs-6 !mt-0 col-sm-4 col-md-4 col-lg-4">
              <div className="stelina-custommenu default">
                <h2 className="widgettitle">Quick Menu</h2>
                <ul className="menu">
                  <li className="menu-item">
                    <a href="#">New arrivals</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Life style</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Accents</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Tables</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Dining</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box-footer col-xs-12 col-sm-4 col-md-4 col-lg-4 hidden-xs">
              <div className="stelina-newsletter style1">
                <div className="flex justify-center my-10">
                  <a href="/">
                    <img
                      src="/assets/img/logo/mainLogo1.png"
                      className="!min-w !max-w-80"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="newsletter-form-wrap">
                  <div className="list">
                    Sign up for our free video course and <br /> urban garden
                    inspiration
                  </div>
                  <ul className="flex justify-center items-center !mb-10 gap-20 text-[2em]">
                  <li className="">
                    <a href="#" className="social-item bg-red" target="_blank">
                      <FaTiktok />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-item" target="_blank">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-item" target="_blank">
                      <SiShopee />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-item" target="_blank">
                      <AiFillInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-item" target="_blank">
                      <IoLogoWhatsapp />
                    </a>
                  </li>
                </ul>
                </div>
              </div>
            </div>
            <div className="box-footer col-xs-6 col-sm-4 col-md-4 col-lg-4">
              <div className="stelina-custommenu default">
                <h2 className="widgettitle">Information</h2>
                <ul className="menu">
                  <li className="menu-item">
                    <a href="#">FAQs</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Track Order</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Delivery</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Contact Us</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Return</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-end">
            <div className="row">
              <div className="col-sm-12 col-xs-12">
          
                <div className="coppyright">
                  Copyright © 2025
                  <a href="#"> Auralis Parfum</a>. All rights reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
