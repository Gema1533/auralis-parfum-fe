import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <header className="header style7">
      <div className="container !p-x-2">
        <div className="flex flex-wrap items-center my-3 justify-between ">
          <div className=" header-element">
            <div className="logo">
              <Link href="/">
                <img
                  src="/assets/img/logo/mainLogo1.png"
                  className="!min-w md:!max-w-80"
                  alt="img"
                />
              </Link>
            </div>
          </div>

          <div className="">
            <div className="header-control">
              <div className="block-minicart stelina-mini-cart block-header stelina-dropdown">
                <Link
                  href="#"
                  className="shopcart-icon !text-white"
                  data-stelina="stelina-dropdown"
                >
                  <span className="count">0</span>
                </Link>
                <div className="no-product stelina-submenu">
                  <p className="text">
                    You have
                    <span>0 item(s)</span>
                    in your bag
                  </p>
                </div>
              </div>
              <div className="block-minicart  block-header stelina-dropdown">
                <Link
                  href="#"
                  data-stelina="stelina-dropdown"
                  className="text-[1.5em]"
                >
                  <span className="text-white font-bold  flaticon-user"></span>
                </Link>
                <div className="header-account stelina-submenu">
                  <div className="header-user-form-tabs">
                    <ul className="tab-link">
                      <li className="active">
                        <Link
                          data-toggle="tab"
                          aria-expanded="true"
                          href="#header-tab-login"
                        >
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link
                          data-toggle="tab"
                          aria-expanded="true"
                          href="#header-tab-rigister"
                        >
                          Register
                        </Link>
                      </li>
                    </ul>
                    <div className="tab-container">
                      <div id="header-tab-login" className="tab-panel active">
                        <form method="post" className="login form-login">
                          <p className="form-row form-row-wide">
                            <input
                              type="email"
                              placeholder="Email"
                              className="input-text"
                            />
                          </p>
                          <p className="form-row form-row-wide">
                            <input
                              type="password"
                              className="input-text"
                              placeholder="Password"
                            />
                          </p>
                          <p className="form-row">
                            <label className="form-checkbox">
                              <input
                                type="checkbox"
                                className="input-checkbox"
                              />
                              <span>Remember me</span>
                            </label>
                            <input
                              type="submit"
                              className="button"
                              value="Login"
                            />
                          </p>
                          <p className="lost_password">
                            <Link href="#">Lost your password?</Link>
                          </p>
                        </form>
                      </div>
                      <div id="header-tab-rigister" className="tab-panel">
                        <form method="post" className="register form-register">
                          <p className="form-row form-row-wide">
                            <input
                              type="email"
                              placeholder="Email"
                              className="input-text"
                            />
                          </p>
                          <p className="form-row form-row-wide">
                            <input
                              type="password"
                              className="input-text"
                              placeholder="Password"
                            />
                          </p>
                          <p className="form-row">
                            <input
                              type="submit"
                              className="button"
                              value="Register"
                            />
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link className="menu-bar mobile-navigation menu-toggle " href="#">
                <span className="!bg-white"></span>
                <span className="!bg-white"></span>
                <span className="!bg-white"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="header-nav-container">
        <div className="container !p-0">
          <div className="header-nav-wapper main-menu-wapper">
            <div className="vertical-wapper block-nav-categori">
              <div className="block-title ">
                <span className="icon-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span className="text">All Categories</span>
              </div>
            </div>
            <div className="header-nav">
              <div className="container-wapper">
                <ul
                  className="stelina-clone-mobile-menu stelina-nav main-menu "
                  id="menu-main-menu"
                >
                  <li className="menu-item  ">
                    <Link
                      href="/"
                      className="stelina-menu-item-title"
                      title="Home"
                    
                    >
      Home

                    </Link>
                
                  </li>

                  {/*    <li className="menu-item  menu-item-has-children">
                    <Link
                      href="inblog_right-siderbar.html"
                      className="stelina-menu-item-title"
                      title="Blogs"
                    >
                      Blogs
                    </Link>
                    <span className="toggle-submenu"></span>
                    <ul className="submenu">
                      <li className="menu-item menu-item-has-children">
                        <Link
                          href="#"
                          className="stelina-menu-item-title"
                          title="Blog Style"
                        >
                          Blog Style
                        </Link>
                        <span className="toggle-submenu"></span>
                        <ul className="submenu">
                          <li className="menu-item">
                            <Link href="bloggrid.html">Grid</Link>
                          </li>
                          <li className="menu-item">
                            <Link href="bloglist.html">List</Link>
                          </li>
                          <li className="menu-item">
                            <Link href="bloglist-leftsidebar.html">List Sidebar</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children">
                        <Link
                          href="#"
                          className="stelina-menu-item-title"
                          title="Post Layout"
                        >
                          Post Layout
                        </Link>
                        <span className="toggle-submenu"></span>
                        <ul className="submenu">
                          <li className="menu-item">
                            <Link href="inblog_left-siderbar.html">Left Sidebar</Link>
                          </li>
                          <li className="menu-item">
                            <Link href="inblog_right-siderbar.html">
                              Right Sidebar
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li> */}
                  <li className="menu-item">
                    <Link
                      href="/public/about"
                      className="stelina-menu-item-title"
                      title="About"
                    >
                      About
                    </Link>
                  </li>

                  <li className="menu-item n">
                    <Link href="/public/shop" title="Shop">
                      Shop
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
