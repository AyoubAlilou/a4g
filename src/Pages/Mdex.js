import React, { Fragment } from 'react'
import Menu from './Menu'
import Footer from './Footer'
function Mdex() {
  return (
    <div>
      <Fragment>
        <div className='hero_area'>
          {/* header section strats */}
          <Menu />
          {/* end header section */}
          {/* slider section */}
          <section className=' slider_section position-relative'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-2 offset-md-2'>
                  <div className='slider_heading'>
                    <h2>
                      Bo <span>xer</span>
                    </h2>
                  </div>
                </div>
                <div className='col-md-8 mx-auto'>
                  <div
                    id='carouselExampleIndicators'
                    className='carousel slide'
                    data-ride='carousel'
                  >
                    <ol className='carousel-indicators'>
                      <li
                        data-target='#carouselExampleIndicators'
                        data-slide-to={0}
                        className='active'
                      >
                        01
                      </li>
                      <li
                        data-target='#carouselExampleIndicators'
                        data-slide-to={1}
                      >
                        02
                      </li>
                      <li
                        data-target='#carouselExampleIndicators'
                        data-slide-to={2}
                      >
                        03
                      </li>
                    </ol>
                    <div className='carousel-inner'>
                      <div className='carousel-item active'>
                        <div className='box'>
                          <div className='detail-box'>
                            <h1>
                              Boxing <br />
                              Center
                            </h1>
                            <hr />
                            <div className='btn-box'>
                              <a href='' className='btn-1'>
                                Contact Us
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='carousel-item'>
                        <div className='box'>
                          <div className='detail-box'>
                            <h1>
                              Boxing <br />
                              Center
                            </h1>
                            <hr />
                            <div className='btn-box'>
                              <a href='' className='btn-1'>
                                Contact Us
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='carousel-item'>
                        <div className='box'>
                          <div className='detail-box'>
                            <h1>
                              Boxing <br />
                              Center
                            </h1>
                            <hr />
                            <div className='btn-box'>
                              <a href='' className='btn-1'>
                                Contact Us
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      className='carousel-control-prev'
                      href='#carouselExampleIndicators'
                      role='button'
                      data-slide='prev'
                    >
                      <span className='sr-only'>Previous</span>
                    </a>
                    <a
                      className='carousel-control-next'
                      href='#carouselExampleIndicators'
                      role='button'
                      data-slide='next'
                    >
                      <span className='sr-only'>Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end slider section */}
        </div>
        {/* about section */}
        <section className='about_section layout_padding'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-10 ml-auto pr-0'>
                <div className='about_container'>
                  <div className='row'>
                    <div className='col-lg-3 col-md-5'>
                      <div className='detail-box'>
                        <div className='heading_container'>
                          <h2>About Class</h2>
                        </div>
                        <p>
                          iusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris iusmod tempor incididunt
                          ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut aliquipnisi ut aliquipiusmod tempor incididunt ut
                          labore et
                        </p>
                        <hr />
                        <a href=''>Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end about section */}
        {/* class section */}
        <section className='class_section '>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-10 col-lg-8 mx-auto'>
                <div className='class_container'>
                  <div className='row'>
                    <div className='col-lg-9 col-md-10'>
                      <div className='heading_container'>
                        <h2>Our Classes Videos</h2>
                        <p>
                          iusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis n ostrud
                          exercitation ullamco laboris iusmod tempor incididunt
                          ut labore et dolore
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='class_box-container'>
                    <div className='owl-carousel owl_carousel1'>
                      <div className='item'>
                        <div className='box'>
                          <div className='img-box'>
                            <img src='assets/images/c1.jpg' alt='' />
                            <div className='detail-box'>
                              <button>
                                <img src='assets/images/play-icon.png' alt='' />
                              </button>
                              <h2>Boxing</h2>
                            </div>
                          </div>
                          <div className='btn-box'>
                            <a href=''>See More</a>
                          </div>
                        </div>
                      </div>
                      <div className='item'>
                        <div className='box'>
                          <div className='img-box'>
                            <img src='assets/images/c2.jpg' alt='' />
                            <div className='detail-box'>
                              <button>
                                <img src='assets/images/play-icon.png' alt='' />
                              </button>
                              <h2>Boxing</h2>
                            </div>
                          </div>
                          <div className='btn-box'>
                            <a href=''>See More</a>
                          </div>
                        </div>
                      </div>
                      <div className='item'>
                        <div className='box'>
                          <div className='img-box'>
                            <img src='assets/images/c1.jpg' alt='' />
                            <div className='detail-box'>
                              <button>
                                <img src='assets/images/play-icon.png' alt='' />
                              </button>
                              <h2>Boxing</h2>
                            </div>
                          </div>
                          <div className='btn-box'>
                            <a href=''>See More</a>
                          </div>
                        </div>
                      </div>
                      <div className='item'>
                        <div className='box'>
                          <div className='img-box'>
                            <img src='assets/images/c2.jpg' alt='' />
                            <div className='detail-box'>
                              <button>
                                <img src='assets/images/play-icon.png' alt='' />
                              </button>
                              <h2>Boxing</h2>
                            </div>
                          </div>
                          <div className='btn-box'>
                            <a href=''>See More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end class section */}
        {/* blog section */}
        <section className='blog_section layout_padding'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-10 ml-auto'>
                <div className='heading_container'>
                  <h2>Latest Blog</h2>
                  <p>
                    iusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis n
                  </p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 pl-0'>
                <div className='box b1'>
                  <div className='img-box'>
                    <img src='assets/images/b1.jpg' alt='' />
                  </div>
                  <div className='row'>
                    <div className='col-lg-8 col-md-10 ml-auto'>
                      <div className='detail-box'>
                        <div className='img_date'>
                          <h6>
                            17 <br />
                            Feb
                          </h6>
                        </div>
                        <h3>Boxer Joniya Daro</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea
                        </p>
                        <a href=''>Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 pr-0'>
                <div className='box b2'>
                  <div className='img-box'>
                    <img src='assets/images/b2.jpg' alt='' />
                  </div>
                  <div className='row'>
                    <div className='col-lg-8 col-md-10 mr-auto'>
                      <div className='detail-box'>
                        <div className='img_date'>
                          <h6>
                            17 <br />
                            Jun
                          </h6>
                        </div>
                        <h3>Boxer Joniya Daro</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea
                        </p>
                        <a href=''>Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end blog section */}
        {/* client section */}
        <section className='client_section layout_padding-bottom'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-10 col-lg-8 mx-auto'>
                <div className='client_container'>
                  <div className='heading_container'>
                    <h2>What Says Our students</h2>
                    <p>
                      iusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis n
                    </p>
                  </div>
                  <div className='client_box-container'>
                    <div className='carousel-wrap '>
                      <div className='owl-carousel'>
                        <div className='item'>
                          <div className='box'>
                            <div className='img-box'>
                              <img src='assets/images/client1.png' alt='' />
                            </div>
                            <div className='detail-box'>
                              <h4>Jone Moe</h4>
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum It is a long established fact that a
                                reader will be distracted by the readable
                                content of a page when looking at its layout.
                                The point of using Lorem Ipsum{' '}
                              </p>
                              <img src='assets/images/quote.png' alt='' />
                            </div>
                          </div>
                        </div>
                        <div className='item'>
                          <div className='box'>
                            <div className='img-box'>
                              <img src='assets/images/client2.png' alt='' />
                            </div>
                            <div className='detail-box'>
                              <h4>Lio Uji</h4>
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum It is a long established fact that a
                                reader will be distracted by the readable
                                content of a page when looking at its layout.
                                The point of using Lorem Ipsum{' '}
                              </p>
                              <img src='assets/images/quote.png' alt='' />
                            </div>
                          </div>
                        </div>
                        <div className='item'>
                          <div className='box'>
                            <div className='img-box'>
                              <img src='assets/images/client1.png' alt='' />
                            </div>
                            <div className='detail-box'>
                              <h4>Jone Moe</h4>
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum It is a long established fact that a
                                reader will be distracted by the readable
                                content of a page when looking at its layout.
                                The point of using Lorem Ipsum{' '}
                              </p>
                              <img src='assets/images/quote.png' alt='' />
                            </div>
                          </div>
                        </div>
                        <div className='item'>
                          <div className='box'>
                            <div className='img-box'>
                              <img src='assets/images/client2.png' alt='' />
                            </div>
                            <div className='detail-box'>
                              <h4>Lio Uji</h4>
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum It is a long established fact that a
                                reader will be distracted by the readable
                                content of a page when looking at its layout.
                                The point of using Lorem Ipsum{' '}
                              </p>
                              <img src='assets/images/quote.png' alt='' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end client section */}
        {/* info section */}

        {/* end info section */}
        {/* owl carousel script */}
        {/* end owl carousel script */}
        {/* Google Map */}
        {/* End Google Map */}
        <Footer />
      </Fragment>
      )
    </div>
  )
}

export default Mdex
