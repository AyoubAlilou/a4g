import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
function Menu() {
  return (
    <Fragment>
      <header className='header_section'>
        <div className='container'>
          <div className='header_nav'>
            <a className='navbar-brand brand_desktop' href='index.html'>
              <img src='assets/images/logo.png' alt='' />
            </a>
            <div className='main_nav'>
              <div className='top_nav'>
                <ul className=' '>
                  <li className=''>
                    <a className='' href=''>
                      <img src='assets/images/telephone.png' alt='' />
                      <span> +216 99308786</span>
                    </a>
                  </li>
                  <li className=''>
                    <a className='' href=''>
                      <img src='assets/images/mail.png' alt='' />
                      <span>ayoubalilou07@gmail.com</span>
                    </a>
                  </li>
                  <li className=''>
                    <a className='' href=''>
                      <img src='assets/images/location.png' alt='' />
                      <span>The old Profficionnal Boxer</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className='bottom_nav'>
                <nav className='navbar navbar-expand-lg custom_nav-container'>
                  <a className='navbar-brand brand_mobile' href='index.html'>
                    <img src='assets/images/logo.png' alt='' />
                  </a>
                  <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                  >
                    <span className='navbar-toggler-icon' />
                  </button>
                  <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'
                  >
                    <div className='d-flex ml-auto flex-column flex-lg-row align-items-center'>
                      <ul className='navbar-nav  '>
                        <li className='nav-item active'>
                          <Link to={'/'} className='nav-link'>
                            Home <span className='sr-only'>(current)</span>
                          </Link>
                        </li>
                        <li className='nav-item'>
                          <Link to={'/about'} className='nav-link'>
                            About
                          </Link>
                        </li>
                        <li className='nav-item'>
                          <Link to={'/classe'} className='nav-link'>
                            Classes
                          </Link>
                        </li>
                        <li className='nav-item'>
                          <Link to={'/blog'} className='nav-link'>
                            Blog
                          </Link>
                        </li>
                      </ul>
                      <form className='form-inline'>
                        <button
                          className='btn ml-3 ml-lg-5 nav_search-btn'
                          type='submit'
                        />
                      </form>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Menu
