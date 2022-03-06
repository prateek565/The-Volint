import React, { Component } from 'react';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';

export class Carrer_01 extends Component {
    render() {
        
        return (
            <div className="site-main">
                <Header />

                {/* PageHeader */} 
                <PageHeader           
                    title="Carrer" 
                    breadcrumb="Carrer" 
                />
                {/* PageHeader end */}


                {/* features-section */}
                <section className="ttm-row features-section clearfix">
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-12">
                                {/* section title */}
                                <div className="section-title style2">
                                    <div className="title-header">
                                        <h3>popular <span className="text-theme-SkinColor">jobs</span></h3>
                                        <h2 className="title">Search Job By Industry</h2>
                                    </div>
                                    <div className="title-desc">
                                        <p>A process that involves everything from <span className="text-theme-SkinColor">identifying,</span> attracting, shortlisting, interviewing, selecting, hiring, screening & onboarding employees.</p>
                                    </div>
                                </div>{/* section title end */}
                            </div>
                        </div>{/* row end */}
                        {/* row */}
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
                                        href={process.env.PUBLIC_URL + '/job_list'}>Apply Jobs!</a>
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
                                        href={process.env.PUBLIC_URL + '/job_list'}>Apply Jobs!</a>
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
                                        href={process.env.PUBLIC_URL + '/job_list'}>Apply Jobs!</a>
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
                                        href={process.env.PUBLIC_URL + '/job_list'}>Apply Jobs!</a>
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
                                        href={process.env.PUBLIC_URL + '/job_list'}>Apply Jobs!</a>
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
                                        <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" 
                                        href={process.env.PUBLIC_URL + '/job_list'}>Apply Jobs!</a>
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
                                        href={process.env.PUBLIC_URL + '/job_list'}>Apply Jobs!</a>
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
                                        href={process.env.PUBLIC_URL + '/job_list'}>Apply Jobs!</a>
                                    </div>
                                </div>{/* featured-icon-box end */}
                            </div>
                        </div>{/* row end */}
                    </div>
                </section>
                {/* features-section end */}


                {/* process-section */}
                <section className="ttm-row process-section bg-theme-GreyColor clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title title-style-center_text">
                                    <div className="title-header">
                                        <h3>How <span className="text-theme-SkinColor">we do!</span></h3>
                                        <h2 className="title">The Hiring Process</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="featuredbox-number bg-theme-WhiteColor box-shadow p-30 mt-15">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            {/* featured-icon-box */}
                                            <div className="featured-icon-box icon-align-top-content style6">
                                                <div className="featured-icon">
                                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-size-lg ttm-icon_element-color-grey ttm-icon_element-style-round">
                                                        <i className="flaticon-headhunting"></i>
                                                        <span className="fea_num">
                                                            <i className="ttm-num ti-info"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <h3>Identify Need</h3>
                                                    </div>
                                                    <div className="featured-desc">
                                                        <p>This need could vary from filling a vacated position, better managing a team workload, or expanding.</p>
                                                    </div>
                                                </div>
                                            </div>{/* featured-icon-box end */}
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            {/* featured-icon-box */}
                                            <div className="featured-icon-box icon-align-top-content style6">
                                                <div className="featured-icon">
                                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-size-lg ttm-icon_element-color-grey ttm-icon_element-style-round">
                                                        <i className="flaticon flaticon-human-resources"></i>
                                                        <span className="fea_num">
                                                            <i className="ttm-num ti-info"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <h3>Review Process</h3>
                                                    </div>
                                                    <div className="featured-desc">
                                                        <p>HR department who review the applications and eliminate any candidate who does not meet the minimum requirements</p>
                                                    </div>
                                                </div>
                                            </div>{/* featured-icon-box end */}
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            {/* featured-icon-box */}
                                            <div className="featured-icon-box icon-align-top-content style6">
                                                <div className="featured-icon">
                                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-size-lg ttm-icon_element-color-grey ttm-icon_element-style-round">
                                                        <i className="flaticon flaticon-interview"></i>
                                                        <span className="fea_num">
                                                            <i className="ttm-num ti-info"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <h3>Interviews</h3>
                                                    </div>
                                                    <div className="featured-desc">
                                                        <p>The organization and hiring committee, one or several interviews are scheduled for those remaining candidates</p>
                                                    </div>
                                                </div>
                                            </div>{/* featured-icon-box end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row end */}
                    </div>
                </section>
                {/* process-section end */}
                
              
                {/* portfolio-section */}
                <section className="ttm-row portfolio-section clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title title-style-center_text">
                                    <div className="title-header">
                                        <h3>Find us <span className="text-theme-SkinColor">here!</span></h3>
                                        <h2 className="title">Our Head Quarters</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                {/* featured-imagebox-portfolio */}
                                <div className="featured-imagebox featured-imagebox-portfolio style1">
                                    {/* ttm-box-view-overlay */}
                                    <div className="ttm-box-view-overlay ttm-portfolio-box-view-overlay">
                                        {/* featured-thumbnail */}
                                        <div className="featured-thumbnail"> 
                                            <img className="img-fluid" src="https://via.placeholder.com/680x440?text=680x440+portfolio-01.jpg" alt="image" /> 
                                        </div>
                                        {/* featured-thumbnail end */}
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3><a href={process.env.PUBLIC_URL + '/'}>Gujarat</a></h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>10 Open Positions</p>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox-portfolio end */}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                {/* featured-imagebox-portfolio */}
                                <div className="featured-imagebox featured-imagebox-portfolio style1">
                                    {/* ttm-box-view-overlay */}
                                    <div className="ttm-box-view-overlay ttm-portfolio-box-view-overlay">
                                        {/* featured-thumbnail */}
                                        <div className="featured-thumbnail"> 
                                            <img className="img-fluid" src="https://via.placeholder.com/680x440?text=680x440+portfolio-02.jpg" alt="image" /> 
                                        </div>
                                        {/* featured-thumbnail end */}
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3><a href={process.env.PUBLIC_URL + '/'}>Delhi</a></h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>10 Open Positions</p>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox-portfolio end */}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                {/* featured-imagebox-portfolio */}
                                <div className="featured-imagebox featured-imagebox-portfolio style1">
                                    {/* ttm-box-view-overlay */}
                                    <div className="ttm-box-view-overlay ttm-portfolio-box-view-overlay">
                                        {/* featured-thumbnail */}
                                        <div className="featured-thumbnail"> 
                                            <img className="img-fluid" src="https://via.placeholder.com/680x440?text=680x440+portfolio-03.jpg" alt="image" /> 
                                        </div>
                                        {/* featured-thumbnail end */}
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3><a href={process.env.PUBLIC_URL + '/'}>Maharshtra</a></h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>10 Open Positions</p>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox-portfolio end */}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                {/* featured-imagebox-portfolio */}
                                <div className="featured-imagebox featured-imagebox-portfolio style1">
                                    {/* ttm-box-view-overlay */}
                                    <div className="ttm-box-view-overlay ttm-portfolio-box-view-overlay">
                                        {/* featured-thumbnail */}
                                        <div className="featured-thumbnail"> 
                                            <img className="img-fluid" src="https://via.placeholder.com/680x440?text=680x440+portfolio-04.jpg" alt="image" /> 
                                        </div>
                                        {/* featured-thumbnail end */}
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3><a href={process.env.PUBLIC_URL + '/'}>Rajasthan</a></h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>10 Open Positions</p>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox-portfolio end */}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                {/* featured-imagebox-portfolio */}
                                <div className="featured-imagebox featured-imagebox-portfolio style1">
                                    {/* ttm-box-view-overlay */}
                                    <div className="ttm-box-view-overlay ttm-portfolio-box-view-overlay">
                                        {/* featured-thumbnail */}
                                        <div className="featured-thumbnail"> 
                                            <img className="img-fluid" src="https://via.placeholder.com/680x440?text=680x440+portfolio-05.jpg" alt="image" /> 
                                        </div>
                                        {/* featured-thumbnail end */}
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3><a href={process.env.PUBLIC_URL + '/'}>Karnataka</a></h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>10 Open Positions</p>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox-portfolio end */}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                {/* featured-imagebox-portfolio */}
                                <div className="featured-imagebox featured-imagebox-portfolio style1">
                                    {/* ttm-box-view-overlay */}
                                    <div className="ttm-box-view-overlay ttm-portfolio-box-view-overlay">
                                        {/* featured-thumbnail */}
                                        <div className="featured-thumbnail"> 
                                            <img className="img-fluid" src="https://via.placeholder.com/680x440?text=680x440+portfolio-06.jpg" alt="image" /> 
                                        </div>
                                        {/* featured-thumbnail end */}
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3><a href={process.env.PUBLIC_URL + '/'}>Jammu Kashmir</a></h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>10 Open Positions</p>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox-portfolio end */}
                            </div>
                            <div className="col-lg-12">
                                <div className="pt-30 m-auto text-center">
                                    <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" 
                                    href={process.env.PUBLIC_URL + '/job_list'}>More Jobs By Region</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* portfolio-section end */}


                {/* job_pos-section */}
                <section className="ttm-row job_pos-section bg-theme-GreyColor clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title title-style-center_text">
                                    <div className="title-header">
                                        <h3>find the <span className="text-theme-SkinColor">best one!</span></h3>
                                        <h2 className="title">Available positions</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form id="search_Form" className="search_Form style2 wrap-form mt-15">
                                    <div className="row row-equal-height ttm-boxes-spacing-30px">
                                        <div className="col-lg-3">
                                            <label>
                                                <select>
                                                    <option value="" disabled="" selected="">All</option>
                                                    <option value="post1">post1</option>
                                                    <option value="post2">post2</option>
                                                    <option value="post3">post3</option>
                                                    <option value="post4">post4</option>
                                                </select>
                                            </label>
                                        </div>
                                        <div className="col-lg-6">
                                            <label>
                                                <input type="text" placeholder="Job Title"/>
                                            </label>
                                        </div>
                                        <div className="col-lg-3">
                                            <label>
                                                <button className="w-100 submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor ttm-icon-btn-right" type="submit">Search<i className="fa fa-search"></i></button>
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* row */}
                        <div className="row mb_10">
                            <div className="col-lg-12">
                                {/* featured-imagebox */}
                                <div className="featured-imagebox featured-imagebox-job style2">
                                    <div className="featured-thumbnail">
                                        <img src="https://via.placeholder.com/210x204?text=210x204+job-01.png" />
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3><a href={process.env.PUBLIC_URL + '/Job_details'}>Vacancy For the Charted Account</a></h3>
                                        </div>
                                        <div className="featured-bottom">
                                            <div className="job-meta">
                                                <span>Astrology & Space Sciences</span>
                                                <span><i className="fa fa-map-marker-alt"></i>California</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="apply-block">
                                        <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-dark"
                                        href={process.env.PUBLIC_URL + '/login'}>Appply Now</a>
                                    </div>
                                </div>{/* featured-imagebox end */}
                            </div>
                            <div className="col-lg-12">
                                {/* featured-imagebox */}
                                <div className="featured-imagebox featured-imagebox-job style2">
                                    <div className="featured-thumbnail">
                                        <img src="https://via.placeholder.com/210x204?text=210x204+job-02.png" />
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3><a href={process.env.PUBLIC_URL + '/Job_details'}>Vacancy For the Business Analyst</a></h3>
                                        </div>
                                        <div className="featured-bottom">
                                            <div className="job-meta">
                                                <span>Astrology & Space Sciences</span>
                                                <span><i className="fa fa-map-marker-alt"></i>California</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="apply-block">
                                        <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-dark"
                                        href={process.env.PUBLIC_URL + '/login'}>Appply Now</a>
                                    </div>
                                </div>{/* featured-imagebox end */}
                            </div>
                            <div className="col-lg-12">
                                {/* featured-imagebox */}
                                <div className="featured-imagebox featured-imagebox-job style2">
                                    <div className="featured-thumbnail">
                                        <img src="https://via.placeholder.com/210x204?text=210x204+job-03.png" />
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3><a href={process.env.PUBLIC_URL + '/Job_details'}><a href={process.env.PUBLIC_URL + '/Job_details'}>Opening For Social Media Manager</a></a></h3>
                                        </div>
                                        <div className="featured-bottom">
                                            <div className="job-meta">
                                                <span>Astrology & Space Sciences</span>
                                                <span><i className="fa fa-map-marker-alt"></i>California</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="apply-block">
                                        <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-dark"
                                        href={process.env.PUBLIC_URL + '/login'}>Appply Now</a>
                                    </div>
                                </div>{/* featured-imagebox end */}
                            </div>                        
                            <div className="col-lg-12">
                                {/* featured-imagebox */}
                                <div className="featured-imagebox featured-imagebox-job style2">
                                    <div className="featured-thumbnail">
                                        <img src="https://via.placeholder.com/210x204?text=210x204+job-04.png" />
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3><a href={process.env.PUBLIC_URL + '/Job_details'}><a href={process.env.PUBLIC_URL + '/Job_details'}>Opening For The Content Creator</a></a></h3>
                                        </div>
                                        <div className="featured-bottom">
                                            <div className="job-meta">
                                                <span>Astrology & Space Sciences</span>
                                                <span><i className="fa fa-map-marker-alt"></i>California</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="apply-block">
                                        <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-dark"
                                        href={process.env.PUBLIC_URL + '/login'}>Appply Now</a>
                                    </div>
                                </div>{/* featured-imagebox end */}
                            </div>
                            <div className="col-lg-12">
                                {/* featured-imagebox */}
                                <div className="featured-imagebox featured-imagebox-job style2">
                                    <div className="featured-thumbnail">
                                        <img src="https://via.placeholder.com/210x204?text=210x204+job-05.png" />
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3><a href={process.env.PUBLIC_URL + '/Job_details'}>Job Vacancy For the Bank Manager</a></h3>
                                        </div>
                                        <div className="featured-bottom">
                                            <div className="job-meta">
                                                <span>Astrology & Space Sciences</span>
                                                <span><i className="fa fa-map-marker-alt"></i>California</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="apply-block">
                                        <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-dark"
                                        href={process.env.PUBLIC_URL + '/login'}>Appply Now</a>
                                    </div>
                                </div>{/* featured-imagebox end */}
                            </div>
                        </div>{/* row end */}
                    </div>
                </section>
                {/* job_pos-section end */} 
            
            
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


export default Carrer_01;