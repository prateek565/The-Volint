import React, { Component } from 'react';
import Slider from 'react-slick';
import ProgressBar from 'react-animated-progress-bar';
import Header from '../layout/Header';
import PageHeader from "../layout/PageHeader";
import { Footer } from '../layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CountUp from 'react-countup';


export class Services extends Component {
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

        responsive: [ {

            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },{
    
          breakpoint: 778,
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
            
            {/* PageHeader */} 
            <PageHeader
                title="services"
                breadcrumb="services"
            />
            {/* PageHeader end */}  

            
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
                                        <h3><a href={process.env.PUBLIC_URL + '/services_details'}>Manpower Supply</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>We are quality personnel experts to the fields of expertise that needed for all kind of recruit projects</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" 
                                    href={process.env.PUBLIC_URL + '/services_details'}>read more!</a>
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
                                        <h3><a href={process.env.PUBLIC_URL + '/services_details'}>Forte Acquisition</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>HireCo tens to accelerand future based solutions to support customers.</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" 
                                    href={process.env.PUBLIC_URL + '/services_details'}>read more!</a>
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
                                        <h3><a href={process.env.PUBLIC_URL + '/services_details'}>Technical Services</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>HireCo supplies variety of technical service including fabrication, design,  and commissioning</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" 
                                    href={process.env.PUBLIC_URL + '/services_details'}>read more!</a>
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
                                        <h3><a href={process.env.PUBLIC_URL + '/services_details'}>Human Resource</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>The most daunting task of  a Human Resource department, which must need to meet deadline.</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey"
                                     href={process.env.PUBLIC_URL + '/services_details'}>read more!</a>
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
                                        <h3><a href={process.env.PUBLIC_URL + '/services_details'}>Executive Search</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>We, HireCo specializes in recruiting  executives and other personnel for their client company</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" 
                                    href={process.env.PUBLIC_URL + '/services_details'}>read more!</a>
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
                                        <h3><a href={process.env.PUBLIC_URL + '/services_details'}>Retained search</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>HireCo tens to accelerate innovation current and future based solutions to support customers.</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" 
                                    href={process.env.PUBLIC_URL + '/services_details'}>read more!</a>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                    </Slider>
                    {/* Slider end */}
                </div>
            </section>
            {/* services-section end */}

                        
            {/* cta-section */}
            <section className="ttm-row cta-section bg-img7 bg-theme-DarkColor ttm-bg ttm-bgimage-yes text-theme-WhiteColor clearfix" style={{ backgroundImage: 'url("https://via.placeholder.com/1920x490?text=1920x490+row-bgimage-7.jpg")' }}>
                <div className="ttm-row-wrapper-bg-layer ttm-bg-layer bg-theme-DarkColor"></div>
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-8 m-auto row-title">
                            {/* section-title */}
                            <div className="section-title title-style-center_text">
                                <div className="title-header">
                                    <h3><span className="text-theme-SkinColor">More than 50,000 happy client</span></h3>
                                    <h2 className="title">Get In Touch With Recruitment Staffing<span className="text-theme-SkinColor"> Agency!</span></h2>
                                </div>
                            </div>{/* section-title end */}
                            <div className="text-center pt-10">
                                <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white" 
                                href={process.env.PUBLIC_URL + '/contact_01'}>contact us</a>
                            </div>
                        </div>
                    </div>{/* row end */}
                </div>
            </section>
            {/* cta-section end */}

         
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
                                        <h3><a href={process.env.PUBLIC_URL + '/blog_details'}>Are  meetings falling to flat? Try these 10 tips</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Whatever you do in planning, facilitating. Goal should revolve support </p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={process.env.PUBLIC_URL + '/blog_details'}>read more!</a>
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
                                        <h3><a href={process.env.PUBLIC_URL + '/blog_details'}>Are You Moving Businesses To Another State?</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>A business leader must consider issues beyond choosing a moving!</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={process.env.PUBLIC_URL + '/blog_details'}>read more!</a>
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
                                        <h3><a href={process.env.PUBLIC_URL + '/blog_details'}>Shame: Does It Fine to Fit In The Workplace?</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>This can be innate or external and results can be surprising performance</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={process.env.PUBLIC_URL + '/blog_details'}>read more!</a>
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
                                        <h3><a href={process.env.PUBLIC_URL + '/blog_details'}>How to Handle Negativity in Former People?</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Whatever you do in planning, facilitating. Goal should revolve support</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={process.env.PUBLIC_URL + '/blog_details'}>read more!</a>
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
                                <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white" href='/contact-us'>Hiring Now!</a>
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


export default Services;