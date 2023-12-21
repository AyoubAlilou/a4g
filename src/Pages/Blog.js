import React, { Fragment } from 'react'
import Menu from './Menu'
function Blog() {
  return (
    <Fragment>
      <div className='hero_area'>
        {/* header section strats */}
        <Menu />
        {/* end header section */}
      </div>
      {/* blog section */}
      <section className='blog_section layout_padding'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-10 ml-auto'>
              <div className='heading_container'>
                <h2>Latest Blog</h2>
                <p>
                  iusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis n
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
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
      {/* info section */}
      <div className='info_section'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-10 ml-auto'>
              <div className='row info_main-row'>
                <div className='col-md-6 pr-0'>
                  {/* contact section */}
                  <section className='contact_section'>
                    <h2>Request A Call Back</h2>
                    <form action=''>
                      <div>
                        <input type='text' placeholder='Name' />
                      </div>
                      <div>
                        <input type='text' placeholder='Phone Number' />
                      </div>
                      <div>
                        <input type='email' placeholder='Email' />
                      </div>
                      <div>
                        <input
                          type='text'
                          className='message-box'
                          placeholder='Message'
                        />
                      </div>
                      <div className='d-flex '>
                        <button>SEND</button>
                      </div>
                    </form>
                    <div className='map_container'>
                      <div className='map'>
                        <div
                          id='googleMap'
                          style={{ width: '100%', height: 300 }}
                        />
                      </div>
                    </div>
                  </section>
                  {/* end contact section */}
                  {/* footer section */}
                  <section className=' footer_section '>
                    <div className='social_box'>
                      <a href='#'>
                        <img src='assets/images/facebook.png' alt='' />
                      </a>
                      <a href='#'>
                        <img src='assets/images/twitter.png' alt='' />
                      </a>
                      <a href='#'>
                        <img src='assets/images/linkedin.png' alt='' />
                      </a>
                      <a href='#'>
                        <img src='assets/images/instagram.png' alt='' />
                      </a>
                      <a href='#'>
                        <img src='assets/images/youtube.png' alt='' />
                      </a>
                    </div>
                    <p>
                      © 2020 All Rights Reserved. Design by
                      <a href='https://html.design/'>Free Html Templates</a>
                    </p>
                  </section>
                  {/* footer section */}
                </div>
                <div className='col-md-6  px-0'>
                  <div className='img-box'>
                    <img src='assets/images/footer-img.jpg' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end info section */}
      {/* owl carousel script */}
      {/* end owl carousel script */}
      {/* Google Map */}
      {/* End Google Map */}
    </Fragment>
  )
}

export default Blog
