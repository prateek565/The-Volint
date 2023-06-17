import React, { Component } from 'react';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';

export class Contact_01 extends Component {
    render() {
        
        return (
            <div className="site-main">
                <Header />

                {/* PageHeader */} 
                <PageHeader           
                    title="Contact us" 
                    breadcrumb="Contact 01" 
                />
                {/* PageHeader end */}


                {/* grid-section */} 
                <section className="ttm-row grid-section clearfix">
                    <div className="container">
                        {/* row */}
                        <div className="row">                            
                            <div className="col-lg-4 col-md-6">
                                <div className="featured-imagebox box-shadow">
                                    <div className="featured-thumbnail">
                                        <img className="img-fluid" src="https://via.placeholder.com/720x600?text=720x600+country-01.jpg" alt="country-01" />
                                    </div>
                                    <div className="featured-content p-30">                                        
                                        <div className="featured-title">
                                            <h3><a href={  '/'}>United States</a></h3>
                                        </div>
                                        <div className="featured-desc">
                                            <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                                                <li className="pb-5">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    <div className="ttm-list-li-content">Addres: Newyork Envanto 45 HQ</div>
                                                </li>
                                                <li className="pb-5">
                                                    <i className="fas fa-phone-alt"></i>
                                                    <div className="ttm-list-li-content">Call Us:123 456 7890</div>
                                                </li>
                                                <li>
                                                    <i className="fa fa-envelope"></i>
                                                    <div className="ttm-list-li-content">
                                                        <a href="mailto:info@example.com">Email:info@example.com</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="featured-imagebox box-shadow">
                                    <div className="featured-thumbnail">
                                        <img className="img-fluid" src="https://via.placeholder.com/720x600?text=720x600+country-02.jpg" alt="country-02" />
                                    </div>
                                    <div className="featured-content p-30">                                        
                                        <div className="featured-title">
                                            <h3><a href={  '/'}>Australia</a></h3>
                                        </div>
                                        <div className="featured-desc">
                                            <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                                                <li className="pb-5">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    <div className="ttm-list-li-content">Addres: Newyork Envanto 45 HQ</div>
                                                </li>
                                                <li className="pb-5">
                                                    <i className="fas fa-phone-alt"></i>
                                                    <div className="ttm-list-li-content">Call Us:123 456 7890</div>
                                                </li>
                                                <li>
                                                    <i className="fa fa-envelope"></i>
                                                    <div className="ttm-list-li-content">
                                                        <a href="mailto:info@example.com">Email:info@example.com</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="featured-imagebox box-shadow">
                                    <div className="featured-thumbnail">
                                        <img className="img-fluid" src="https://via.placeholder.com/720x600?text=720x600+country-03.jpg" alt="country-03" />
                                    </div>
                                    <div className="featured-content p-30">                                        
                                        <div className="featured-title">
                                            <h3><a href={  '/'}>Canada</a></h3>
                                        </div>
                                        <div className="featured-desc">
                                            <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                                                <li className="pb-5">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    <div className="ttm-list-li-content">Addres: Newyork Envanto 45 HQ</div>
                                                </li>
                                                <li className="pb-5">
                                                    <i className="fas fa-phone-alt"></i>
                                                    <div className="ttm-list-li-content">Call Us:123 456 7890</div>
                                                </li>
                                                <li>
                                                    <i className="fa fa-envelope"></i>
                                                    <div className="ttm-list-li-content">
                                                        <a href="mailto:info@example.com">Email:info@example.com</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>                       
                        </div>
                        {/* row end */}
                    </div>
                </section>
                {/* grid-section end */} 


                {/* map-section */} 
                <section className="ttm-row map-section bg-theme-GreyColor clearfix">
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-12">
                                {/* section title */}
                                <div className="section-title title-style-center_text pb-15">
                                    <div className="title-header">
                                        <h3>get in <span className="text-theme-SkinColor">touch</span></h3>
                                        <h2 className="title">Feel Free To Contact</h2>
                                    </div>
                                </div>{/* section title end */} 
                            </div>
                            <div className="col-lg-6">
                                <iframe height="530" width="100%" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12609.73108660754!2d-122.47279800000001!3d37.803331!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586e6302615a1%3A0x86bd130251757c00!2sStorey%20Ave%2C%20San%20Francisco%2C%20CA%2094129!5e0!3m2!1sen!2sus!4v1591859311334!5m2!1sen!2sus" />
                            </div>
                            <div className="col-lg-6">
                                <div className="ttm-col-bgcolor-yes ttm-bg bg-theme-WhiteColor z-index-2 p-40 p-lg-30 mt-lg-30">
                                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                                    <div className="layer-content">
                                        <form id="contact_form" className="contact_form wrap-form">
                                            <div className="row ttm-boxes-spacing-10px">
                                                <div className="col-md-12 ttm-box-col-wrapper">
                                                    <label>
                                                        <input name="name" type="text" placeholder="Your Name" required="required" />
                                                    </label>
                                                </div>
                                                <div className="col-md-6 ttm-box-col-wrapper">
                                                    <label>
                                                        <input name="email" type="text" placeholder="Your Email" required="required" />
                                                    </label>
                                                </div>
                                                <div className="col-md-6 ttm-box-col-wrapper">
                                                    <label>
                                                        <input name="subject" type="text" placeholder="Subject" required="required" />
                                                    </label>
                                                </div>
                                                <div className="col-md-12 ttm-box-col-wrapper">
                                                    <label>
                                                        <input name="phone" type="text" placeholder="Phone Number" required="required" />
                                                    </label>
                                                </div>
                                                <div className="col-md-12 ttm-box-col-wrapper">
                                                    <label>
                                                        <textarea name="message" rows="7" placeholder="Message" required="required"></textarea>
                                                    </label>
                                                </div>
                                            </div>
                                            <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill 
                                            ttm-btn-color-skincolor w-100" type="submit">send a message!</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>{/* row end */}
                    </div>
                </section>
                {/* map-section end */} 

                {/* action-section */}
                <section className="ttm-row action-section bg-theme-SkinColor text-theme-WhiteColor clearfix">
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
                                    href={  '/contact_01'}>Hiring Now!</a>
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


export default Contact_01;