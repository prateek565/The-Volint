import React, { Component, useEffect, useState } from 'react';
import Slider from 'react-slick';
import ProgressBar from 'react-animated-progress-bar';
import Header from '../components/layout/Header3';
import { Banner } from '../components/banner/Home3_banner';
import { Footer } from '../components/layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CountUp from 'react-countup';
import { getInternByCategory } from '../services/api';
import Industry from './Common/Home/industry';


const Home3 = () => {

    //     this.state = {
    //       photoIndex: 0,
    //       isOpen: false,
    //     };
    //   }
    const industry = [
        'Advocacy and Human Rights',
        'Children and Youth',
        'Agriculture',
        'Environment',
        'Animals',
        'Community',
        'Computers and Technology',
        'Education and Literacy',
        'Others'
    ]
    const [volunteerWork, setvolunteerWork] = useState()
    const [internshipWork, setinternshipWork] = useState()
    useEffect(() => {
        Promise.resolve(getInternByCategory('Volunteer Work')).then((res) => {
            setvolunteerWork(res.data)
        }).catch((e) => {
            console.log({ e });
        })
        Promise.resolve(getInternByCategory('Internship')).then((res) => {
            setinternshipWork(res.data)
        }).catch((e) => {
            console.log({ e });
        })

    }, [])

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

            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {

            breakpoint: 991,
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

            <Header />

            {/* Banner */}
            <Banner />
            {/* Banner end */}


            {/* form */}
            <div className="form-section clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bg-theme-GreyColor ttm-col-bgcolor-yes ttm-bg rounded p-30 p-lg-20 mt_60 mt-xl-50">
                                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                                <div className="layer-content">
                                    <form id="search_Form" className="search_Form wrap-form m-1 border rounded rounded-3 overflow-hidden" method="post" action="#" data-mailchimp="true">
                                        <label>
                                            <i className="ti ti-search"></i>
                                            <input type="text" id="filter" placeholder="Job Title or Keywords" />
                                        </label>
                                        <label>
                                            <i className="ti ti-location-pin"></i>
                                            <input type="email" name="EMAIL" id="txtemail" placeholder="location" />
                                        </label>
                                        <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor h-auto" type="submit">Find Jobs</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* form end */}
            {/* features-section */}

            <div className='site-main'>
                <section className="ttm-row features-section clearfix">
                    <div className="container">
                        <div className="row row-equal-height mb_10">
                            {/* featured-icon-box */}
                            {industry?.map((el) => (
                                <Industry industry={el}/>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            {/* features-section end */}


            {/* services-section */}
            <section className="ttm-row services-section bg-img1 bg-theme-GreyColor ttm-bg ttm-bgimage-yes clearfix" style={{ backgroundImage: 'url(images/bg-image/row-bgimage-1.png)', backgroundColor: 'orange' }}>
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-11">
                            {/* section title */}
                            <div className="section-title style2 mb-0">
                                <div className="title-header">
                                    <h3>We Serve <span className="text-theme-SkinColor">Overseas</span></h3>
                                    <h2 className="title">We Are Worldwide</h2>
                                </div>
                                <div className="title-desc">
                                    <p>A staffing agency recruits <span className="text-theme-SkinColor">new employees </span>
                                        for the client employers to fulfill their companies' needs. We've head quarters worldwide</p>
                                </div>
                            </div>{/* section title end */}
                        </div>
                    </div>{/* row end */}
                    {/* Slider */}
                    <Slider className="row slick_slider slick-arrows-style1" {...slick_slider} slidesToShow={3} arrows={true}
                        responsive={[{ breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                        { breakpoint: 650, settings: { slidesToShow: 1, slidesToScroll: 1 } }]}>
                        <div className="col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-country">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img src={"https://via.placeholder.com/720x600?text=720x600+country-01.jpg"} />
                                </div>{/* featured-thumbnail end */}
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/'}>United States</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>A millions of decision about who has a right to settle</p>
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
                                        <h3><a href={process.env.PUBLIC_URL + '/'}>Australia</a></h3>
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
                                        <h3><a href={process.env.PUBLIC_URL + '/'}>Canada</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>We will help in every step of the application process</p>
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
                                        <h3><a href={process.env.PUBLIC_URL + '/'}>United Kingdom</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>We will help you with every step process of recruitment </p>
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
                                        <h3><a href={process.env.PUBLIC_URL + '/'}>United States</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>A millions of decision about who has a right to settle</p>
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
                                        <h3><a href={process.env.PUBLIC_URL + '/'}>Canada</a></h3>
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
                                    <h2 className="title">Job By Category</h2>
                                </div>
                            </div>{/* section title end */}
                        </div>
                    </div>{/* row end */}
                    {/* row */}
                    <div className="row row-equal-height mb_10" style={{ display: 'flex', justifyContent: 'space-evenly',  }}>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-top-content style1">
                                <div className="ttm-box-view-overlay">
                                    {/* finance-hover */}
                                    <div className="ttm-col-bgimage-yes ttm-bg h-100">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" style={{ backgroundImage: 'url(https://via.placeholder.com/600x600?text=600x600+finance-hover.png)' }}></div>
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
                                        <h3>Volunteer Work</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>{volunteerWork?.length} Jobs</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark"
                                        href={'jobs_by_filter/cat=Volunteer Work'}>Apply Jobs!</a>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-top-content style1">
                                <div className="ttm-box-view-overlay">
                                    {/* insurance-hover */}
                                    <div className="ttm-col-bgimage-yes ttm-bg h-100">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" style={{ backgroundImage: 'url(https://via.placeholder.com/600x600?text=600x600+insurance-hover.png)' }}></div>
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
                                        <h3>Internship Work</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>{internshipWork?.length} Jobs</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark"
                                        href={`/jobs_by_filter/cat=Internship`}>Apply Jobs!</a>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                    </div>{/* row end */}
                </div>
            </section>
            {/* features-section end */}


            {/* job-list-section */}
            <section className="ttm-row job-list-section bg-theme-GreyColor ttm-bg ttm-bgimage-yes clearfix">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-11">
                            {/* section title */}
                            <div className="section-title style2">
                                <div className="title-header">
                                    <h3>Find The <span className="text-theme-SkinColor">Best One!</span></h3>
                                    <h2 className="title">Recent Job Listing</h2>
                                </div>
                                <div className="title-desc">
                                    <p>We have several jobs in active right now. Check out <span className="text-theme-SkinColor">recent jobs </span>
                                        according to your excelllence. Our experts will guide you accordingly. </p>
                                </div>
                            </div>{/* section title end */}
                        </div>
                    </div>{/* row end */}
                    {/* Slider */}
                    <Slider className="row slick_slider mb_10 pt-20 slick-arrows-style2" {...slick_slider} slidesToShow={2}
                        rows={3} arrows={true} responsive={[{ breakpoint: 992, settings: { slidesToShow: 1, slidesToScroll: 1 } }]}>
                        <div className="col-lg-6 col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-job">
                                <div className="featured-thumbnail">
                                    <img src="https://via.placeholder.com/210x204?text=210x204+job-05.png" />
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/Job_details'}><a href={process.env.PUBLIC_URL + '/Job_details'}>Opening For The Content Creator</a></a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Published 2Days Ago.</p>
                                    </div>
                                    <div className="featured-bottom">
                                        <div className="job-meta">
                                            <span><i className="fa fa-map-marker-alt"></i>California</span>
                                            <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                        </div>
                                        <div className="job-time">
                                            <span className="danger-color">part time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                <div className="featured-thumbnail">
                                    <img src="https://via.placeholder.com/210x204?text=210x204+job-06.png" />
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/Job_details'}>Vacancy For the Human Resource</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Published 2Days Ago.</p>
                                    </div>
                                    <div className="featured-bottom">
                                        <div className="job-meta">
                                            <span><i className="fa fa-map-marker-alt"></i>California</span>
                                            <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                        </div>
                                        <div className="job-time">
                                            <span className="blue">part time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                <div className="featured-thumbnail">
                                    <img src="https://via.placeholder.com/210x204?text=210x204+job-02.png" />
                                    <div className="required-tag">Urgent</div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/Job_details'}>Vacancy For the Business Analyst</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Published 2Days Ago.</p>
                                    </div>
                                    <div className="featured-bottom">
                                        <div className="job-meta">
                                            <span><i className="fa fa-map-marker-alt"></i>California</span>
                                            <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                        </div>
                                        <div className="job-time">
                                            <span className="danger-color">part time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-job">
                                <div className="featured-thumbnail">
                                    <img src="https://via.placeholder.com/210x204?text=210x204+job-01.png" />
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/Job_details'}>Vacancy For the Charted Account</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Published 2Days Ago.</p>
                                    </div>
                                    <div className="featured-bottom">
                                        <div className="job-meta">
                                            <span><i className="fa fa-map-marker-alt"></i>California</span>
                                            <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                        </div>
                                        <div className="job-time">
                                            <span className="green">full time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-job">
                                <div className="featured-thumbnail">
                                    <img src="https://via.placeholder.com/210x204?text=210x204+job-02.png" />
                                    <div className="required-tag">Urgent</div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/Job_details'}>Vacancy For the Human Resource</a> </h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Published 2Days Ago.</p>
                                    </div>
                                    <div className="featured-bottom">
                                        <div className="job-meta">
                                            <span><i className="fa fa-map-marker-alt"></i>California</span>
                                            <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                        </div>
                                        <div className="job-time">
                                            <span className="danger-color">part time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-job">
                                <div className="featured-thumbnail">
                                    <img src="https://via.placeholder.com/210x204?text=210x204+job-03.png" />
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Marketing Expert For Charity</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Published 2Days Ago.</p>
                                    </div>
                                    <div className="featured-bottom">
                                        <div className="job-meta">
                                            <span><i className="fa fa-map-marker-alt"></i>California</span>
                                            <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                        </div>
                                        <div className="job-time">
                                            <span className="deep-orange">full time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-job">
                                <div className="featured-thumbnail">
                                    <img src="https://via.placeholder.com/210x204?text=210x204+job-04.png" />
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/Job_details'}><a href={process.env.PUBLIC_URL + '/Job_details'}>Opening For Social Media Manager</a></a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Published 2Days Ago.</p>
                                    </div>
                                    <div className="featured-bottom">
                                        <div className="job-meta">
                                            <span><i className="fa fa-map-marker-alt"></i>California</span>
                                            <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                        </div>
                                        <div className="job-time">
                                            <span className="green">full time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-job">
                                <div className="featured-thumbnail">
                                    <img src="https://via.placeholder.com/210x204?text=210x204+job-05.png" />
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/Job_details'}><a href={process.env.PUBLIC_URL + '/Job_details'}>Opening For The Content Creator</a></a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Published 2Days Ago.</p>
                                    </div>
                                    <div className="featured-bottom">
                                        <div className="job-meta">
                                            <span><i className="fa fa-map-marker-alt"></i>California</span>
                                            <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                        </div>
                                        <div className="job-time">
                                            <span className="danger-color">part time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-job">
                                <div className="featured-thumbnail">
                                    <img src="https://via.placeholder.com/210x204?text=210x204+job-06.png" />
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/Job_details'}>Job Vacancy For the Bank Manager</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Published 2Days Ago.</p>
                                    </div>
                                    <div className="featured-bottom">
                                        <div className="job-meta">
                                            <span><i className="fa fa-map-marker-alt"></i>California</span>
                                            <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                        </div>
                                        <div className="job-time">
                                            <span className="blue">part time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                    </Slider>{/* row end */}
                </div>
            </section>
            <br />
            <br />
            <br />
            {/* job-list end */}


            {/* form-section */}
            {/* <section className="ttm-row form-section clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title title-style-center_text">
                                <div className="title-header">
                                    <h3>fill the <span className="text-theme-SkinColor"> details</span></h3>
                                    <h2 className="title">Apply For Your Dream Jobs</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <form className="submit_Form wrap-form row row-equal-height">
                                <div className="col-lg-6">
                                    <div className="basic-details p-30 mt-15 box-shadow">
                                        <div className="mb-20 text-center">
                                            <h4>Personal Details</h4>
                                            <p>Please Fill Out Your Contact Person Details Here.</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <label>
                                                    <input type="text" name="first_name" placeholder="First Name" />
                                                </label>
                                            </div>
                                            <div className="col-lg-6">
                                                <label>
                                                    <input type="text" name="last_name" placeholder="Last Name" />
                                                </label>
                                            </div>
                                            <div className="col-lg-6">
                                                <label>
                                                    <input type="email" name="email_id" placeholder="Email" />
                                                </label>
                                            </div>
                                            <div className="col-lg-6">
                                                <label>
                                                    <input type="tel" name="phone_number" placeholder="Phone" />
                                                </label>
                                            </div>
                                            <div className="col-lg-12">
                                                <label>
                                                    <input type="text" name="address" placeholder="Address" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="additional-details p-30 mt-15 box-shadow">
                                        <div className="mb-20 text-center">
                                            <h4>Qualifications</h4>
                                            <p>Please Fill Out Your Contact Person Details Here.</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <label>
                                                    <select name="education" aria-hidden="true" placeholder="Education">
                                                        <option value="">Education</option>
                                                        <option value="Ed1">Education1</option>
                                                        <option value="Ed2">Education2</option>
                                                        <option value="Ed3">Education3</option>
                                                        <option value="Ed4">Education4</option>
                                                        <option value="Ed5">Education5</option>
                                                        <option value="Ed6">Education6</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <div className="col-lg-6">
                                                <label>
                                                    <select name="locations" aria-hidden="true" placeholder="Locations">
                                                        <option value="">Locations</option>
                                                        <option value="Loc1">Locations1</option>
                                                        <option value="Loc2">Locations2</option>
                                                        <option value="Loc3">Locations3</option>
                                                        <option value="Loc4">Locations4</option>
                                                        <option value="Loc5">Locations5</option>
                                                        <option value="Loc6">Locations6</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <div className="col-lg-6">
                                                <label>
                                                    <select name="experiance" aria-hidden="true" placeholder="Total Experiance">
                                                        <option value="">Total Experiance</option>
                                                        <option value="Ex1">Experiance1</option>
                                                        <option value="Ex2">Experiance2</option>
                                                        <option value="Ex3">Experiance3</option>
                                                        <option value="Ex4">Experiance4</option>
                                                        <option value="Ex5">Experiance5</option>
                                                        <option value="Ex6">Experiance6</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <div className="col-lg-6">
                                                <label>
                                                    <input type="text" name="note" placeholder="Personal Qualities" />
                                                </label>
                                            </div>
                                            <div className="col-lg-12">
                                                <label>
                                                    <input type="file" name="chooseFile" id="chooseFile" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <label>
                                        <textarea name="message" rows="4" placeholder="Additional Informayions..." required="required"></textarea>
                                    </label>
                                </div>
                                <div className="col-lg-12">
                                    <label className="mb-0">
                                        <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill 
                                        ttm-btn-color-skincolor h-auto" type="submit">Apply For This Jobs</button>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* form-section end */}


            <Footer />

        </div>
    )
}

export default Home3;