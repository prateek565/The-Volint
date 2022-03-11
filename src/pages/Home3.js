import React, { Component, useEffect, useState } from 'react';
import Slider from 'react-slick';
import ProgressBar from 'react-animated-progress-bar';
import Header from '../components/layout/Header3';
import { Banner } from '../components/banner/Home3_banner';
import { Footer } from '../components/layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CountUp from 'react-countup';
import { allInterns, getInternByCategory } from '../services/api';
import Industry from './Common/Home/industry';
import { Link } from 'react-router-dom';


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
    const [allIntern, setallIntern] = useState()
    useEffect(() => {
        Promise.resolve(allInterns()).then((res) => {
            setallIntern(res.data)
            console.log(res.data);
        }).catch((e) => {
            console.log({ e });
        })
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
                                    <Link to={'/job_list'}>
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
                                    </Link>
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
                                <Industry industry={el} />
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
                    <div className="row row-equal-height mb_10" style={{ display: 'flex', justifyContent: 'space-evenly', }}>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-top-content style1" style={{ backgroundColor: 'rgb(116, 250, 75)' }}>
                                <div className="ttm-box-view-overlay">
                                    {/* finance-hover */}
                                    <div className="ttm-col-bgimage-yes ttm-bg h-100">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" style={{ backgroundImage: 'url(https://via.placeholder.com/600x600?text=600x600+finance-hover.png)' }}></div>
                                        <div className="layer-content"></div>
                                    </div>{/* finance-hover end */}
                                </div>
                                <div className="featured-icon" >
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg" style={{ backgroundColor: 'rgb(223, 158, 247)' }}>
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
                            <div className="featured-icon-box icon-align-top-content style1" style={{ backgroundColor: 'rgb(116, 250, 75)' }}>
                                <div className="ttm-box-view-overlay">
                                    {/* insurance-hover */}
                                    <div className="ttm-col-bgimage-yes ttm-bg h-100">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" style={{ backgroundImage: 'url(https://via.placeholder.com/600x600?text=600x600+insurance-hover.png)' }}></div>
                                        <div className="layer-content"></div>
                                    </div>{/* insurance-hover end */}
                                </div>
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg" style={{ backgroundColor: 'rgb(223, 158, 247)' }}>
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
                        {allIntern?.map((intern) => (
                            <div className="col-lg-6 col-md-12">
                                <div className="featured-imagebox featured-imagebox-job">
                                    <div className="featured-thumbnail">
                                        <img src="https://via.placeholder.com/210x204?text=210x204+job-05.png" />
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3><a href={process.env.PUBLIC_URL + '/Job_details'}><a href={process.env.PUBLIC_URL + '/Job_details'}>{intern.title}</a></a></h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>Published 2Days Ago.</p>
                                        </div>
                                        <div className="featured-bottom">
                                            <div className="job-meta">
                                                <span><i className="fa fa-map-marker-alt"></i>{intern.location}</span>
                                                <span><i className="fa fa-filter"></i>{intern.company}</span>
                                            </div>
                                            <div className="job-time">
                                                <span className="danger-color">{intern.type}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>{/* row end */}
                </div>
            </section>
            <br />
            <br />
            <br />

            <Footer />

        </div>
    )
}

export default Home3;