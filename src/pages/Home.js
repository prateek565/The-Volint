import React, { Component } from 'react';
import Slider from 'react-slick';
import Header from '../components/layout/Header';
import { Banner } from '../components/banner/Home1_banner';
import { Footer } from '../components/layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CountUp from 'react-countup';
import ProgressBar from 'react-animated-progress-bar';
import { Link } from 'react-router-dom';


export class Home extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
    render() {
      var slick_slider = {
        dots: false,
        arrow: false,
        autoplay: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 1,

        responsive: [{
    
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 575,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }]
      };
        
        return (       
          <div className="site-main">

            <Header/>
            
            {/* Banner */} 
            <Banner/>
            {/* Banner end */} 
            
            {/* features-section */}
            <section className="ttm-row features-section clearfix">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-12">
                            {/* section title */}
                            <div className="section-title title-style-center_text">
                                <div className="title-header">
                                    <h3>Get <span className="text-theme-SkinColor">Appropriate</span></h3>
                                    <h2 className="title">Search Job By Industry</h2>
                                </div>
                            </div>{/* section title end */}
                        </div>
                    </div>{/* row end */}
                    {/* row */}
                    <div className="row row-equal-height mb_10">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-top-content style1">
                                <div className="ttm-box-view-overlay">
                                    {/* finance-hover */}
                                    <div className="ttm-col-bgimage-yes ttm-bg h-100">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://via.placeholder.com/600x600?text=600x600+finance-hover.png)' }}></div>
                                        <div className="layer-content"></div>
                                    </div>{/* finance-hover end */}
                                </div>
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                                        <img className="img-fluid" src="images/cat-icon1.png" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Finance</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>85 Jobs<br></br>Financial Branch Manager</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" 
                                    href={  '/job_list'}>Apply Jobs!</a>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-top-content style1">
                                <div className="ttm-box-view-overlay">
                                    {/* technology-hover */}
                                    <div className="ttm-col-bgimage-yes ttm-bg h-100">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://via.placeholder.com/600x600?text=600x600+technology-hover.png)' }}></div>
                                        <div className="layer-content"></div>
                                    </div>{/* technology-hover end */}
                                </div>
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                                        <img className="img-fluid" src="images/cat-icon2.png" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Technology</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>110 Jobs<br></br>Software, Hardware, SEO</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" 
                                    href={  '/job_list'}>Apply Jobs!</a>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-top-content style1 active">
                                <div className="ttm-box-view-overlay">
                                    {/* agriculture-hover */}
                                    <div className="ttm-col-bgimage-yes ttm-bg h-100">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://via.placeholder.com/600x600?text=600x600+agriculture-hover.png)' }}></div>
                                        <div className="layer-content"></div>
                                    </div>{/* agriculture-hover end */}
                                </div>
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                                        <img className="img-fluid" src="images/cat-icon3.png" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Agriculture</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>100 Jobs<br></br>Agricultural Food Scientist</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" 
                                    href={  '/job_list'}>Apply Jobs!</a>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-top-content style1">
                                <div className="ttm-box-view-overlay">
                                    {/* construction-hover */}
                                    <div className="ttm-col-bgimage-yes ttm-bg h-100">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://via.placeholder.com/600x600?text=600x600+construction-hover.png)' }}></div>
                                        <div className="layer-content"></div>
                                    </div>{/* construction-hover end */}
                                </div>
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                                        <img className="img-fluid" src="images/cat-icon4.png" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Construction</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>120 Jobs<br></br>The Marketing Coordinator</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" 
                                    href={  '/job_list'}>Apply Jobs!</a>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-top-content style1">
                                <div className="ttm-box-view-overlay">
                                    {/* manufacturing-hover */}
                                    <div className="ttm-col-bgimage-yes ttm-bg h-100">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://via.placeholder.com/600x600?text=600x600+manufacturing-hover.png)' }}></div>
                                        <div className="layer-content"></div>
                                    </div>{/* manufacturing-hover end */}
                                </div>
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                                        <img className="img-fluid" src="images/cat-icon5.png" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Manufacturing</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>100 Jobs<br></br>Quality Control Inspector</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" 
                                    href={  '/job_list'}>Apply Jobs!</a>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>                        
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-top-content style1">
                                <div className="ttm-box-view-overlay">
                                    {/* production-hover */}
                                    <div className="ttm-col-bgimage-yes ttm-bg h-100">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://via.placeholder.com/600x600?text=600x600+production-hover.png)' }}></div>
                                        <div className="layer-content"></div>
                                    </div>{/* production-hover end */}
                                </div>
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                                        <img className="img-fluid" src="images/cat-icon6.png" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Production</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>90 Jobs<br></br>Assistant Plant Manager</p>
                                    </div>
                                    <Link className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" 
                                    href={'/job_list'}>Apply Jobs!</Link>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-top-content style1">
                                <div className="ttm-box-view-overlay">
                                    {/* transport-hover */}
                                    <div className="ttm-col-bgimage-yes ttm-bg h-100">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://via.placeholder.com/600x600?text=600x600+transport-hover.png)' }}></div>
                                        <div className="layer-content"></div>
                                    </div>{/* transport-hover end */}
                                </div>
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                                        <img className="img-fluid" src="images/cat-icon7.png" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Transport</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>125 Jobs<br></br>Cargo and Freight Agents</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" 
                                    href={  '/job_list'}>Apply Jobs!</a>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-top-content style1">
                                <div className="ttm-box-view-overlay">
                                    {/* insurance-hover */}
                                    <div className="ttm-col-bgimage-yes ttm-bg h-100">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://via.placeholder.com/600x600?text=600x600+insurance-hover.png)' }}></div>
                                        <div className="layer-content"></div>
                                    </div>{/* insurance-hover end */}
                                </div>
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                                        <img className="img-fluid" src="images/cat-icon8.png" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Insurance</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>110 Jobs<br></br>Corporate Finance Officer</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" 
                                    href={  '/job_list'}>Apply Jobs!</a>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                    </div>{/* row end */}
                </div>
            </section>
            {/* features-section end */}

            {/* services-section */}
            <section className="ttm-row services-section bg-img1 bg-theme-GreyColor ttm-bg ttm-bgimage-yes clearfix"  style={{ backgroundImage: 'url(images/bg-image/row-bgimage-1.png)' }}>
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-11">
                            {/* section title */}
                            <div className="section-title style2 mb-0">
                                <div className="title-header">
                                    <h3>Classic <span className="text-theme-SkinColor">Service</span></h3>
                                    <h2 className="title">We Understand Needs</h2>
                                </div>
                                <div className="title-desc">
                                    <p>A process that involves everything from <span className="text-theme-SkinColor">identifying,</span> attracting, shortlisting, interviewing, selecting, hiring, screening & onboarding employees.</p>
                                </div>
                            </div>{/* section title end */}
                        </div>
                    </div>{/* row end */}
                    {/* Slider */}
                    <Slider className="row slick_slider slick-arrows-style2 pt-20 mb_10" {...slick_slider} slidesToShow={2} rows={2} 
                    arrows={true} autoplay={false} responsive= { [{ breakpoint: 1024, settings: {slidesToShow: 2,slidesToScroll: 2 }},
                        {breakpoint: 575, settings: { slidesToShow: 1, slidesToScroll: 1 }}] }>
                        <div className="col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-services style1">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img src={"https://via.placeholder.com/600x600?text=600x600+services-01.jpg"} />
                                </div>{/* featured-thumbnail end */}
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><Link href={'/candidate_list'}>Volunteers</Link></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>We are quality personnel experts to the fields of expertise that needed for all kind of recruit projects</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" 
                                    href={  '/services_details'}>read more!</a>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-services style1">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/600x600?text=600x600+services-02.jpg" alt="image" />
                                </div>{/* featured-thumbnail end */}
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={  '/services_details'}>Forte Acquisition</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>HireCo tens to accelerate innovation current and future based solutions to support customers.</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" 
                                    href={  '/services_details'}>read more!</a>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-services style1">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/600x600?text=600x600+services-03.jpg" alt="image" />
                                </div>{/* featured-thumbnail end */}
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={  '/services_details'}>Technical Services</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>HireCo supplies variety of technical service including fabrication, design,  and commissioning</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" 
                                    href={  '/services_details'}>read more!</a>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-services style1">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/600x600?text=600x600+services-04.jpg" alt="image" />
                                </div>{/* featured-thumbnail end */}
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={  '/services_details'}>Human Resource</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>The most daunting task of  a Human Resource department, which must need to meet deadline.</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey"
                                     href={  '/services_details'}>read more!</a>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-services style1">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/600x600?text=600x600+services-05.jpg" alt="image" />
                                </div>{/* featured-thumbnail end */}
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={  '/services_details'}>Executive Search</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>- We, HireCo specializes in recruiting  executives and other personnel for their client company</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" 
                                    href={  '/services_details'}>read more!</a>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-services style1">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/600x600?text=600x600+services-06.jpg" alt="image" />
                                </div>{/* featured-thumbnail end */}
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={  '/services_details'}>Retained search</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>HireCo tens to accelerate innovation current and future based solutions to support customers.</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" 
                                    href={  '/services_details'}>read more!</a>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                    </Slider>
                    {/* Slider end */}
                </div>
            </section>
            {/* services-section end */}


            {/* about-section */}
            <section className="ttm-row about-section bg-layer-equal-height clearfix">
                <div className="container">
                    {/* row */}
                    <div className="row g-0">
                        <div className="col-md-6">
                            <div className="pb-70 pb-md-50 pr-60 pr-md-0">
                                {/* section title */}
                                <div className="section-title">
                                    <div className="title-header">
                                        <h3>Choose <span className="text-theme-SkinColor">any</span></h3>
                                        <h2 className="title">Job Seeker!</h2>
                                    </div>
                                    <div className="title-desc"><p>Our mission is to connect people to jobs at scale. In order for businesses to
                                         hire the best talent, people deserve to easily find a job they want to do. Start applying to the 5,000+
                                          companies in our network.</p></div>
                                </div>{/* section title end */}
                                <div className="mb-md-40 mb-30">
                                    <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor text-theme-DarkColor">
                                        <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">You can track the status of your applications in the candidate portal.</div></li>
                                        <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">We automatically complete profile with your professional experience</div></li>
                                        <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">Other questions & have already applied through the HireCo platform</div></li>
                                    </ul>
                                </div>
                                <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-dark" href={  '/job_list'}>Find A Jobs!</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            {/* col-img-img-one */}
                            <div className="col-bg-img-one ttm-col-bgimage-yes ttm-bg"  >
                                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://via.placeholder.com/570x520?text=570x520+col-bgimage-1.jpg)' }}></div>
                                <div className="layer-content"></div>
                                <img src="https://via.placeholder.com/570x520?text=570x520+col-bgimage-1.jpg" className="img-fluid col-bg-img-res" alt="bgimage" />
                            </div>{/* col-img-bg-img-one end */}
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-md-6">
                            {/* col-img-img-two */}
                            <div className="col-bg-img-two ttm-col-bgimage-yes ttm-bg mt-md-50">
                                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" style={{ backgroundImage: 'url(https://via.placeholder.com/570x520?text=570x520+col-bgimage-2.jpg)' }}></div>
                                <div className="layer-content"></div>
                                <img src="https://via.placeholder.com/570x520?text=570x520+col-bgimage-2.jpg" className="img-fluid col-bg-img-res" alt="bgimage" />
                            </div>{/* col-img-bg-img-two end */}
                        </div>
                        <div className="col-md-6">
                            <div className="pt-70 pt-md-50 pl-70 pl-md-0">
                                {/* section title */}
                                <div className="section-title">
                                    <div className="title-header">
                                        <h3>Choose <span className="text-theme-SkinColor">any</span></h3>
                                        <h2 className="title">Business!</h2>
                                    </div>
                                    <div className="title-desc"><p>HireCo has over 30 years experience of Financial, Marketing and Business Solutions 
                                        expertise. Helps businesses improve their processes, products, services. Serve as the intermediary between businesses.</p></div>
                                </div>{/* section title end */}
                                {/* ttm-progress-bar */}
                                <div className="ttm-progress-bar clearfix">
                                    <h3 className="progressbar-title">Recruitment Outsourcing</h3>
                                    <ProgressBar  rect  percentage="90" />
                                </div>
                                {/* ttm-progress-bar end */}
                                {/* ttm-progress-bar */}
                                <div className="ttm-progress-bar clearfix">
                                    <h3 className="progressbar-title">Contingency Recruitment</h3>
                                    <ProgressBar  rect  percentage="70" />
                                </div>
                                {/* ttm-progress-bar end */}
                                {/* ttm-progress-bar */}
                                <div className="ttm-progress-bar clearfix">
                                    <h3 className="progressbar-title">On-demand Recruitment</h3>
                                    <ProgressBar  rect  percentage="80" />
                                </div>{/* ttm-progress-bar end */}
                            </div>
                        </div>
                    </div>{/* row end */}
                </div>
            </section>
            {/* about-section */}


            {/* padding_zero-section */}
            <section className="ttm-row padding_zero-section bg-layer bg-layer-equal-height mb-70 mb-md-0 clearfix">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-7 col-md-12">
                            {/* col-img-img-three */}
                            <div className="col-bg-img-three ttm-bg ttm-col-bgimage-yes ttm-left-span z-index-2">
                                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://via.placeholder.com/1092x708?text=1092x708+col-bgimage-3.jpg)' }}></div>
                                <div className="layer-content">
                                </div>
                                <img className="img-fluid col-bg-img-res" src="https://via.placeholder.com/1092x708?text=1092x708+col-bgimage-3.jpg" alt="bgimage" />
                            </div>{/* col-img-bg-img-one end */}
                        </div>
                        <div className="col-lg-5">
                            <div className="ttm-bg ttm-col-bgcolor-yes bg-theme-DarkColor ttm-bg ttm-right-span spacing-1 z-index-1">
                                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer bg-theme-DarkColor">
                                    <div className="ttm-col-wrapper-bg-layer-inner"></div>
                                </div>
                                <div className="layer-content text-theme-WhiteColor">
                                    {/* section title */}
                                    <div className="section-title">
                                        <div className="title-header">
                                            <h3>How <span className="text-theme-SkinColor">we are! </span></h3>
                                            <h2 className="title">Reliable & Cost Efficient Recruitment Agency</h2>
                                        </div>
                                    </div>{/* section title end */}
                                    <div className="ttm-tabs ttm-tab-style-01">
                                        <Tabs>
                                            <TabList className="tabs">
                                                <Tab className="tab"><Link className="tab-1" tabIndex="0">Our Mision</Link></Tab>
                                                <Tab className="tab"><Link className="tab-2" tabIndex="0">Our Vision</Link></Tab>
                                                <Tab className="tab"><Link className="tab-3" tabIndex="0">Core Values</Link></Tab>
                                            </TabList> 
                                            <div className="content-tab mb_15">                                
                                                <TabPanel>
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-3 col-sm-4">
                                                        <img className="img-fluid alignleft" 
                                                        height="200" width="200" src="https://via.placeholder.com/200x200?text=tab-img01-200x200.jpg" alt="image" />
                                                    </div>
                                                    <div className="col-lg-8 col-md-9 col-sm-8">
                                                        <div className="pt-15">
                                                            <p>Let's enable the discovery of opportunities by providing consistently superior solutions.
                                                                    To add value & respect individuality and diversity while growing...</p>
                                                            <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor text-theme-WhiteColor">
                                                                <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">To add value for our clients & candidates</div></li>
                                                                <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">Agency manages the end-to-end process</div></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                </TabPanel>
                                                <TabPanel>
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-3 col-sm-4">
                                                        <img className="img-fluid alignleft" height="200" width="200" src="https://via.placeholder.com/200x200?text=tab-img02-200x200.jpg
" alt="image" />
                                                    </div>
                                                    <div className="col-lg-8 col-md-9 col-sm-8">
                                                        <div className="pt-15">
                                                            <p>Let's enable the discovery of opportunities by providing consistently superior solutions.
                                                                    To add value & respect individuality and diversity while growing...</p>
                                                            <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor text-theme-WhiteColor">
                                                                <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">To add value for our clients & candidates</div></li>
                                                                <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">Agency manages the end-to-end process</div></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                </TabPanel>
                                                <TabPanel>
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-3 col-sm-4">
                                                        <img className="img-fluid alignleft" height="200" width="200" src="https://via.placeholder.com/200x200?text=tab-img03-200x200.jpg
" alt="image" />
                                                    </div>
                                                    <div className="col-lg-8 col-md-9 col-sm-8">
                                                        <div className="pt-15">
                                                            <p>Let's enable the discovery of opportunities by providing consistently superior solutions.
                                                                    To add value & respect individuality and diversity while growing...</p>
                                                            <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor text-theme-WhiteColor">
                                                                <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">To add value for our clients & candidates</div></li>
                                                                <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">Agency manages the end-to-end process</div></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                </TabPanel>
                                            </div>       
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* row end */}
                </div>
            </section>
            {/* padding_zero-section end */}
                        
            {/* testimonial-section */}
            <section className="ttm-row testimonial-section clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title title-style-center_text">
                                <div className="title-header">
                                    <h3>Our <span className="text-theme-SkinColor">Clients!</span></h3>
                                    <h2 className="title">What Our Client Says!</h2>
                                </div>
                            </div>
                        </div>
                      </div>
                    <Slider className="row slick_slider slick-arrows-style1" {...slick_slider} slidesToShow={3} arrows={true}>
                        <div className="col-lg-12"> 
                            {/* testimonials */}
                            <div className="testimonials ttm-testimonial-box-view-style1">
                                <div className="testimonial-content">
                                    <blockquote className="testimonial-text">It has always been so easy to do work with team member at HireCo. It's an much effortless partnership.</blockquote>
                                    <div className="star-ratings">
                                        <ul className="rating">
                                            <li className="active"><i className="fa fa-star"></i></li>
                                            <li className="active"><i className="fa fa-star"></i></li>
                                            <li className="active"><i className="fa fa-star"></i></li>
                                            <li className="active"><i className="fa fa-star"></i></li>
                                            <li className="active"><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>                                       
                                <div className="testimonial-bottom">
                                    <div className="testimonial-avatar">
                                        <div className="testimonial-img">
                                            <img className="img-fluid" src="https://via.placeholder.com/150x150?text=150x150+01.jpg" alt="testimonial-img" />
                                        </div>
                                    </div>
                                    <div className="testimonial-caption">
                                        <label>Manager</label>                                             
                                        <h3>Alex Jhon Martin</h3>
                                    </div>
                                </div>
                            </div> {/* testimonials end */}
                        </div>
                        <div className="col-lg-12"> 
                            {/* testimonials */}
                            <div className="testimonials ttm-testimonial-box-view-style1">
                                <div className="testimonial-content">
                                    <blockquote className="testimonial-text">The national award-winning staffing agency that was built with our trademarked tagline, Expect More, We Do.</blockquote>
                                    <div className="star-ratings">
                                        <ul className="rating">
                                            <li className="active"><i className="fa fa-star"></i></li>
                                            <li className="active"><i className="fa fa-star"></i></li>
                                            <li className="active"><i className="fa fa-star"></i></li>
                                            <li className="active"><i className="fa fa-star"></i></li>
                                            <li className="active"><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>                                       
                                <div className="testimonial-bottom">
                                    <div className="testimonial-avatar">
                                        <div className="testimonial-img">
                                            <img className="img-fluid" src="https://via.placeholder.com/150x150?text=150x150+02.jpg" alt="testimonial-img" />
                                        </div>
                                    </div>
                                    <div className="testimonial-caption">
                                        <label>Manager</label>                                             
                                        <h3>Michal Wincent</h3>
                                    </div>
                                </div>
                            </div> {/* testimonials end */}
                        </div>
                        <div className="col-lg-12"> 
                            {/* testimonials */}
                            <div className="testimonials ttm-testimonial-box-view-style1">
                                <div className="testimonial-content">
                                    <blockquote className="testimonial-text">This was my first experience working with a recruiter and it has been amazing. I couldn’t have asked for more</blockquote>
                                    <div className="star-ratings">
                                        <ul className="rating">
                                            <li className="active"><i className="fa fa-star"></i></li>
                                            <li className="active"><i className="fa fa-star"></i></li>
                                            <li className="active"><i className="fa fa-star"></i></li>
                                            <li className="active"><i className="fa fa-star"></i></li>
                                            <li className="active"><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>                                       
                                <div className="testimonial-bottom">
                                    <div className="testimonial-avatar">
                                        <div className="testimonial-img">
                                            <img className="img-fluid" src="https://via.placeholder.com/150x150?text=150x150+03.jpg" alt="testimonial-img" />
                                        </div>
                                    </div>
                                    <div className="testimonial-caption">
                                        <label>Manager</label>                                             
                                        <h3>Rayan Methew</h3>
                                    </div>
                                </div>
                            </div> {/* testimonials end */}
                        </div>
                        <div className="col-lg-12"> 
                            {/* testimonials */}
                            <div className="testimonials ttm-testimonial-box-view-style1">
                                <div className="testimonial-content">
                                    <blockquote className="testimonial-text">The national award-winning staffing agency that was built with our trademarked tagline, Expect More, We Do.</blockquote>
                                    <div className="star-ratings">
                                        <ul className="rating">
                                            <li className="active"><i className="fa fa-star"></i></li>
                                            <li className="active"><i className="fa fa-star"></i></li>
                                            <li className="active"><i className="fa fa-star"></i></li>
                                            <li className="active"><i className="fa fa-star"></i></li>
                                            <li className="active"><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>                                       
                                <div className="testimonial-bottom">
                                    <div className="testimonial-avatar">
                                        <div className="testimonial-img">
                                            <img className="img-fluid" src="https://via.placeholder.com/150x150?text=150x150+02.jpg" alt="testimonial-img" />
                                        </div>
                                    </div>
                                    <div className="testimonial-caption">
                                        <label>Manager</label>                                             
                                        <h3>Michal Wincent</h3>
                                    </div>
                                </div>
                            </div> {/* testimonials end */}
                        </div>
                    </Slider>
                </div>
            </section>
            {/* testimonial-section end */}

            {/* aboutus-section */}
            <section className="ttm-row about-section bg-img2 bg-theme-DarkColor ttm-bg ttm-bgimage-yes text-theme-WhiteColor clearfix" style={{ backgroundImage: 'url("https://via.placeholder.com/1920x630?text=1920x630+row-bgimage-2.jpg")' }}>
                <div className="ttm-row-wrapper-bg-layer ttm-bg-layer bg-theme-DarkColor"></div>
                <div className="container">
                    {/* row */}
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-4 col-md-12">
                            {/* section title */}
                            <div className="section-title">
                                <div className="title-header">
                                    <h3>More than 50,000 <span className="text-theme-SkinColor">happy client</span></h3>
                                    <h2 className="title">The Most Trusted and Professional Recruitment <span className="text-theme-SkinColor"> Agency</span></h2>
                                </div>
                            </div>{/* section title end */}
                            <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white mt-15" 
                            href={  '/candidate_list'}>Hiring Now!</a>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-5">
                            <div className="pt-lg-30">
                                {/* fid */}
                                <div className="ttm-fid inside ttm-fid-view-topicon style1">
                                    <div className="ttm-fid-icon-wrapper">
                                        <i className="flaticon flaticon-recruiting"></i>
                                    </div>
                                    <div className="ttm-fid-contents">
                                        <h4><CountUp start={0} end={2887} duration={20} delay={2} /></h4>
                                        <h3 className="ttm-fid-title">Happy Clients</h3>
                                    </div>
                                </div>{/* fid end */}
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-8 col-sm-7">
                            <div className="pt-lg-20 pb-30">
                                <p className="text-theme-WhiteColor">We have over 30 years experience of Financial, Musiness Solutions expertise, our goal imize your.</p>
                            </div>
                            {/* ttm-progress-bar */}
                            <div className="ttm-progress-bar style2 clearfix">
                                <h3 className="progressbar-title">Consulting Experience</h3>
                                <ProgressBar rect percentage="90" />
                            </div>
                            {/* ttm-progress-bar end */}
                            {/* ttm-progress-bar */}
                            <div className="ttm-progress-bar style2 clearfix">
                                <h3 className="progressbar-title">Investment Plan</h3>
                                <ProgressBar rect percentage="85" />
                            </div>
                            {/* ttm-progress-bar end */}
                        </div>
                        <div className="col-lg-12">
                            <div className="pt-100 pt-md-0"></div>
                        </div>
                    </div>
                </div>
            </section> 
            {/* aboutus-section end */}


            {/* padding_zero-section */}
            <section className="ttm-row padding_zero-section clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pt-5 bg-theme-SkinColor mt_100 mt-md-60"></div>
                            <div className="bg-theme-WhiteColor box-shadow pt-md-40 pb-md-30">
                                <div className="row g-0 ttm-vertical_sep">
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        {/* fid */}
                                        <div className="ttm-fid inside ttm-fid-view-topicon style2">
                                            <div className="ttm-fid-icon-wrapper">
                                                <i className="flaticon flaticon-headhunting"></i>
                                            </div>
                                            <div className="ttm-fid-contents">
                                                <h4><CountUp start={0} end={8705} duration={20} delay={2} /></h4>
                                                <h3 className="ttm-fid-title">Welath Of Experiance</h3>
                                            </div>
                                        </div>{/* fid end */}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        {/* fid */}
                                        <div className="ttm-fid inside ttm-fid-view-topicon style2">
                                            <div className="ttm-fid-icon-wrapper">
                                                <i className="flaticon flaticon-technical-support"></i>
                                            </div>
                                            <div className="ttm-fid-contents">
                                                <h4><CountUp start={0} end={480} duration={20} delay={2} /></h4>
                                                <h3 className="ttm-fid-title">Professional Recruiters</h3>
                                            </div>
                                        </div>{/* fid end */}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        {/* fid */}
                                        <div className="ttm-fid inside ttm-fid-view-topicon style2">
                                            <div className="ttm-fid-icon-wrapper">
                                                <i className="flaticon flaticon-recruitment-4"></i>
                                            </div>
                                            <div className="ttm-fid-contents">
                                                <h4><CountUp start={0} end={6260} duration={20} delay={2} /></h4>
                                                <h3 className="ttm-fid-title">No. of Candidates Hired</h3>
                                            </div>
                                        </div>{/* fid end */}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        {/* fid */}
                                        <div className="ttm-fid inside ttm-fid-view-topicon style2">
                                            <div className="ttm-fid-icon-wrapper">
                                                <i className="flaticon flaticon-recruitment-3"></i>
                                            </div>
                                            <div className="ttm-fid-contents">
                                                <h4><CountUp start={0} end={9774} duration={20} delay={2} /></h4>
                                                <h3 className="ttm-fid-title">Larger Community</h3>
                                            </div>
                                        </div>{/* fid end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* padding_zero-section end */}


            {/* blog-section */}
            <section className="ttm-row blog-section clearfix">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-12">
                            {/* section title */}
                            <div className="section-title title-style-center_text">
                                <div className="title-header">
                                    <h3>Extend <span className="text-theme-SkinColor">Knowledge</span></h3>
                                    <h2 className="title">Latest News & Articles</h2>
                                </div>
                            </div>{/* section title end */}
                        </div>
                    </div>{/* row end */}
                    {/* Slider */}
                    <Slider className="row slick_slider mb_10" {...slick_slider} slidesToShow={3} arrows={false} autoplay={false}>
                        <div className="col-md-12">
                            {/* featured-imagebox-post */}
                            <div className="featured-imagebox featured-imagebox-post style1">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/600x430?text=600x430+blog-01-600x430.jpg" alt="blog-image" />
                                    <div className="ttm-box-post-date">
                                        <span className="ttm-entry-date">
                                            <time className="entry-date" dateTime="2021-03-18T04:16:25+00:00">18
                                            <span className="entry-month entry-year">Mar</span></time>
                                        </span>
                                    </div>
                                </div>{/* featured-thumbnail end */}
                                <div className="featured-content">
                                    <div className="post-meta">
                                        <span className="ttm-meta-line byline">Admin</span>
                                        <span className="ttm-meta-line category-link">business</span>
                                    </div>
                                    <div className="featured-title">
                                        <h3><a href={  '/blog_details'}>Are  meetings falling to flat? Try these 10 tips</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Whatever you do in planning, facilitating. Goal should revolve support </p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={  '/blog_details'}>read more!</a>
                                </div>
                            </div>{/* featured-imagebox-post end */}
                        </div>
                        <div className="col-md-12">
                            {/* featured-imagebox-post */}
                            <div className="featured-imagebox featured-imagebox-post style1">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/600x430?text=600x430+blog-02-600x430.jpg" alt="blog-image" />
                                    <div className="ttm-box-post-date">
                                        <span className="ttm-entry-date">
                                            <time className="entry-date" dateTime="2021-03-18T04:16:25+00:00">18
                                            <span className="entry-month entry-year">Mar</span></time>
                                        </span>
                                    </div>
                                </div>{/* featured-thumbnail end */}
                                <div className="featured-content">
                                    <div className="post-meta">
                                        <span className="ttm-meta-line byline">Admin</span>
                                        <span className="ttm-meta-line category-link">business</span>
                                    </div>
                                    <div className="featured-title">
                                        <h3><a href={  '/blog_details'}>Are You Moving Businesses To Another State?</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>A business leader must consider issues beyond choosing a moving!</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={  '/blog_details'}>read more!</a>
                                </div>
                            </div>{/* featured-imagebox-post end */}
                        </div>
                        <div className="col-md-12">
                            {/* featured-imagebox-post */}
                            <div className="featured-imagebox featured-imagebox-post style1">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/600x430?text=600x430+blog-03-600x430.jpg" alt="blog-image" />
                                    <div className="ttm-box-post-date">
                                        <span className="ttm-entry-date">
                                            <time className="entry-date" dateTime="2021-03-18T04:16:25+00:00">18
                                            <span className="entry-month entry-year">Mar</span></time>
                                        </span>
                                    </div>
                                </div>{/* featured-thumbnail end */}
                                <div className="featured-content">
                                    <div className="post-meta">
                                        <span className="ttm-meta-line byline">Admin</span>
                                        <span className="ttm-meta-line category-link">business</span>
                                    </div>
                                    <div className="featured-title">
                                        <h3><a href={  '/blog_details'}>Shame: Does It Fine to Fit In The Workplace?</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>This can be innate or external and results can be surprising performance</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={  '/blog_details'}>read more!</a>
                                </div>
                            </div>{/* featured-imagebox-post end */}
                        </div>
                        <div className="col-md-12">
                            {/* featured-imagebox-post */}
                            <div className="featured-imagebox featured-imagebox-post style1">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/600x430?text=600x430+blog-04-600x430.jpg" alt="blog-image" />
                                    <div className="ttm-box-post-date">
                                        <span className="ttm-entry-date">
                                            <time className="entry-date" dateTime="2021-03-18T04:16:25+00:00">18
                                            <span className="entry-month entry-year">Mar</span></time>
                                        </span>
                                    </div>
                                </div>{/* featured-thumbnail end */}
                                <div className="featured-content">
                                    <div className="post-meta">
                                        <span className="ttm-meta-line byline">Admin</span>
                                        <span className="ttm-meta-line category-link">business</span>
                                    </div>
                                    <div className="featured-title">
                                        <h3><a href={  '/blog_details'}>How to Handle Negativity in Former People?</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Whatever you do in planning, facilitating. Goal should revolve support</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={  '/blog_details'}>read more!</a>
                                </div>
                            </div>{/* featured-imagebox-post end */}
                        </div>
                    </Slider>
                    {/* Slider end */}
                </div>
            </section>
            {/* blog-section end */}


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
                                            <i className="flaticon flaticon-recruitment"></i>
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
                                href={  '/contact_02'}>Get Started</a>
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


export default Home;
