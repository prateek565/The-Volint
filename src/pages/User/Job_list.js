import React, { Component, useEffect, useState } from 'react';
import Header from '../../components/layout/Header';
import PageHeader from "../../components/layout/PageHeader";
import { Footer } from '../../components/layout/Footer';
import { Link } from 'react-router-dom';
import { allInterns } from '../../services/api';
import { CircularProgress } from '@material-ui/core';
import ActionSection from '../../components/layout/ActionSection';


// export class Job_list extends Component {
const Job_list = () => {

    const [AllInterns, setallInterns] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        Promise.resolve(allInterns()).then((res) => {
            setallInterns(res.data)
            setloading(false);
        }).catch((e) => {
            console.log(e);
        })
    }, [])

    return (

        <div className="site-main">
            <Header />

            <div className="site-main">

                {/* PageHeader */}
                <PageHeader
                    title="Opportunities"
                    breadcrumb="Opportunities"
                    className="pb-65 pb-lg-0"
                />
                {/* PageHeader end */}


                {/* form */}
                <div className="form-section clearfix" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bg-theme-GreyColor ttm-col-bgcolor-yes ttm-bg border rounded p-40 p-lg-20 mt_70 mt-lg-50">
                                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                                    <div className="layer-content">
                                        <form id="search_Form" className="search_Form wrap-form" method="post" action="#" data-mailchimp="true">
                                            <label>
                                                <i className="ti ti-search"></i>
                                                <input type="text" id="filter" placeholder="Project Title or Keywords" />
                                            </label>
                                            <label>
                                                <i className="ti ti-location-pin"></i>
                                                <input type="text" name="location" id="filterlocation" placeholder="location" />
                                            </label>
                                            <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor" type="submit">Find Work</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* form end */}


            <div className="ttm-row sidebar job-sidebar clearfix">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-4 widget-area sidebar-left job_list-widget-area">
                            <div className="job_list-widget" style={{ backgroundColor: '#ffc0d0' }}>
                                <aside className="widget job-widget">
                                    <h3 className="widget-title"><i className="flaticon flaticon-calendar-1"></i>Date Posted</h3>
                                    <form id="list1" className="list-filter">
                                        <div>
                                            <label className="radio">
                                                <input type="radio" value="Today" name="post_date" />Today
                                            </label>
                                            <label className="radio">
                                                <input type="radio" value="Last 7 days" defaultChecked name="post_date" />Last 7 days
                                            </label>
                                            <label className="radio">
                                                <input type="radio" value="Last 14 days" name="post_date" />Last 14 days
                                            </label>
                                            <label className="radio">
                                                <input type="radio" value="Last 21 days" name="post_date" />Last 21 days
                                            </label>
                                            <label className="radio">
                                                <input type="radio" value="Last 30 days" name="post_date" />Last 30 days
                                            </label>
                                        </div>
                                    </form>
                                </aside>
                                <aside className="widget job-widget">
                                    <h3 className="widget-title"><i className="flaticon flaticon-subfolder-1"></i>Categories</h3>
                                    <form id="list2" className="list-filter">
                                        <div >
                                            <label className="radio">
                                                <input type="radio" value="Digital Marketing" defaultChecked name="categories" />Digital Marketing
                                            </label>
                                            <label className="radio">
                                                <input type="radio" value="Charity & Voluntary" name="categories" />Charity & Voluntary
                                            </label>
                                            <label className="radio">
                                                <input type="radio" value="IT Contractor" name="categories" />IT Contractor
                                            </label>
                                            <label className="radio">
                                                <input type="radio" value="Estate Agency" name="categories" />Estate Agency
                                            </label>
                                            <label className="radio">
                                                <input type="radio" value="Graduate" name="categories" />Graduate
                                            </label>
                                        </div>
                                    </form>
                                </aside>
                                <aside className="widget job-widget">
                                    <h3 className="widget-title"><i className="flaticon flaticon-expert"></i>Experince</h3>
                                    <form id="list3" className="list-filter">
                                        <div>
                                            <label className="radio">
                                                <input type="radio" value="0Year to 1Year" name="ex_year" />0Year to 1Year
                                            </label>
                                            <label className="radio">
                                                <input type="radio" value="1Year to 2Year" name="ex_year" />1Year to 2Year
                                            </label>
                                            <label className="radio">
                                                <input type="radio" value="2Year to 3Year" name="ex_year" />2Year to 3Year
                                            </label>
                                            <label className="radio">
                                                <input type="radio" value="3Year or more" defaultChecked name="ex_year" />3Year or more
                                            </label>
                                        </div>
                                    </form>
                                </aside>
                                <aside className="widget job-widget">
                                    <h3 className="widget-title"><i className="flaticon flaticon-expert"></i>Work Type</h3>
                                    <form id="list3" className="list-filter">
                                        <div >
                                            <label className="radio">
                                                <input type="radio" value="0Year to 1Year" name="ex_year" />Full Time
                                            </label>
                                            <label className="radio">
                                                <input type="radio" value="1Year to 2Year" name="ex_year" />Internship
                                            </label>
                                            <label className="radio">
                                                <input type="radio" value="2Year to 3Year" name="ex_year" />Voluntary
                                            </label>
                                        </div>
                                    </form>
                                </aside>
                                {/* <aside className="widget job-widget">
                                        <h3 className="widget-title"><i className="flaticon flaticon-gender"></i>Gender</h3>
                                        <form id="list4" onSubmit={this.formSubmit} className="list-filter">
                                            <div onChange={this.onChangeValue} >
                                                <label className="radio">
                                                    <input type="radio" value="male" defaultChecked name="gender" />male
                                                </label>
                                                <label className="radio">
                                                    <input type="radio" value="female" name="gender" />female 
                                                </label>
                                            </div>
                                        </form>
                                    </aside> */}

                            </div>
                            <aside className="widget widget-banner">
                                <div className="ttm-col-bgcolor-yes bg-theme-DarkColor text-theme-WhitColor col-bg-img-seven ttm-col-bgimage-yes ttm-bg p-40">
                                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer bg-theme-DarkColor" style={{ backgroundImage: '' }}>
                                        <div className="ttm-col-wrapper-bg-layer-inner bg-theme-DarkColor"></div>
                                    </div>
                                    <div className="layer-content text-center">
                                        <div className="widget-banner-inner">
                                            <h3 className="mb-15">Make a Difference with Online Resume!</h3>
                                            <p className="mb-30">Your Resume in Minutes with Jobs Resume Assistant is Ready!</p>
                                            <Link className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                                                exact to={'/resume'}>Build Resume</Link>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                            {/* <aside className="widget widget-download">
                                    <ul className="download">
                                        <li><a href="#">Download.pdf</a><i className="ti ti-files"></i></li>
                                        <li><a href="#">Download.txt</a><i className="ti ti-files"></i></li>
                                    </ul>
                                </aside> */}
                            {/* <aside className="widget widget-banner text-theme-WhiteColor">
                                    <div className="ttm-col-bgcolor-yes bg-theme-DarkColor text-theme-WhitColor col-bg-img-seven ttm-col-bgimage-yes ttm-bg p-40">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer bg-theme-DarkColor" style={{ backgroundImage: 'url(https://via.placeholder.com/875x583?text=875x583+col-bgimage-7.jpg)' }}>
                                            <div className="ttm-col-wrapper-bg-layer-inner bg-theme-DarkColor"></div>
                                        </div>
                                        <div className="layer-content text-center">
                                            <div className="widget-banner-inner">
                                                <h3 className="mb-15">Make a Difference with Online Resume!</h3>
                                                <p className="mb-30">Your Resume in Minutes with Jobs Resume Assistant is Ready!</p>
                                                <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" 
                                                href={process.env.PUBLIC_URL + '/'}>appoinments!</a>
                                            </div>
                                        </div>
                                    </div>
                                </aside> */}
                            </div>
                        <div className="col-lg-8 content-area">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="showing-result-block d-sm-flex align-items-center justify-content-between" style={{ backgroundColor: '#ffc0d0' }}>
                                        <span className="showing-result">Showing 1–10 of 50 Project Results :</span>
                                        <form>
                                            <div className="sort-by">Sort By:
                                                <select defaultValue="">
                                                    <option value="" disabled>A to Z</option>
                                                    <option value="popularity">a</option>
                                                    <option value="rating">b</option>
                                                    <option value="date">c</option>
                                                    <option value="price">d</option>
                                                    <option value="price-desc">e</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    (loading) && <CircularProgress />
                                }
                                {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
                                {
                                    AllInterns.map((intern) => (
                                        <div className="col-lg-12 col-md-12">
                                            <div className="flex featured-imagebox featured-imagebox-job" style={{ backgroundColor: '#ffc0d0' }}>
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <h3><Link to={`/job_details/${intern._id}`}>{intern.title ? intern.title : "_"}</Link></h3>
                                                    </div>
                                                    <div className="featured-desc">
                                                        <p>{intern.duration}</p>
                                                        <p>{intern.description ? intern.description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} </p>
                                                    </div>
                                                    <div className="featured-bottom">
                                                        <div className="job-meta">
                                                            <span><i className="fa fa-map-marker-alt"></i>{intern.location}</span>
                                                        </div>
                                                        {intern?.type && <div className="job-time">
                                                            <span className="green">{intern.type}</span>
                                                        </div>}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    ))
                                }

                                {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
                                {/* <div className="col-lg-12 col-md-12">
                                   
                                    <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                        <div className="featured-thumbnail">
                                            <img src="https://via.placeholder.com/210x204?text=210x204+job-01.png" />
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3><Link to='/job_details'>Vacancy For the Charted Account</Link></h3>
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
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    
                                    <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                        <div className="featured-thumbnail">
                                            <img src="https://via.placeholder.com/210x204?text=210x204+job-02.png" />
                                            <div className="required-tag">Urgent</div>
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3><Link to='/job_details'>Vacancy For the Business Analyst</Link></h3>
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
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                   
                                    <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                        <div className="featured-thumbnail">
                                            <img src="https://via.placeholder.com/210x204?text=210x204+job-03.png" />
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3><a href={'/job_details'}><a href={'/job_details'}>Opening For Social Media Manager</a></a></h3>
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
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                   
                                    <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                        <div className="featured-thumbnail">
                                            <img src="https://via.placeholder.com/210x204?text=210x204+job-04.png" />
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3><a href={'/job_details'}><a href={'/job_details'}>Opening For The Content Creator</a></a></h3>
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
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                              
                                    <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                        <div className="featured-thumbnail">
                                            <img src="https://via.placeholder.com/210x204?text=210x204+job-05.png" />
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3><a href={'/job_details'}>Job Vacancy For the Bank Manager</a></h3>
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
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                        
                                    <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                        <div className="featured-thumbnail">
                                            <img src="https://via.placeholder.com/210x204?text=210x204+job-06.png" />
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3><a href={'/job_details'}>Vacancy For the Human Resource</a> </h3>
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
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                        <div className="featured-thumbnail">
                                            <img src="https://via.placeholder.com/210x204?text=210x204+job-02.png" />
                                            <div className="required-tag">Urgent</div>
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3><a href={'/job_details'}>Vacancy For the Business Analyst</a></h3>
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
                                    </div>featured-imagebox end
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                        <div className="featured-thumbnail">
                                            <img src="https://via.placeholder.com/210x204?text=210x204+job-03.png" />
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3><a href={'/job_details'}><a href={'/job_details'}>Opening For Social Media Manager</a></a></h3>
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
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                        <div className="featured-thumbnail">
                                            <img src="https://via.placeholder.com/210x204?text=210x204+job-04.png" />
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3><a href={'/job_details'}><a href={'/job_details'}>Opening For The Content Creator</a></a></h3>
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
                                    </div>
                                </div> */}
                                <div className="col-lg-12">
                                    <div className="job-pagination-block">
                                        <a className="page-nav-link">prev</a>
                                        <a className="page-nav-link current">1</a>
                                        <a className="page-nav-link" href="#">2</a>
                                        <a className="page-nav-link" href="#">3</a>
                                        <a className="page-nav-link" href="#">....</a>
                                        <a className="page-nav-link">next</a>
                                    </div>
                                </div>
                            </div>{/* row end */}
                        </div>
                </div>{/* row end */}
            </div>
        </div>

            {/* action-section */}
            <ActionSection />
            {/* action-section end */}


        <Footer />

    </div>
    )
}

export default Job_list;