import React from 'react'

function Navbar() {
  return (
    <header className="header style7">
      <div className="container">
        <div className="flex flex-wrap items-center my-3 justify-between ">
          <div className=" header-element">
            <div className="logo">
              <a href="/">
                <img
                  src="/assets/img/logo/mainLogo1.png"
                  className="!min-w md:!max-w-80"
                  alt="img"
                />
              </a>
            </div>
          </div>

          <div className="">
            <div className="header-control">
              <div className="block-minicart stelina-mini-cart block-header stelina-dropdown">
                <a
                  href="#"
                  className="shopcart-icon !text-white"
                  data-stelina="stelina-dropdown"
                >
                  <span className="count">0</span>
                </a>
                <div className="no-product stelina-submenu">
                  <p className="text">
                    You have
                    <span>0 item(s)</span>
                    in your bag
                  </p>
                </div>
              </div>
              <div className="block-minicart  block-header stelina-dropdown">
                <a
                  href="#"
                  data-stelina="stelina-dropdown"
                  className="text-[1.5em]"
                >
                  <span className="text-white font-bold  flaticon-user"></span>
                </a>
                <div className="header-account stelina-submenu">
                  <div className="header-user-form-tabs">
                    <ul className="tab-link">
                      <li className="active">
                        <a
                          data-toggle="tab"
                          aria-expanded="true"
                          href="#header-tab-login"
                        >
                          Login
                        </a>
                      </li>
                      <li>
                        <a
                          data-toggle="tab"
                          aria-expanded="true"
                          href="#header-tab-rigister"
                        >
                          Register
                        </a>
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
                            <a href="#">Lost your password?</a>
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
              <a className="menu-bar mobile-navigation menu-toggle " href="#">
                <span className="!bg-white"></span>
                <span className="!bg-white"></span>
                <span className="!bg-white"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="header-nav-container">
        <div className="container">
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
                    <a
                      href="/"
                      className="stelina-menu-item-title"
                      title="Home"
                    >
                      Home
                    </a>
                  </li>

                  {/*    <li className="menu-item  menu-item-has-children">
                    <a
                      href="inblog_right-siderbar.html"
                      className="stelina-menu-item-title"
                      title="Blogs"
                    >
                      Blogs
                    </a>
                    <span className="toggle-submenu"></span>
                    <ul className="submenu">
                      <li className="menu-item menu-item-has-children">
                        <a
                          href="#"
                          className="stelina-menu-item-title"
                          title="Blog Style"
                        >
                          Blog Style
                        </a>
                        <span className="toggle-submenu"></span>
                        <ul className="submenu">
                          <li className="menu-item">
                            <a href="bloggrid.html">Grid</a>
                          </li>
                          <li className="menu-item">
                            <a href="bloglist.html">List</a>
                          </li>
                          <li className="menu-item">
                            <a href="bloglist-leftsidebar.html">List Sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children">
                        <a
                          href="#"
                          className="stelina-menu-item-title"
                          title="Post Layout"
                        >
                          Post Layout
                        </a>
                        <span className="toggle-submenu"></span>
                        <ul className="submenu">
                          <li className="menu-item">
                            <a href="inblog_left-siderbar.html">Left Sidebar</a>
                          </li>
                          <li className="menu-item">
                            <a href="inblog_right-siderbar.html">
                              Right Sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li> */}
                  <li className="menu-item">
                    <a
                      href="/public/about"
                      className="stelina-menu-item-title"
                      title="About"
                    >
                      About
                    </a>
                  </li>

                  <li className="menu-item n">
                    <a href="/public/shop" title="Shop">
                      Shop
                    </a>
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
