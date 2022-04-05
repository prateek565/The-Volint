import React from 'react'
import { Link } from 'react-router-dom';
import ProfileDropDown from '../Manual/Navbar/ProfileDropDown';
import HeaderMenu from '../Manual/Navbar/HeaderMenu';
import Mobile_menu from './Mobile_menu';
import Logo from './Logo'

const Header = () => {
  return (
    <header id="masthead" className="header ttm-header-style-03">
      {/* <div className="top_bar bg-theme-GreyColor clearfix">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="d-flex align-items-center">
                <div className="d-flex">
                  <div className="top_bar_contact_item">
                    <div className="top_bar_icon">
                      <i className="flaticon flaticon-phone-call"></i>
                    </div>
                    <span><a href="tel:+(470) 795-1189">+(470) 795-1189</a></span>
                  </div>
                  <div className="top_bar_contact_item">
                    <div className="top_bar_icon">
                      <i className="flaticon flaticon-email"></i>
                    </div>
                    <span><a href="mailto:thevolint@gmail.com">thevolint@gmail.com</a></span>
                  </div>
                </div>
                <div className="ttm-bg ttm-col-bgcolor-yes ttm-right-span bg-theme-GreyColor pl-20 ms-auto">
                  <div className="ttm-col-wrapper-bg-layer ttm-bg-layer bg-theme-GreyColor"></div>
                  <div className="layer-content">
                    <div className="media-block">
                      <ul className="social-icons">
                        <li>
                          <a className="facebook" href="https://www.facebook.com/profile.php?id=100079605736075" rel="noopener" aria-label="facebook">
                            <i className="ti ti-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a className="twitter" href="https://twitter.com/TheVolint" rel="noopener" aria-label="twitter">
                            <i className="ti ti-twitter-alt"></i>
                          </a>
                        </li>
                        <li>
                          <a className="google" href="https://www.instagram.com/thevolint/" rel="noopener" aria-label="google">
                            <i className="ti ti-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a className="linkedin" href="https://www.linkedin.com/company/thevolint/" rel="noopener" aria-label="linkedin">
                            <i className="ti ti-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div id="site-header-menu" className="site-header-menu border-top">
        <div className="site-header-menu-inner ttm-stickable-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-20">
                <div className="site-navigation d-flex align-items-center justify-content-between">
                  <div className="site-branding">
                    <Logo />
                  </div>
                  <div className="border-box-block ms-auto mr-20">
                    <div className=" d-flex align-items-center justify-content-between">
                      <HeaderMenu />
                      <div className="mobile-menu"><Mobile_menu /></div>
                    </div>
                  </div>
                  <ProfileDropDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="serach_bar bg-theme-SkinColor pt-20">
        <div className="container">
          <form id="b_search_Form" className="b_search_Form wrap-form d-block" method="post" action="#" data-mailchimp="true">
            <div className="row row-equal-height ttm-boxes-spacing-20px">
              <div className="col-md">
                <label>
                  <Link to={'/job_list/'}>
                    <input type="text" id="keywords" placeholder="Keywords (e.g. Job Title)" />
                  </Link>
                </label>
              </div>
              <div className="col-md">
                <label>
                  <Link to={'/job_list/'}>
                    <input type="text" id="locations" placeholder="Locations (e.g. City, Counter)" />
                  </Link>
                </label>
              </div>
              <div className="col-md" onClick={() => {
                window.scrollTo({ top: 1100, behavior: "smooth" });
              }}>
                <label>
                  <input type="text" id="industry" placeholder="Industry (e.g. Design, Art)" />
                </label>
              </div>
              <div className="col-lg-2">
                <label>
                  <button className="submit ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-grey" type="submit">Search</button>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div> */}
    </header>

  )
}


export default Header;