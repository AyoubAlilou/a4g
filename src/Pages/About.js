import React, { Fragment } from 'react'
import Footer from './Footer'
import Menu from './Menu'

function About() {
  return (
    <Fragment>
      <>
        <div className='hero_area'>
          {/* header section strats */}
          <Menu />
          {/* end header section */}
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
        {/* info section */}
        <Footer />
        {/* end info section */}
        {/* owl carousel script */}
        {/* end owl carousel script */}
        {/* Google Map */}
        {/* End Google Map */}
      </>
    </Fragment>
  )
}

export default About
