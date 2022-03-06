import React, { Component } from 'react';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';


export class Employers_list extends Component {

    constructor() {
        super();
        this.state = {
          name: "React"
        };
        this.onChangeValue = this.onChangeValue.bind(this);

    }
    
    onChangeValue(event) {
        console.log(event.target.value);
    }

    render() {
        return (

            <div className="site-main">
                <Header/>
            
                {/* PageHeader */} 
                <PageHeader
                    title="employers list"
                    breadcrumb="employers"
                />
                {/* PageHeader end */}


                <div className="ttm-row sidebar job-sidebar clearfix">
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-4 widget-area sidebar-left job_list-widget-area">
                                <div className="job_list-widget">
                                    <aside className="widget job-widget">
                                        <h3 className="widget-title"><i className="flaticon flaticon-calendar-1"></i>Date Posted</h3>
                                        <form id="list1" className="list-filter">
                                            <div onChange={this.onChangeValue} >
                                                <label className="radio">
                                                    <input type="radio" value="Today" name="post_date" />Today
                                                </label>
                                                <label className="radio">
                                                    <input type="radio" value="Last 7 days" defaultChecked  name="post_date" />Last 7 days 
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
                                        <form id="list2" onSubmit={this.formSubmit} className="list-filter">
                                            <div onChange={this.onChangeValue} >
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
                                                    <input type="radio" value="Graduate"name="categories" />Graduate
                                                </label>
                                            </div>
                                        </form>
                                    </aside>
                                    <aside className="widget job-widget">
                                        <h3 className="widget-title"><i className="flaticon flaticon-expert"></i>Experince</h3>
                                        <form id="list3" onSubmit={this.formSubmit} className="list-filter">
                                            <div onChange={this.onChangeValue} >
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
                                <aside className="widget widget-download">
                                    <ul className="download">
                                        <li><a href="#">Download.pdf</a><i className="ti ti-files"></i></li>
                                        <li><a href="#">Download.txt</a><i className="ti ti-files"></i></li>
                                    </ul>
                                </aside>
                                <aside className="widget widget-banner text-theme-WhiteColor">
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
                                </aside>
                            </div>
                            <div className="col-lg-8 content-area">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="showing-result-block d-sm-flex align-items-center justify-content-between">
                                            <span className="showing-result">Showing 1–10 of 50 Jobs Results :</span>
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
                                    <div className="col-lg-12 col-md-12">
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
                                                    <div className="view-block">
                                                        <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-dark" 
                                                        href={process.env.PUBLIC_URL + '/employers_details'}>view Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        {/* featured-imagebox */}
                                        <div className="featured-imagebox featured-imagebox-employer">
                                            <div className="featured-thumbnail">
                                                <img src="https://via.placeholder.com/200x200?text=200x200+employer-02.jpg" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="select-btn">
                                                    <i className="fa fa-heart"></i>
                                                </div>
                                                <div className="featured-title">
                                                    <h3>Jessica & Alexuis Costa</h3>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>24 Fifth st, Los Angeles, USA</span>
                                                        <span><i className="fa fa-hand-holding-usd"></i>$700 - $900/month</span>
                                                        <span>Skills :   HTML, CSS, JavaScript, Wordpress, PHP</span>
                                                    </div>
                                                    <div className="view-block">
                                                        <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-dark" 
                                                        href={process.env.PUBLIC_URL + '/employers_details'}>view Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        {/* featured-imagebox */}
                                        <div className="featured-imagebox featured-imagebox-employer">
                                            <div className="featured-thumbnail">
                                                <img src="https://via.placeholder.com/200x200?text=200x200+employer-03.jpg" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="select-btn">
                                                    <i className="fa fa-heart"></i>
                                                </div>
                                                <div className="featured-title">
                                                    <h3>Anne Smith</h3>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>24 Fifth st, Los Angeles, USA</span>
                                                        <span><i className="fa fa-hand-holding-usd"></i>$700 - $900/month</span>
                                                        <span>Skills :   HTML, CSS, JavaScript, Wordpress, PHP</span>
                                                    </div>
                                                    <div className="view-block">
                                                        <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-dark" 
                                                        href={process.env.PUBLIC_URL + '/employers_details'}>view Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>                        
                                    <div className="col-lg-12 col-md-12">
                                        {/* featured-imagebox */}
                                        <div className="featured-imagebox featured-imagebox-employer">
                                            <div className="featured-thumbnail">
                                                <img src="https://via.placeholder.com/200x200?text=200x200+employer-04.jpg" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="select-btn">
                                                    <i className="fa fa-heart"></i>
                                                </div>
                                                <div className="featured-title">
                                                    <h3>Rafael Briggs</h3>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>24 Fifth st, Los Angeles, USA</span>
                                                        <span><i className="fa fa-hand-holding-usd"></i>$700 - $900/month</span>
                                                        <span>Skills :   HTML, CSS, JavaScript, Wordpress, PHP</span>
                                                    </div>
                                                    <div className="view-block">
                                                        <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-dark" 
                                                        href={process.env.PUBLIC_URL + '/employers_details'}>view Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                    <div className="col-lg-12 col-md-12">
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
                                                    <div className="view-block">
                                                        <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-dark" 
                                                        href={process.env.PUBLIC_URL + '/employers_details'}>view Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        {/* featured-imagebox */}
                                        <div className="featured-imagebox featured-imagebox-employer">
                                            <div className="featured-thumbnail">
                                                <img src="https://via.placeholder.com/200x200?text=200x200+employer-02.jpg" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="select-btn">
                                                    <i className="fa fa-heart"></i>
                                                </div>
                                                <div className="featured-title">
                                                    <h3>Jessica & Alexuis Costa</h3>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>24 Fifth st, Los Angeles, USA</span>
                                                        <span><i className="fa fa-hand-holding-usd"></i>$700 - $900/month</span>
                                                        <span>Skills :   HTML, CSS, JavaScript, Wordpress, PHP</span>
                                                    </div>
                                                    <div className="view-block">
                                                        <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-dark" 
                                                        href={process.env.PUBLIC_URL + '/employers_details'}>view Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        {/* featured-imagebox */}
                                        <div className="featured-imagebox featured-imagebox-employer">
                                            <div className="featured-thumbnail">
                                                <img src="https://via.placeholder.com/200x200?text=200x200+employer-03.jpg" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="select-btn">
                                                    <i className="fa fa-heart"></i>
                                                </div>
                                                <div className="featured-title">
                                                    <h3>Anne Smith</h3>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>24 Fifth st, Los Angeles, USA</span>
                                                        <span><i className="fa fa-hand-holding-usd"></i>$700 - $900/month</span>
                                                        <span>Skills :   HTML, CSS, JavaScript, Wordpress, PHP</span>
                                                    </div>
                                                    <div className="view-block">
                                                        <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-dark" 
                                                        href={process.env.PUBLIC_URL + '/employers_details'}>view Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        {/* featured-imagebox */}
                                        <div className="featured-imagebox featured-imagebox-employer">
                                            <div className="featured-thumbnail">
                                                <img src="https://via.placeholder.com/200x200?text=200x200+employer-04.jpg" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="select-btn">
                                                    <i className="fa fa-heart"></i>
                                                </div>
                                                <div className="featured-title">
                                                    <h3>Rafael Briggs</h3>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>24 Fifth st, Los Angeles, USA</span>
                                                        <span><i className="fa fa-hand-holding-usd"></i>$700 - $900/month</span>
                                                        <span>Skills :   HTML, CSS, JavaScript, Wordpress, PHP</span>
                                                    </div>
                                                    <div className="view-block">
                                                        <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-dark" 
                                                        href={process.env.PUBLIC_URL + '/employers_details'}>view Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
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

export default Employers_list;