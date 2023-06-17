import React, { Component } from 'react';
import Slider from 'react-slick';
import ProgressBar from 'react-animated-progress-bar';
import Header from '../components/layout/Header3';
import { Banner } from '../components/banner/Home2_banner';
import { Footer } from '../components/layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CountUp from 'react-countup';
import Video from '../components/layout/Video';


const sliderElements = [
    { id: 1, description: <div className="col-lg-12"> 
                            {/* testimonials */}
                            <div className="testimonials ttm-testimonial-box-view-style2" role="group">
                                <div className="testimonial-top">
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
                                <div className="testimonial-content">
                                    <blockquote className="testimonial-text">It has always been so easy to do work with any team member at HireCo. 
                                    An effortless partnership. I was mentored by one of the consultants in a time when I was very young and vulnerable in 
                                    the HR world. Recommend HireCo!</blockquote>
                                </div>
                            </div>{/* testimonials end */}
                        </div> 
    },
    { id: 2, description: <div className="col-lg-12"> 
                            {/* testimonials */}
                            <div className="testimonials ttm-testimonial-box-view-style2" role="group">
                                <div className="testimonial-top">
                                    <div className="testimonial-avatar">
                                        <div className="testimonial-img">
                                            <img className="img-fluid" src="https://via.placeholder.com/150x150?text=150x150+02.jpg" alt="testimonial-img" />
                                        </div>
                                    </div>
                                    <div className="testimonial-caption">
                                        <label>Manager</label>                                             
                                        <h3>Alex Jhon Martin</h3>
                                    </div>
                                </div>
                                <div className="testimonial-content">
                                    <blockquote className="testimonial-text">A national award-winning staffing agency that was built with our 
                                    trademarked tagline, Expect More, We Do. was born out of the desire to be better. We developed our 4-dimensional
                                     matching process with our clients and contractors in mind.</blockquote>
                                </div>
                            </div>{/* testimonials end */}
                        </div> 
    },
    { id: 3, description: <div className="col-lg-12"> 
                            {/* testimonials */}
                            <div className="testimonials ttm-testimonial-box-view-style2" role="group">
                                <div className="testimonial-top">
                                    <div className="testimonial-avatar">
                                        <div className="testimonial-img">
                                            <img className="img-fluid" src="https://via.placeholder.com/150x150?text=150x150+03.jpg" alt="testimonial-img" />
                                        </div>
                                    </div>
                                    <div className="testimonial-caption">
                                        <label>Manager</label>                                             
                                        <h3>Alex Jhon Martin</h3>
                                    </div>
                                </div>
                                <div className="testimonial-content">
                                    <blockquote className="testimonial-text">I have been working with HireCo, for the past month. This was my first experience working
                                     with a recruiter and it has been amazing. I couldn’t have asked for more. She took into account my CV and experience and 
                                     recommended.</blockquote>
                                </div>
                            </div>{/* testimonials end */}
                        </div> 
    },
    { id: 4, description: <div className="col-lg-12"> 
                            {/* testimonials */}
                            <div className="testimonials ttm-testimonial-box-view-style2" role="group">
                                <div className="testimonial-top">
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
                                <div className="testimonial-content">
                                    <blockquote className="testimonial-text">HireCo has been the ultimate recruitment professional throughout the entire
                                     process. It has kept to his word regarding communicating with me and with all other commitments made. I have found
                                      them be extremely helpful.</blockquote>
                                </div>
                            </div>{/* testimonials end */}
                        </div> 
    },
    { id: 5, description: <div className="col-lg-12"> 
                            {/* testimonials */}
                            <div className="testimonials ttm-testimonial-box-view-style2" role="group">
                                <div className="testimonial-top">
                                    <div className="testimonial-avatar">
                                        <div className="testimonial-img">
                                            <img className="img-fluid" src="https://via.placeholder.com/150x150?text=150x150+02.jpg" alt="testimonial-img" />
                                        </div>
                                    </div>
                                    <div className="testimonial-caption">
                                        <label>Manager</label>                                             
                                        <h3>Alex Jhon Martin</h3>
                                    </div>
                                </div>
                                <div className="testimonial-content">
                                    <blockquote className="testimonial-text">I can't thank HireCo Recruitment enough for helping me secure my current role. 
                                    Very professional & is very good at determining where a person's skill set is best served. Whenever I had the pleasure 
                                    of speaking them always!</blockquote>
                                </div>
                            </div>{/* testimonials end */}
                        </div> 
    }
];


export class Home2 extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          photoIndex: 0,
          isOpen: false,
          currentSlide: 0,
        };
    }


    handleAfterChange = (index) => {
        this.setState({
        currentSlide: index
        });
    };

    render() {
        const { photoIndex, isOpen } = this.state;
        const settings = {
            beforeChange: function (currentSlide, nextSlide) {
            },
            afterChange: this.handleAfterChange
          };


        var slick_slider = {
            dots: false,
            arrow: false,
            autoplay: true,
            infinite: true,
            speed: 1000,
            slidesToScroll: 1,
            slidesToShow:4,
            rows: 1,
           
            responsive: [{
        
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
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

            
            {/* about-section */}
            <section className="ttm-row about-section clearfix">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-6">
                            {/* section title */}
                            <div className="section-title">
                                <div className="title-header">
                                    <h3>who <span className="text-theme-SkinColor">we are!</span></h3>
                                    <h2 className="title">Best Employment Services For Your Business</h2>
                                </div>
                                <div className="title-desc">
                                    <p>Our dedicated group of experts assists you with meeting your business objectives. We give job searchers and
                                     IT experts the chance to track down ideal a profession that guarantees long term development and learning.</p>
                                </div>
                            </div>{/* section title end */}
                            <div className="mb-35">
                                <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor text-theme-black">
                                    <li><i className="far fa-check-circle"></i>
                                        <div className="ttm-list-li-content ">The most progressive and expert staffing arrangement worldwide</div>
                                    </li>
                                    <li><i className="far fa-check-circle"></i>
                                        <div className="ttm-list-li-content">With over 2,000 offices & thousands of recruiters through overseas</div>
                                    </li>
                                    <li><i className="far fa-check-circle"></i>
                                        <div className="ttm-list-li-content">Create personalized connections through the branded experience</div>
                                    </li>
                                    <li><i className="far fa-check-circle"></i>
                                        <div className="ttm-list-li-content">We have 90% best strategies that get the best suitable candidates</div>
                                    </li>
                                    <li><i className="far fa-check-circle"></i>
                                        <div className="ttm-list-li-content">All your recruitment process outsourcing with extreme truthfulness</div>
                                    </li>
                                    <li><i className="far fa-check-circle"></i>
                                        <div className="ttm-list-li-content">We have 90% best strategies that get the best suitable candidates</div>
                                    </li>
                                </ul>
                            </div>
                            <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-dark" 
                            href={  '/'}>view more</a>
                        </div>
                        <div className="col-lg-6 col-md-9 col-sm-10 col-12 mx-auto">
                            <div className="mr-40 ml-20 pb-60 pt-lg-50">
                                <div className="d-flex justify-content-between" style={{ backgroundImage: 'url(https://via.placeholder.com/508x500?text=single-img-01-508x500.png)' , backgroundSize: 'cover' }}>
                                    <div className="pt-20 pr-20 bg-theme-WhiteColor ml_20 mb_60 mt-200">
                                        <img src="https://via.placeholder.com/350x290?text=single-img-02-350x290.png" className="img-fluid" alt="bgimage" />
                                    </div>
                                    <div className="d-flex align-items-start h-100 mr_30 pt-50">
                                        <div className="ttm-play-icon-btn p-20 bg-theme-SkinColor">
                                            <Video className="flaticon-play-button text-theme-WhiteColor" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* row end */}
                </div>
            </section>
            {/* about-section end */}


            {/* features-section */}
            <section className="ttm-row features-section bg-theme-GreyColor clearfix" >
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-12">
                            {/* section title */}
                            <div className="section-title title-style-center_text">
                                <div className="title-header">
                                    <h3>What <span className="text-theme-SkinColor">we serve!</span></h3>
                                    <h2 className="title">Recruitment Services</h2>
                                </div>
                            </div>{/* section title end */}
                        </div>
                    </div>{/* row end */}
                    {/* row */}
                    <div className="row row-equal-height">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-before-title style3">
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                        <i className="flaticon-research"></i>
                                    </div>
                                </div>
                                <div className="featured-title">
                                    <h3>Human Resource</h3>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-desc">
                                        <p>Make up the workforce of an organization, business firm, industry, or economy</p>
                                    </div>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-before-title style3">
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                        <i className="flaticon-recruitment-7"></i>
                                    </div>
                                </div>
                                <div className="featured-title">
                                    <h3>Executive Search</h3>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-desc">
                                        <p>Specializes in recruiting executives and other personnel for their client company </p>
                                    </div>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-before-title style3">
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                        <i className="flaticon-recruiting"></i>
                                    </div>
                                </div>
                                <div className="featured-title">
                                    <h3>Retained search</h3>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-desc">
                                        <p>S5LNC tens to accelerate innovation current and future based solutions to support</p>
                                    </div>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-before-title style3">
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                        <i className="flaticon-recruitment-7"></i>
                                    </div>
                                </div>
                                <div className="featured-title">
                                    <h3>Forte Acquisition</h3>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-desc">
                                        <p>To accelerate innovation current and future based solutions to support clients!</p>
                                    </div>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-before-title style3">
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                        <i className="flaticon-recruitment"></i>
                                    </div>
                                </div>
                                <div className="featured-title">
                                    <h3>Manpower Supply</h3>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-desc">
                                        <p>A quality personnel to the fields of expertise that needed for all kind of projects</p>
                                    </div>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-before-title style3">
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                        <i className="flaticon-technical-support"></i>
                                    </div>
                                </div>
                                <div className="featured-title">
                                    <h3>Technical Services</h3>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-desc">
                                        <p>We do supply variety of services including fabrication, design, commissioning.</p>
                                    </div>
                                </div>
                            </div>{/* ttm-box-view-overlay end */}
                        </div>
                    </div>
                    {/* row end */}
                </div>
            </section>
            {/* features-section end */}


            {/* padding_zero-section */}
            <section className="ttm-row padding_zero-section bg-theme-DarkColor bg-layer-equal-height mb-100 mb-lg-0 clearfix">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-6">
                            {/* col-img-img-four */}
                            <div className="col-bg-img-four ttm-col-bgimage-yes ttm-bg mt-100 mt-lg-60 mr-30 mr-lg-0 border border-15
                            border-white p-15 h-100">
                                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://via.placeholder.com/560x505?text=560x505+col-bgimage-4.jpg)' }}></div>
                                <div className="layer-content"></div>
                                <img src="https://via.placeholder.com/560x505?text=560x505+col-bgimage-4.jpg" className="img-fluid col-bg-img-res" alt="bgimage" />
                            </div>{/* col-img-bg-img-four end */}
                        </div>
                        <div className="col-lg-6">
                            <div className="pt-140 pt-lg-50 pb-100 pb-lg-60">
                                {/* section title */}
                                <div className="section-title">
                                    <div className="title-header">
                                        <h3>Happy <span className="text-theme-SkinColor">Clients</span></h3>
                                        <h2 className="title">Listen Our Clients Stories</h2>
                                    </div>
                                </div>{/* section title end */}
                                <div className="position-relative">
                                    <Slider className="slick_slider slick-arrows-style3" 
                                    {...slick_slider} slidesToShow={1} arrows={true} fade={true} {...settings}>
                                        {sliderElements.map((element) => (
                                            <div key={element.id}>
                                                <p>{element.description}</p>
                                            </div>
                                        ))}
                                    </Slider>
                                    <div className="slick_slider_countable">
                                        <span className="currentSlide">{this.state.currentSlide + 1}</span>
                                        <span> / </span>
                                        <span className="totalSlide">{sliderElements.length}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* padding_zero-section end */}

            
            {/* services-section */}
            <section className="ttm-row services-section bg-img3 clearfix" style={{ backgroundImage: 'url("images/bg-image/row-bgimage-3.png")' }}>
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-12">
                            {/* section title */}
                            <div className="section-title title-style-center_text">
                                <div className="title-header">
                                    <h3>We Serve <span className="text-theme-SkinColor">Overseas</span></h3>
                                    <h2 className="title">We Are Service Worldwide</h2>
                                </div>
                            </div>{/* section title end */}
                        </div>
                    </div>{/* row end */}
                    {/* Slider */}
                    <Slider className="row slick_slider mb_10 slick-arrows-style1" {...slick_slider} slidesToShow={4} arrows={true}>
                        <div className="col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-country">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img src={"https://via.placeholder.com/720x600?text=720x600+country-01.jpg"} />
                                </div>{/* featured-thumbnail end */}
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={'/'}>United States</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>A millions of decision about who has a right to settle.</p>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-country">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/720x600?text=720x600+country-02.jpg" alt="image" />
                                </div>{/* featured-thumbnail end */}
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={'/'}>Australia</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Our head quarters is in Canberra, help throughout process</p>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-country">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/720x600?text=720x600+country-03.jpg" alt="image" />
                                </div>{/* featured-thumbnail end */}
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={'/'}>Canada</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>We will help in every step of the application process.</p>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-country">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/720x600?text=720x600+country-04.jpg" alt="image" />
                                </div>{/* featured-thumbnail end */}
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={'/'}>United Kingdom</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>We will help you with every step process of recruitment.</p>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-country">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/720x600?text=720x600+country-01.jpg" alt="image" />
                                </div>{/* featured-thumbnail end */}
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={'/'}>United States</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>A millions of decision about who has a right to settle.</p>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-country">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/720x600?text=720x600+country-03.jpg" alt="image" />
                                </div>{/* featured-thumbnail end */}
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={'/'}>Canada</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>We will help in every step of the application process.</p>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                    </Slider>
                    {/* Slider end */}
                </div>
            </section>
            {/* services-section end */}

                        
            {/* client-section */}
            {/* <section className="ttm-row client-section bg-theme-GreyColor clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4"> */}
                            {/* section-title */}
                            {/* <div className="section-title">
                                <div className="title-header">
                                    <h3>our <span className="text-theme-SkinColor">clients</span></h3>
                                    <h2 className="title">Partnership With Top Companies</h2>
                                </div>
                            </div> */}
                            {/* section-title end */}
                            {/* <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-dark" 
                             href={'/'}>Explore More Companies</a>
                        </div>
                        <div className="col-lg-8">
                            <div className="row g-0 ttm-vertical_sep mt-lg-50">
                                <div className="col-sm-4">
                                    <div className="client-box">
                                        <div className="client-thumbnail">
                                            <img className="img-fluid" src="https://via.placeholder.com/159x52?text=159x52+client-01.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="client-box">
                                        <div className="client-thumbnail">
                                            <img className="img-fluid" src="https://via.placeholder.com/159x52?text=159x52+client-02.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="client-box">
                                        <div className="client-thumbnail">
                                            <img className="img-fluid" src="https://via.placeholder.com/159x52?text=159x52+client-03.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ttm-horizontal_sep width-100"></div>
                            <div className="row g-0 ttm-vertical_sep">
                                <div className="col-sm-4">
                                    <div className="client-box">
                                        <div className="client-thumbnail">
                                            <img className="img-fluid" src="https://via.placeholder.com/159x52?text=159x52+client-04.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="client-box">
                                        <div className="client-thumbnail">
                                            <img className="img-fluid" src="https://via.placeholder.com/159x52?text=159x52+client-05.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="client-box mb-0">
                                        <div className="client-thumbnail">
                                            <img className="img-fluid" src="https://via.placeholder.com/159x52?text=159x52+client-06.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* client-section end */}


            {/* fid-section */}
            <section className="ttm-row fid-section bg-img4 bg-theme-SkinColor ttm-bg ttm-bgimage-yes text-theme-WhiteColor clearfix" style={{ backgroundImage: 'url("https://via.placeholder.com/1920x570?text=1920x570+row-bgimage-4.jpg")' }}>
                <div className="ttm-row-wrapper-bg-layer ttm-bg-layer bg-theme-DarkColor"></div>
                <div className="container">
                    {/* row */}
                    <div className="row ttm-vertical_sep mt_lg-15">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* fid */}
                            <div className="ttm-fid inside ttm-fid-view-lefticon style3">
                                <div className="ttm-fid-icon-wrapper">
                                    <i className="flaticon flaticon-headhunting"></i>
                                </div>
                                <div className="ttm-fid-contents">
                                    <h4><CountUp start={0} end={8705} duration={20} delay={2} /></h4>
                                    <h3 className="ttm-fid-title">Job seeker</h3>
                                </div>
                            </div>{/* fid end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* fid */}
                            <div className="ttm-fid inside ttm-fid-view-lefticon style3">
                                <div className="ttm-fid-icon-wrapper">
                                    <i className="flaticon flaticon-technical-support"></i>
                                </div>
                                <div className="ttm-fid-contents">
                                    <h4><CountUp start={0} end={480} duration={20} delay={2} /></h4>
                                    <h3 className="ttm-fid-title">Areas of expertise</h3>
                                </div>
                            </div>{/* fid end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* fid */}
                            <div className="ttm-fid inside ttm-fid-view-lefticon style3">
                                <div className="ttm-fid-icon-wrapper">
                                    <i className="flaticon flaticon-recruitment-4"></i>
                                </div>
                                <div className="ttm-fid-contents">
                                    <h4><CountUp start={0} end={6260} duration={20} delay={2} /></h4>
                                    <h3 className="ttm-fid-title">career hub</h3>
                                </div>
                            </div>{/* fid end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* fid */}
                            <div className="ttm-fid inside ttm-fid-view-lefticon style3">
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
                    {/* row end */}
                    <div className="ttm-horizontal_sep width-100 pt-60 mt-60 mt-lg-40"></div>
                    <div className="row align-items-center mb_35 mb-md-0">
                        <div className="col-lg-8 col-md-8">
                            {/* section title */}
                            <div className="section-title">
                                <div className="title-header">
                                    <h3>More than 50,000 <span className="text-theme-SkinColor">happy client</span></h3>
                                    <h2 className="title"><span className="fw-normal">Recruites</span> Let’s To Work Together Ready To Work 
                                    <span className="fw-normal"> With Us.</span></h2>
                                </div>
                            </div>{/* section title end */}
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="d-flex align-items-center justify-content-md-end">
                                <h6 className="font-weight-bold mb-0 mr-15">Watch Video!</h6>                                
                                <a  className=" d-flex">
                                    <span className="mb-0 p-10 ttm-icon ttm-icon_element-fill ttm-icon_element-color-skincolor ttm-icon_element-size-xs ttm-icon_element-style-rounded margin_right10 margin_bottom0">
                                        <Video className="fa fa-play" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            {/* fid-section end */}


            {/* about-section */}
            <section className="ttm-row about-section clearfix">
                <div className="container">
                    {/* row */}
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8">
                            {/* section title */}
                            <div className="section-title">
                                <div className="title-header">
                                    <h3>how <span className="text-theme-SkinColor"> we do!</span></h3>
                                    <h2 className="title">Recruitment Process</h2>
                                </div>
                            </div>{/* section title end */}
                        </div>
                        <div className="col-lg-6 col-md-4">
                            <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-dark mb-15"
                             href={'/login'}>Get Started</a>
                        </div>
                        <div className="col-lg-6">
                            <div className="featuredbox-number pr-30 pr-lg-0 pb-lg-50 pt-md-20">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style4">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-grey ttm-icon_element-size-md ttm-icon_element-style-rounded">
                                            <i className="ttm-num ti-info"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content ttm-bgcolor-grey">
                                        <div className="featured-title">
                                            <h3>We Identify Your Needs</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>Create a list of needs before you create a job posting. It may seem easy to identify a hiring need </p>
                                        </div>
                                    </div>
                                </div>{/* featured-icon-box end */}
                                {/* featured-icon-box */}
                                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style4">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-grey ttm-icon_element-size-md ttm-icon_element-style-rounded">
                                            <i className="ttm-num ti-info"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content ttm-bgcolor-grey">
                                        <div className="featured-title">
                                            <h3>Create Recruitment Plan</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>Save time and energy by creating the best recruitment plan. To get the word out about the job</p>
                                        </div>
                                    </div>
                                </div>{/* featured-icon-box end */}
                                {/* featured-icon-box */}
                                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style4">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-grey ttm-icon_element-size-md ttm-icon_element-style-rounded">
                                            <i className="ttm-num ti-info"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content ttm-bgcolor-grey">
                                        <div className="featured-title">
                                            <h3>Recruit Top Candidates</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>You will need to maintain timely communication or they will quickly move on to other opportunities</p>
                                        </div>
                                    </div>
                                </div>{/* featured-icon-box end */}
                                {/* featured-icon-box */}
                                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style4">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-grey ttm-icon_element-size-md ttm-icon_element-style-rounded">
                                            <i className="ttm-num ti-info"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content ttm-bgcolor-grey">
                                        <div className="featured-title">
                                            <h3>The Brand Job Offering</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>Create a list of needs before you create a job posting. It may seem easy to identify a hiring need</p>
                                        </div>
                                    </div>
                                </div>{/* featured-icon-box end */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10 col-11 m-auto">
                            <div className="bg-theme-GreyColor ttm-col-bgcolor-yes ttm-bg spacing-2 z-index_1">
                                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                                <div className="layer-content">                                      
                                </div>
                            </div>
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper">
                                <img className="img-fluid" src="https://via.placeholder.com/570x580?text=single-img-03-570x580.jpg" alt="single_03" />
                            </div>{/* ttm_single_image-wrapper */}                           
                        </div>
                    </div>{/* row end */}
                </div>
            </section>
            {/* about-section end */}


            {/* blog-section */}
            {/* <section className="ttm-row blog-section bg-theme-GreyColor clearfix">
                <div className="container"> */}
                    {/* row */}
                    {/* <div className="row">
                        <div className="col-lg-12"> */}
                            {/* section title */}
                            {/* <div className="section-title title-style-center_text">
                                <div className="title-header">
                                    <h3>Extend <span className="text-theme-SkinColor">Knowledge</span></h3>
                                    <h2 className="title">Latest News & Articles </h2>
                                </div>
                            </div> */}
                            {/* section title end */}
                        {/* </div>
                    </div> */}
                    {/* row end */}
                    {/* Slider */}
                    {/* <Slider className="row slick_slider mb_10 slick-arrows-style1" {...slick_slider} slidesToShow={2} arrows={true} autoplay={false} 
                    responsive= { [{ breakpoint: 992, settings: {slidesToShow: 2,slidesToScroll: 2 }},
                        {breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 }}] }>
                        <div className="col-md-12"> */}
                            {/* featured-imagebox-post */}
                            {/* <div className="featured-imagebox featured-imagebox-post style2"> */}
                                {/* featured-thumbnail */}
                                {/* <div className="featured-thumbnail"> */}
                                    {/* <img className="img-fluid" src="https://via.placeholder.com/400x480?text=400x480+blog-01-400x480.jpg" alt="blog-image" />
                                    <div className="ttm-box-post-date">
                                        <span className="ttm-entry-date">
                                            <time className="entry-date" dateTime="2021-03-18T04:16:25+00:00">18 Mar 2020</time>
                                        </span>
                                    </div> */}
                                {/* </div> */}
                                {/* featured-thumbnail end */}
                                {/* <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={  '/blog_details'}>Are meetings falling flat? Try these 10 tips</a></h3>
                                    </div>
                                    <div className="post-meta">
                                        <span className="ttm-meta-line byline">Admin</span>
                                        <span className="ttm-meta-line category-link">business</span>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Whatever you do in planning, facilitating. Goal should revolve support.</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" 
                                    href={  '/blog_details'}>read more!</a>
                                </div> */}
                            {/* </div> */}
                            {/* featured-imagebox-post end */}
                        {/* </div>
                        <div className="col-md-12"> */}
                            {/* featured-imagebox-post */}
                            {/* <div className="featured-imagebox featured-imagebox-post style2"> */}
                                {/* featured-thumbnail */}
                                {/* <div className="featured-thumbnail"> */}
                                    {/* <img className="img-fluid" src="https://via.placeholder.com/400x480?text=400x480+blog-02-400x480.jpg" alt="blog-image" />
                                    <div className="ttm-box-post-date">
                                        <span className="ttm-entry-date">
                                            <time className="entry-date" dateTime="2021-04-18T04:16:25+00:00">18 Apr 2020</time>
                                        </span>
                                    </div>
                                </div> */}
                                {/* featured-thumbnail end */}
                                {/* <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={  '/blog_details'}>Are You Moving Businesses To Another State?</a></h3>
                                    </div>
                                    <div className="post-meta">
                                        <span className="ttm-meta-line byline">Admin</span>
                                        <span className="ttm-meta-line category-link">business</span>
                                    </div>
                                    <div className="featured-desc">
                                        <p>A business leader must consider issues beyond choosing a moving!</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" 
                                    href={  '/blog_details'}>read more!</a>
                                </div> */}
                            {/* </div> */}
                            {/* featured-imagebox-post end */}
                        {/* </div> */}
                        {/* <div className="col-md-12"> */}
                            {/* featured-imagebox-post */}
                            {/* <div className="featured-imagebox featured-imagebox-post style2"> */}
                                {/* featured-thumbnail */}
                                {/* <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/400x480?text=400x480+blog-03-400x480.jpg" alt="blog-image" />
                                    <div className="ttm-box-post-date">
                                        <span className="ttm-entry-date">
                                            <time className="entry-date" dateTime="2021-04-18T04:16:25+00:00">18 Apr 2020</time>
                                        </span>
                                    </div> */}
                                {/* </div> */}
                                {/* featured-thumbnail end */}
                                {/* <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={  '/blog_details'}>Shame: Does It Fit In The Workplace?</a></h3>
                                    </div>
                                    <div className="post-meta">
                                        <span className="ttm-meta-line byline">Admin</span>
                                        <span className="ttm-meta-line category-link">business</span>
                                    </div>
                                    <div className="featured-desc">
                                        <p>This can be innate or external, and the results can be surprising...</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" 
                                    href={  '/blog_details'}>read more!</a>
                                </div>
                            </div> */}
                            {/* featured-imagebox-post end */}
                        {/* </div>
                        <div className="col-md-12"> */}
                            {/* featured-imagebox-post */}
                            {/* <div className="featured-imagebox featured-imagebox-post style2"> */}
                                {/* featured-thumbnail */}
                                {/* <div className="featured-thumbnail"> */}
                                    {/* <img className="img-fluid" src="https://via.placeholder.com/400x480?text=400x480+blog-04-400x480.jpg" alt="blog-image" />
                                    <div className="ttm-box-post-date">
                                        <span className="ttm-entry-date">
                                            <time className="entry-date" dateTime="2021-04-18T04:16:25+00:00">18 Apr 2020</time>
                                        </span>
                                    </div>
                                </div> */}
                                {/* featured-thumbnail end */}
                                {/* <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={  '/blog_details'}>How to Handle Negativity in Former People?</a></h3>
                                    </div>
                                    <div className="post-meta">
                                        <span className="ttm-meta-line byline">Admin</span>
                                        <span className="ttm-meta-line category-link">business</span>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Whatever you do in planning, facilitating. Goal should revolve support.</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" 
                                    href={  '/blog_details'}>read more!</a>
                                </div>
                            </div> */}
                            {/* featured-imagebox-post end */}
                        {/* </div> */}
                    {/* </Slider> */}
                    {/* Slider end */}
                {/* </div>
            </section> */}
            {/* blog-section end */}


            <Footer/>
                        
          </div>
        )
    }
}


export default Home2;