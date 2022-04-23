import React, { useState } from 'react'
import HeaderMenu from '../Manual/Navbar/HeaderMenu';
import Mobile_menu from './Mobile_menu';
import Logo from './Logo'
import ProfileDropDown from '../Manual/Navbar/ProfileDropDown';

const Header = () => {
  const token = localStorage.getItem("volintToken");
  return (

    <header id="masthead" className="header ttm-header-style-01">
      <div id="site-header-menu" className="site-header-menu ttm-bgcolor-white">
        <div className="site-header-menu-inner ttm-stickable-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-20">
                <div className="site-navigation d-flex align-items-center justify-content-between">
                  <div className="site-branding">
                    <Logo />
                  </div>
                  <div className="border-box-block">
                    <div className=" d-flex align-items-center justify-content-between">
                      <HeaderMenu />
                      <div className="mobile-menu"><Mobile_menu /></div>
                      <div className="border-box-block ms-auto mr-20">
                        <div className=" d-flex align-items-center justify-content-between">
                        </div>
                      </div>
                      {token &&
                        <ProfileDropDown />}
                      <div className="header_extra ml-auto d-flex align-items-center">
                        <div className="header_social">
                          <ul className="social-icons">
                            <li><a href="https://www.facebook.com/profile.php?id=100079605736075" rel="noopener" aria-label="facebook"><i className="ti ti-facebook"></i></a></li>
                            <li><a href="https://twitter.com/TheVolint" rel="noopener" aria-label="twitter"><i className="ti ti-twitter-alt"></i></a></li>
                            <li><a href="https://www.instagram.com/thevolint/" rel="noopener" aria-label="google"><i className="ti ti-instagram"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/thevolint/" rel="noopener" aria-label="linkedin"><i className="ti ti-linkedin"></i></a></li>
                          </ul>
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
    </header>

  )
}

export default Header;