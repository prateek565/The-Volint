import React, { Component } from 'react';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';
import ProgressBar from 'react-animated-progress-bar';


export class Employers_details extends Component {

    
    render() {
        return (

            <div className="site-main">
                <Header/>
            
                {/* PageHeader */} 
                <PageHeader
                    title="employers details"
                    breadcrumb="employers"
                />
                {/* PageHeader end */}


                <div className="ttm-row sidebar job-sidebar clearfix">
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-4 widget-area sidebar-left job_list-widget-area">
                                <div className="job_list-widget">
                                    <aside className="widget candidate-widget">
                                        <h3 className="widget-title"><i className="ti ti-files"></i>contact us</h3>
                                        <form className="wrap-form">
                                            <label>
                                                <input name="name" type="text" placeholder="Your Name*" required="required" />
                                            </label>
                                            <label>
                                                <input name="email" type="text" placeholder="Email Address" required="required" />
                                            </label>
                                            <label>
                                                <textarea name="message" rows="4" placeholder="Write Comment" required="required"></textarea>
                                            </label>
                                            <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor w-100" type="submit">send a message!</button>
                                        </form>
                                    </aside>
                                    <aside className="widget location-widget p-0">
                                        <iframe width="100%" height="350" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26361414.263400003!2d-113.75849480805297!3d36.24080384347216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1578680778274!5m2!1sen!2sin">
                                        </iframe>
                                        <div className="p-20">
                                            <div>
                                                <span className="text-theme-SkinColor">
                                                <i className="fa fa-map-marker-alt mr-10"></i></span>24 Fifth st, Los Angeles, USA
                                            </div>
                                            <div>
                                                <a href="mailto:info@example.com"><i className="fa fa-envelope mr-10"></i>info@example.com</a>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                                <div className="overview-box">
                                    <div className="title">
                                        <div className="d-sm-flex justify-content-between align-items-center mb_10">
                                            <p className="mb-10 fw-bold">Social Links :</p>
                                            <div className="social-icons circle mb-10">
                                                <ul className="list-inline">
                                                    <li><a href="#facebook" rel="noopener" aria-label="facebook"><i className="ti ti-facebook"></i></a></li>
                                                    <li><a href="#twitter" rel="noopener" aria-label="twitter"><i className="ti ti-twitter-alt"></i></a></li>
                                                    <li><a href="#instagram" rel="noopener" aria-label="instagram"><i className="ti ti-instagram"></i></a></li>
                                                    <li><a href="#pinterest" rel="noopener" aria-label="pinterest"><i className="ti ti-pinterest"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 content-area">
                                <div className="row">
                                    <div className="col-md-12">
                                        {/* featured-imagebox */}
                                        <div className="featured-imagebox featured-imagebox-employer">
                                            <div className="featured-thumbnail">
                                                <img src="https://via.placeholder.com/200x200?text=200x200+employer-01.jpg" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="select-btn">
                                                    <i className="fa fa-heart"></i>
                                                </div>
                                                <div className="featured-title">
                                                    <h3>Jimmy Divison</h3>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>24 Fifth st, Los Angeles, USA</span>
                                                        <span><i className="fa fa-hand-holding-usd"></i>$700 - $900/month</span>
                                                        <span>Skills :   HTML, CSS, JavaScript, Wordpress, PHP</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="overview-box">
                                            <div className="desc">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="d-flex mt-15 mb-15">
                                                            <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-size-sm ttm-icon_element-color-skincolor">
                                                                <i className="ti ti-briefcase"></i>
                                                            </div>
                                                            <div className="pl-10">
                                                                <h6 className="mb-1 fw-normal">Job Type :</h6>
                                                                <span>Part Time</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="d-flex mt-15 mb-15">
                                                            <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-size-sm ttm-icon_element-color-skincolor">
                                                                <i className="ti ti-search"></i>
                                                            </div>
                                                            <div className="pl-10">
                                                                <h6 className="mb-1 fw-normal">Founded in :</h6>
                                                                <span>1995</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="d-flex mt-15 mb-15">
                                                            <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-size-sm ttm-icon_element-color-skincolor">
                                                                <i className="ti ti-location-pin"></i>
                                                            </div>
                                                            <div className="pl-10">
                                                                <h6 className="mb-1 fw-normal">Locations :</h6>
                                                                <span>United States</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="d-flex mt-15 mb-15">
                                                            <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-size-sm ttm-icon_element-color-skincolor">
                                                                <i className="far fa-building"></i>
                                                            </div>
                                                            <div className="pl-10">
                                                                <h6 className="mb-1 fw-normal"> Comapny :</h6>
                                                                <span>IT Company</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="d-flex mt-15 mb-15">
                                                            <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-size-sm ttm-icon_element-color-skincolor">
                                                                <i className="ti ti-user"></i>
                                                            </div>
                                                            <div className="pl-10">
                                                                <h6 className="mb-1 fw-normal">Employees :</h6>
                                                                <span>25</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="d-flex mt-15 mb-15">
                                                            <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-size-sm ttm-icon_element-color-skincolor">
                                                                <i className="ti ti-tag"></i>
                                                            </div>
                                                            <div className="pl-10">
                                                                <h6 className="mb-1 fw-normal">Categories :</h6>
                                                                <span>Arts, Design, Media</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="overview-box">
                                            <div className="title">
                                                <h5>About Us</h5>
                                            </div>
                                            <div className="desc">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
                                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
                                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                     nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                        </div>
                                        <div className="overview-box">
                                            <div className="title">
                                                <h5>What You Will Get </h5>
                                            </div>
                                            <div className="desc">
                                                <ul className="ttm-list ttm-list-style-disc ttm-list-icon-color-skincolor">
                                                    <li>
                                                        <div className="ttm-list-li-content">Extra Private health insurance coverage by the company to help you getting better focus.</div>
                                                    </li>
                                                    <li>
                                                        <div className="ttm-list-li-content">13th salary and project bonus</div>
                                                    </li>
                                                    <li>
                                                        <div className="ttm-list-li-content">Company trip, team-building events</div>
                                                    </li>
                                                    <li>
                                                        <div className="ttm-list-li-content">Flexible working time schedule and leave policy as we know the importance of work-life balance</div>
                                                    </li>
                                                    <li>
                                                        <div className="ttm-list-li-content">CBe exposed to the latest technology and the most innovative ideas worldwide</div>
                                                    </li>
                                                    <li>
                                                        <div className="ttm-list-li-content">Support laptop Extra healthcare package</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* row end */}
                            </div>
                        </div>{/* row end */}
                    </div>
                </div>


                {/* action-section */}
                <section className="ttm-row action-section text-theme-WhiteColor clearfix" style={{backgroundColor:'#e86f9e'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-md-flex align-items-center justify-content-between">
                                    {/* featured-icon-box */}
                                    <div className="featured-icon-box icon-align-before-content style2">
                                        <div className="featured-icon">
                                            <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-white ttm-icon_element-size-xl">
                                                <i className="flaticon flaticon-recruitment-5"></i>
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3>Incredible Recruitment & Staffing Agency</h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>We have over 30 years experience oft Business porro qusquam dol ipsum quia dolor sit amet.</p>
                                            </div>
                                        </div>
                                    </div>{/* featured-icon-box end */}
                                    <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white" 
                                    href={process.env.PUBLIC_URL + '/'}>Hiring Now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* action-section end */}

                
            <Footer/>
                        
            </div>
          )
      }
   }

export default Employers_details;