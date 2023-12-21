import React, { Fragment } from 'react'

function Footer() {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default Footer
