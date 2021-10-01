import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <header id="home">
          <div className="top-bar py-2 border-bottom">
            <div className="container">
              <div className="row middle-flex">
                <div className="col-xl-7 col-md-5 top-social-agile mb-md-0 mb-1 text-lg-left text-center">
                  <div className="row">
                    <div className="col-xl-3 col-6 header-top_w3layouts">
                      <p className="text-da">
                        <span className="fa fa-map-marker mr-2" />
                        Parma Via, Italy
                      </p>
                    </div>
                    <div className="col-xl-3 col-6 header-top_w3layouts">
                      <p className="text-da">
                        <span className="fa fa-phone mr-2" />
                        +1 000263676
                      </p>
                    </div>
                    <div className="col-xl-6" />
                  </div>
                </div>
                <div className="col-xl-5 col-md-7 top-social-agile text-md-right text-center pr-sm-0 mt-md-0 mt-2">
                  <div className="row middle-flex">
                    <div className="col-lg-5 col-4 top-w3layouts p-md-0 text-right">
                      <a
                        href="login.html"
                        className="btn login-button-2 text-uppercase text-wh"
                      >
                        <span className="fa fa-sign-in mr-2" />
                        Login
                      </a>
                    </div>
                    <div className="col-lg-7 col-8 social-grid-w3">
                      <ul className="top-right-info">
                        <li>
                          <p>Follow Us:</p>
                        </li>
                        <li className="facebook-w3">
                          <a href="#facebook">
                            <span className="fa fa-facebook-f" />
                          </a>
                        </li>
                        <li className="twitter-w3">
                          <a href="#twitter">
                            <span className="fa fa-twitter" />
                          </a>
                        </li>
                        <li className="google-w3">
                          <a href="#google">
                            <span className="fa fa-google-plus" />
                          </a>
                        </li>
                        <li className="dribble-w3">
                          <a href="#dribble">
                            <span className="fa fa-dribbble" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="main-top py-1">
          <div className="container">
            <div className="nav-content">
              <h1>
                <a id="logo" className="logo" href="index.html">
                  <img src="images/logo.png" alt="" className="img-fluid" />
                  <span>Tasty</span> Burger
                </a>
              </h1>
              <div className="nav_web-dealingsls">
                <nav>
                  <label htmlFor="drop" className="toggle">
                    Menu
                  </label>
                  <input type="checkbox" id="drop" />
                  <ul className="menu">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <label htmlFor="drop-3" className="toggle toogle-2">
                        Pages{" "}
                        <span className="fa fa-angle-down" aria-hidden="true" />
                      </label>
                      <a href="#pages">
                        Pages{" "}
                        <span className="fa fa-angle-down" aria-hidden="true" />
                      </a>
                      <input type="checkbox" id="drop-3" />
                      <ul>
                        <li>
                          <a className="drop-text" href="#services">
                            Services
                          </a>
                        </li>
                        <li>
                          <a className="drop-text" href="about.html">
                            Our Chefs
                          </a>
                        </li>
                        <li>
                          <a className="drop-text" href="#blog">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a className="drop-text" href="single.html">
                            Single Page
                          </a>
                        </li>
                        <li>
                          <a className="drop-text" href="login.html">
                            Login
                          </a>
                        </li>
                        <li>
                          <a className="drop-text" href="register.html">
                            Register
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="menu.html">Menu</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                    <li>
                      <a
                        href="https://w3layouts.com/"
                        target="_blank"
                        className="dwn-button ml-lg-5"
                      >
                        <span
                          className="fa fa-cloud-download mt-lg-0 mt-4"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="baneer-w3ls">
          <div className="row no-gutters">
            <div className="col-xl-5 col-lg-6">
              <div className="banner-left-w3">
                <div className="container">
                  <div className="banner-info_agile_w3ls">
                    <h5>Only Fresh Burgers</h5>
                    <h3 className="text-da mb-4">
                      Flame <span>Grilled Burger</span>{" "}
                    </h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium
                    </p>
                    <a href="about.html" className="button-w3ls active mt-5">
                      Read More
                      <span
                        className="fa fa-caret-right ml-1"
                        aria-hidden="true"
                      />
                    </a>
                    <a href="menu.html" className="button-w3ls mt-5 ml-2">
                      Order Now
                      <span
                        className="fa fa-caret-right ml-1"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 callbacks_container">
              <div className="csslider infinity" id="slider1">
                <input
                  type="radio"
                  name="slides"
                  defaultChecked="checked"
                  id="slides_1"
                />
                <input type="radio" name="slides" id="slides_2" />
                <input type="radio" name="slides" id="slides_3" />
                <ul className="banner_slide_bg">
                  <li>
                    <div className="banner-top1" />
                  </li>
                  <li>
                    <div className="banner-top2" />
                  </li>
                  <li>
                    <div className="banner-top3" />
                  </li>
                </ul>
                <div className="arrows">
                  <label htmlFor="slides_1" />
                  <label htmlFor="slides_2" />
                  <label htmlFor="slides_3" />
                </div>
                <div className="navigation">
                  <div>
                    <label htmlFor="slides_1" />
                    <label htmlFor="slides_2" />
                    <label htmlFor="slides_3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="about-bottom">
          <div className="row no-gutters">
            <div className="col-lg-5 col-md-6 about"></div>
            <div className="col-lg-7 col-md-6 about-right-w3 text-right py-md-5">
              <div className="right-space py-xl-5 py-lg-3">
                <div className="title-section mb-4">
                  <p className="w3ls-title-sub">About Us</p>
                  <h3 className="w3ls-title">
                    Welcome to <span>Tasty Burger</span>
                  </h3>
                </div>
                <p className="about-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem
                  quia voluptas sit.
                </p>
                <a href="about.html" className="button-w3ls mt-5">
                  Read More
                  <span className="fa fa-caret-right ml-1" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <section className="blog_w3ls py-5">
          <div className="container pb-xl-5 pb-lg-3">
            <div className="title-section text-center mb-md-5 mb-4">
              <p className="w3ls-title-sub">Tasty</p>
              <h3 className="w3ls-title">
                Our <span>Special</span>
              </h3>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="card border-0 med-blog">
                  <div className="card-header p-0">
                    <a href="menu.html">
                      <img
                        className="card-img-bottom"
                        src="images/blog1.jpg"
                        alt="Card image cap"
                      />
                    </a>
                  </div>
                  <div className="card-body border border-top-0">
                    <h5 className="blog-title card-title m-0">
                      <a href="menu.html">French Burger</a>
                    </h5>
                    <p className="mt-3">
                      Cras ultricies ligula sed magna dictum porta auris
                      blandita.
                    </p>
                    <a href="menu.html" className="btn button-w3ls mt-4 mb-3">
                      View More
                      <span
                        className="fa fa-caret-right ml-1"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
                <div className="card border-0 med-blog">
                  <div className="card-header p-0">
                    <a href="menu.html">
                      <img
                        className="card-img-bottom"
                        src="images/blog2.jpg"
                        alt="Card image cap"
                      />
                    </a>
                  </div>
                  <div className="card-body border border-top-0">
                    <h5 className="blog-title card-title m-0">
                      <a href="menu.html">Veg Muffin</a>
                    </h5>
                    <p className="mt-3">
                      Cras ultricies ligula sed magna dictum porta auris
                      blandita.
                    </p>
                    <a
                      href="menu.html"
                      className="button-w3ls active mt-4 mb-3"
                    >
                      View More
                      <span
                        className="fa fa-caret-right ml-1"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
                <div className="card border-0 med-blog">
                  <div className="card-header p-0">
                    <a href="menu.html">
                      <img
                        className="card-img-bottom"
                        src="images/blog3.jpg"
                        alt="Card image cap"
                      />
                    </a>
                  </div>
                  <div className="card-body border border-top-0">
                    <h5 className="blog-title card-title m-0">
                      <a href="menu.html">Hashbrown Brioche</a>
                    </h5>
                    <p className="mt-3">
                      Cras ultricies ligula sed magna dictum porta auris
                      blandita.
                    </p>
                    <a href="menu.html" className="button-w3ls mt-4 mb-3">
                      View More
                      <span
                        className="fa fa-caret-right ml-1"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* //blog grid */}
            </div>
          </div>
        </section>
        <section className="offer pt-lg-3">
          <div className="row no-gutters">
            <div className="col-md-6 p-0">
              <div className="blog-sec-w3">
                <div className="text-blog-w3 text-center p-2">
                  <h4 className="text-wh mb-3">
                    <a href="menu.html">Best Fast Food Collection</a>
                  </h4>
                  <p className="text-li">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris Sed ut perspiciatis unde omnis iste natus error.
                  </p>
                  <a href="menu.html" className="button-w3ls active mt-5">
                    Order Now
                    <span
                      className="fa fa-caret-right ml-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="blog-sec-w3 blog-sec-w3-2">
                <div className="text-blog-w3 text-center p-2">
                  <h4 className="text-wh mb-3">
                    <a href="menu.html">Organic Best &amp; Fresh Food</a>
                  </h4>
                  <p className="text-li">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris Sed ut perspiciatis unde omnis iste natus error.
                  </p>
                  <a href="menu.html" className="button-w3ls active mt-5">
                    Order Now
                    <span
                      className="fa fa-caret-right ml-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="middle py-5" id="services">
          <div className="container py-xl-5 py-lg-3">
            <div className="title-section text-center mb-md-5 mb-4">
              <p className="w3ls-title-sub">Our Work</p>
              <h3 className="w3ls-title mb-3">
                Excellent <span>Services</span>
              </h3>
            </div>
            <div className="row grids-w3 py-xl-5 py-lg-4 pt-lg-0 pt-4">
              <div className="col-lg-5 w3pvt-lauits_banner_bottom_left">
                <div className="row">
                  <div className="col-8 wthree_banner_bottom_grid_right text-right">
                    <h4 className="mb-3">
                      <a href="login.html">Free Shipping</a>
                    </h4>
                    <p>
                      Morbi viverra lacus commodo felis semper lectus feugiat.
                    </p>
                  </div>
                  <div className="col-4 wthree_banner_bottom_grid_left text-lg-right text-center">
                    <img src="images/s1.png" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 w3pvt-lauits_banner_bottom_left"></div>
              <div className="col-lg-5 w3pvt-lauits_banner_bottom_left mt-lg-0 mt-4">
                <div className="row">
                  <div className="col-4 wthree_banner_bottom_grid_left text-lg-right text-center">
                    <img src="images/s2.png" alt="" className="img-fluid" />
                  </div>
                  <div className="col-8 wthree_banner_bottom_grid_right">
                    <h4 className="mb-3">
                      <a href="login.html">Free &amp; Easy Returns</a>
                    </h4>
                    <p>
                      Morbi viverra lacus commodo felis semper lectus feugiat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row grids-w3 py-xl-5 py-lg-4 mt-lg-0 mt-4">
              <div className="col-lg-4 w3pvt-lauits_banner_bottom_left">
                <div className="row">
                  <div className="col-8 wthree_banner_bottom_grid_right text-right pl-lg-0">
                    <h4 className="mb-3">
                      <a href="login.html">Online Order</a>
                    </h4>
                    <p>
                      Morbi viverra lacus commodo felis semper lectus feugiat.
                    </p>
                  </div>
                  <div className="col-4 wthree_banner_bottom_grid_left text-lg-right text-center pr-lg-0">
                    <img src="images/s3.png" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 w3pvt-lauits_banner_bottom_left pr-0"></div>
              <div className="col-lg-4 w3pvt-lauits_banner_bottom_left mt-lg-0 mt-4">
                <div className="row">
                  <div className="col-4 wthree_banner_bottom_grid_left text-lg-right text-center pl-lg-0">
                    <img src="images/s4.png" alt="" className="img-fluid" />
                  </div>
                  <div className="col-8 wthree_banner_bottom_grid_right pr-lg-0">
                    <h4 className="mb-3">
                      <a href="login.html">24/7 Support</a>
                    </h4>
                    <p>
                      Morbi viverra lacus commodo felis semper lectus feugiat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="img-blog-2">
            <img src="images/img.png" alt="" className="img-fluid" />
          </div>
        </section>
        {/* //services */}
        {/* blog */}
        <section className="blog_w3ls py-5" id="blog">
          <div className="container py-xl-5 py-lg-3">
            <div className="title-section text-center mb-md-5 mb-4">
              <p className="w3ls-title-sub">Posts</p>
              <h3 className="w3ls-title mb-3">
                Our Latest <span>Blog</span>
              </h3>
              <p className="titile-para-text mx-auto">
                Inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.Nemo enim totam rem aperiam.
              </p>
            </div>
            <div className="row">
              {/* blog grid */}
              <div className="col-lg-4 col-md-6">
                <div className="card border-0">
                  <div className="card-header p-0">
                    <a href="single.html">
                      <img
                        src="images/blog1.png"
                        className="card-img-bottom img-fluid"
                        alt="image"
                      />
                    </a>
                    <img
                      src="images/te1.jpg"
                      alt=""
                      className="img-blog rounded-circle img-fluid"
                    />
                  </div>
                  <div className="card-body text-center pt-5 mt-2">
                    <h5 className="blog-title card-title mb-2">
                      <a href="single.html">Sed ut Riciatis</a>
                    </h5>
                    <div className="blog_w3icon border-top border-bottom py-1 mb-3">
                      <span>Magna Kictum - Nov 12</span>
                    </div>
                    <p>
                      Cras ultricies ligula sed magna dictum porta auris
                      blandita.
                    </p>
                    <a href="single.html" className="button-w3ls mt-4">
                      Read More
                      <span
                        className="fa fa-caret-right ml-1"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* //blog grid */}
              {/* blog grid */}
              <div className="col-lg-4 col-md-6">
                <div className="card border-0">
                  <div className="card-header p-0">
                    <a href="single.html">
                      <img
                        src="images/blog2.png"
                        className="card-img-bottom img-fluid"
                        alt="image"
                      />
                    </a>
                    <img
                      src="images/te2.jpg"
                      alt=""
                      className="img-blog rounded-circle img-fluid"
                    />
                  </div>
                  <div className="card-body text-center pt-5 mt-2">
                    <h5 className="blog-title card-title mb-2">
                      <a href="single.html">Unde omnis iste</a>
                    </h5>
                    <div className="blog_w3icon border-top border-bottom py-1 mb-3">
                      <span>Auris Jlan - Nov 15</span>
                    </div>
                    <p>
                      Cras ultricies ligula sed magna dictum porta auris
                      blandita.
                    </p>
                    <a href="single.html" className="button-w3ls active mt-4">
                      Read More
                      <span
                        className="fa fa-caret-right ml-1"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* //blog grid */}
              {/* blog grid */}
              <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                <div className="card border-0">
                  <div className="card-header p-0">
                    <a href="single.html">
                      <img
                        src="images/blog3.png"
                        className="card-img-bottom img-fluid"
                        alt="image"
                      />
                    </a>
                    <img
                      src="images/te3.jpg"
                      alt=""
                      className="img-blog rounded-circle img-fluid"
                    />
                  </div>
                  <div className="card-body text-center pt-5 mt-2">
                    <h5 className="blog-title card-title mb-2">
                      <a href="single.html">Natus error sit</a>
                    </h5>
                    <div className="blog_w3icon border-top border-bottom py-1 mb-3">
                      <span>Dictum Orta - Nov 20</span>
                    </div>
                    <p>
                      Cras ultricies ligula sed magna dictum porta auris
                      blandita.
                    </p>
                    <a href="single.html" className="button-w3ls mt-4">
                      Read More
                      <span
                        className="fa fa-caret-right ml-1"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* //blog grid */}
            </div>
          </div>
        </section>
        {/* //blog */}
        {/* slides images */}
        <section className="wthree-slider" id="masthead"></section>
        {/* //slides images */}
        {/* newsletter */}
        <section className="subscribe-main py-5">
          <div className="container py-xl-5 py-3">
            <div className="row pb-lg-4 pt-lg-5">
              <div className="col-lg-6 col-md-9 text-center">
                <h3 className="w3ls-title mb-2">Subscribe to Newsletter</h3>
                <p className="mb-xl-5 mb-4">
                  Free Delivery on your first order!
                </p>
                <form
                  action="#"
                  method="post"
                  className="d-flex newsletter-info"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email..."
                    required
                  />
                  <button type="submit">Submit</button>
                </form>
              </div>
              <div className="col-lg-6 col-md-3"></div>
            </div>
            <img src="images/sub.png" alt="" className="img-fluid sub-img" />
          </div>
        </section>
        {/* //newsletter */}
        {/* footer */}
        <footer className="py-5">
          <div className="container py-xl-4">
            <div className="row footer-top">
              <div className="col-lg-4 footer-grid_section_1its footer-text">
                {/* logo */}
                <h2>
                  <a className="logo text-wh" href="index.html">
                    <img src="images/logo.png" alt="" className="img-fluid" />
                    <span>Tasty</span> Burger
                  </a>
                </h2>
                {/* //logo */}
                <p className="mt-lg-4 mt-3 mb-lg-5 mb-4">
                  Sed ut perspiciatis unde omnis iste natus errorhjhsit lupt
                  atem accursit lupt atem accu dfdsa ntium doloremque laudan
                  tium accu santium dolore.
                </p>
                {/* social icons */}
                <ul className="top-right-info">
                  <li>
                    <p>Follow As:</p>
                  </li>
                  <li className="facebook-w3">
                    <a href="#facebbok">
                      <span className="fa fa-facebook-f" />
                    </a>
                  </li>
                  <li className="twitter-w3">
                    <a href="#twitter">
                      <span className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="google-w3">
                    <a href="#google">
                      <span className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li className="dribble-w3">
                    <a href="#dribble">
                      <span className="fa fa-dribbble" />
                    </a>
                  </li>
                </ul>
                {/* //social icons */}
              </div>
              <div className="col-lg-4 footer-grid_section_1its my-lg-0 my-sm-4 my-4">
                <div className="footer-title">
                  <h3>Contact Us</h3>
                </div>
                <div className="footer-text mt-4">
                  <p>
                    Address : 1234 lock, Charlotte, North Carolina, United
                    States
                  </p>
                  <p className="my-2">Phone : +12 534894364</p>
                  <p>
                    Email :{" "}
                    <a href="mailto:info@example.com">info@example.com</a>
                  </p>
                </div>
                <div className="footer-title mt-4 pt-md-2">
                  <h3>Payment Method</h3>
                </div>
                <ul className="list-unstyled payment-links mt-4">
                  <li>
                    <a href="login.html">
                      <img src="images/pay2.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="login.html">
                      <img src="images/pay5.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="login.html">
                      <img src="images/pay1.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="login.html">
                      <img src="images/pay4.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 footer-grid_section_1its">
                <div className="footer-title">
                  <h3>Request Info</h3>
                </div>
                <div className="info-form-right mt-4 p-0">
                  <form action="#" method="post">
                    <div className="row">
                      <div className="col-lg-6 form-group mb-2 pr-lg-1">
                        <input
                          type="text"
                          className="form-control"
                          name="Name"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="col-lg-6 form-group mb-2 pl-lg-1">
                        <input
                          type="text"
                          className="form-control"
                          name="Phone"
                          placeholder="Phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group mb-2">
                      <input
                        type="email"
                        className="form-control"
                        name="Email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="form-group mb-2">
                      <textarea
                        name="Comment"
                        className="form-control"
                        placeholder="Comment"
                        required
                        defaultValue={""}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn submit-contact ml-auto"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="cpy-right text-center py-3">
          <p>
            © 2019 Tasty Burger. All rights reserved | Design by
            <a href="http://w3layouts.com"> W3layouts.</a>
          </p>
        </div>
        <a href="#home" className="move-top text-center">
          <span className="fa fa-level-up" aria-hidden="true" />
        </a>
      </div>
    );
  }
}

export default Home;
