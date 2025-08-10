import React from 'react'

const BoxDesc = () => {
  return (
    <div className="container text-white mt-10">
      <h3 className="custommenu-title-blog">Our Latest News</h3>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6 sm:col-span-4  stelina-blog-item equal-element layout1">
          <div className="post-thumb">
            <a href="#">
              <img src="assets/images/slider-blog-thumb-1.jpg" alt="img" />
            </a>
            <div className="category-blog">
              <ul className="list-category">
                <li className="category-item">
                  <a href="#">Skincare</a>
                </li>
              </ul>
            </div>
            <div className="post-item-share">
              <a href="#" className="icon">
                <i className="fa fa-share-alt" aria-hidden="true"></i>
              </a>
              <div className="box-content">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a href="#">
                  <i className="fa fa-pinterest"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="blog-info">
            <div className="blog-meta">
              <div className="post-date">Agust 17, 09:14 am</div>
              <span className="view">
                <i className="icon fa fa-eye" aria-hidden="true"></i>
                631
              </span>
              <span className="comment">
                <i className="icon fa fa-commenting" aria-hidden="true"></i>
                84
              </span>
            </div>
            <h2 className="blog-title">
              <a href="#" className='!text-white'>We bring you the best by working</a>
            </h2>
            <div className="main-info-post">
              <p className="des">
                Phasellus condimentum nulla a arcu lacinia, a venenatis ex
                congue. Mauris nec ante magna.
              </p>
              <a className="readmore" href="#">
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4  stelina-blog-item equal-element layout1">
          <div className="post-thumb">
            <a href="#">
              <img src="assets/images/slider-blog-thumb-1.jpg" alt="img" />
            </a>
            <div className="category-blog">
              <ul className="list-category">
                <li className="category-item">
                  <a href="#">Skincare</a>
                </li>
              </ul>
            </div>
            <div className="post-item-share">
              <a href="#" className="icon">
                <i className="fa fa-share-alt" aria-hidden="true"></i>
              </a>
              <div className="box-content">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a href="#">
                  <i className="fa fa-pinterest"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="blog-info">
            <div className="blog-meta">
              <div className="post-date">Agust 17, 09:14 am</div>
              <span className="view">
                <i className="icon fa fa-eye" aria-hidden="true"></i>
                631
              </span>
              <span className="comment">
                <i className="icon fa fa-commenting" aria-hidden="true"></i>
                84
              </span>
            </div>
            <h2 className="blog-title">
              <a href="#" className='!text-white'>We bring you the best by working</a>
            </h2>
            <div className="main-info-post">
              <p className="des">
                Phasellus condimentum nulla a arcu lacinia, a venenatis ex
                congue. Mauris nec ante magna.
              </p>
              <a className="readmore" href="#">
                Read more
              </a>
            </div>
          </div>
        </div>
   
      </div>
    </div>
  )
}

export default BoxDesc
