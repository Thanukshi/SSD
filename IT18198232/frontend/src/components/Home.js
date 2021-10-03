import React, { Component } from "react";
import logo from "../images/logo.png";

class Home extends Component {
  render() {
    return (
      <div>
        <header id="home"></header>
        <div className="main-top py-1">
          <div className="container">
            <div className="nav-content">
              <h1>
                <a id="" className="logo" href="/">
                  <img
                    src={logo}
                    alt=""
                    className="img-fluid"
                    style={{ width: 100 }}
                  />
                  <span>MY</span> Guiders
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
                      <a href="/">Home</a>
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
                    <h3 className="text-da mb-4">
                      <span>MY GUIDERS</span>{" "}
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
                      Download Now
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
                    Welcome to <span>MY GUIDERS</span>
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
                    Download Now
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
                    Download Now
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

        <footer className="py-5">
          <div className="container py-xl-4">
            <div className="row footer-top">
              <div className="col-lg-4 footer-grid_section_1its footer-text">
                {/* logo */}
                <h2>
                  <a className="logo text-wh" href="/">
                    <img src="images/logo.png" alt="" className="img-fluid" />
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
          <p>© 2021 My Guiders. All rights reserved.</p>
        </div>
        <a href="#home" className="move-top text-center">
          <span className="fa fa-level-up" aria-hidden="true" />
        </a>
      </div>
    );
  }
}

export default Home;
