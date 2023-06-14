import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ProfileDropDown from '../Manual/Navbar/ProfileDropDown';
import HeaderMenu from '../Manual/Navbar/HeaderMenu';
import Mobile_menu from './Mobile_menu';
import Logo from './Logo'
import DropDown from '../Manual/dropdown/DropDown';
import { Grid } from '@mui/material';

const Header = () => {
  const [category, setcategory] = useState('Volunteer Work');

  const handleChange=(e)=>{
    e.preventDefault();
    setcategory(e.target.value)
  }
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
          <form id="b_search_Form" className="b_search_Form wrap-form d-block" method="get" action={`/jobs_by_filter/cat=${category}`}>
            <div className="row row-equal-height ttm-boxes-spacing-20px" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className="col-lg-3">
                <Grid item md={5} sm={10} xs={10} lg={12} style={{ marginRight: '92px' }}>
                  <DropDown
                    array={['Volunteer Work', 'Internship']}
                    type={'Category'}
                    // name="category"
                    value={category}
                    handleChange={handleChange}
                  />
                </Grid>
              </div>
              {console.log(category)}
              <div className="col-lg-3">
                <label>
                  <a href={`/jobs_by_filter/cat=${category}`}>
                    <button className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" type="submit">Search Opportunities</button>
                  </a>
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