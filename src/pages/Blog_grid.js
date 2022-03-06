import React, { Component } from 'react';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';

export class Blog_grid extends Component {
    render() {
        return (

            <div className="site-main">
                <Header/>
            
                {/* PageHeader */} 
                <PageHeader
                    title="blog grid"
                    breadcrumb="blog"
                />
                {/* PageHeader end */} 

                <div className="ttm-row sidebar ttm-sidebar clearfix">
                    <div className="container">
                        {/* row */}
                        <div className="row">                            
                            <div className="col-lg-8 content-area mt_20">
                                <div className="row mt-2">
                                    <div className="col-md-6">
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
                                    <div className="col-md-6">
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
                                    <div className="col-md-6">
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
                                    <div className="col-md-6">
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
                                    <div className="col-md-6">
                                        {/* featured-imagebox-post */}
                                        <div className="featured-imagebox featured-imagebox-post style1">
                                            {/* featured-thumbnail */}
                                            <div className="featured-thumbnail">
                                                <img className="img-fluid" src="https://via.placeholder.com/600x430?text=600x430+blog-05-600x430.jpg" alt="blog-image" />
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
                                                    <h3><a href={process.env.PUBLIC_URL + '/blog_details'}>Is Business Tech Accessible To All Employees?</a></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Team members can work from anywhere with an internet connection only!</p>
                                                </div>
                                                <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={process.env.PUBLIC_URL + '/blog_details'}>read more!</a>
                                            </div>
                                        </div>{/* featured-imagebox-post end */}
                                    </div>
                                    <div className="col-md-6">
                                        {/* featured-imagebox-post */}
                                        <div className="featured-imagebox featured-imagebox-post style1">
                                            {/* featured-thumbnail */}
                                            <div className="featured-thumbnail">
                                                <img className="img-fluid" src="https://via.placeholder.com/600x430?text=600x430+blog-06-600x430.jpg" alt="blog-image" />
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
                                                    <h3><a href={process.env.PUBLIC_URL + '/blog_details'}>5 Management Challenges And Handle Them</a></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>When you’re managing recruitment team, and it can feel like being pulled</p>
                                                </div>
                                                <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={process.env.PUBLIC_URL + '/blog_details'}>read more!</a>
                                            </div>
                                        </div>{/* featured-imagebox-post end */}
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="pagination-block">
                                            <span className="page-numbers current">1</span>
                                            <a className="page-numbers" href="#">2</a>
                                            <a className="next page-numbers" href="#"><i className="ti ti-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 widget-area">
                                <div className="sidebar-right">
                                    <aside className="widget widget-search">
                                        <form role="search" className="search-form">
                                            <label>
                                                <span className="screen-reader-text">Search for:</span>
                                                <input type="search" className="input-text" placeholder="Your Keyword...." value="" />
                                            </label>
                                            <button className="btn" type="submit"><i className="fa fa-search"></i> </button>
                                        </form>
                                    </aside>
                                    <aside className="widget widget-Categories with-title">
                                        <h3 className="widget-title">Categories</h3>
                                        <ul>
                                            <li><a href={process.env.PUBLIC_URL + '/blog_grid'}>Digital Marketing</a></li>
                                            <li><a href={process.env.PUBLIC_URL + '/blog_grid'}>Search Engine Optimization</a></li>
                                            <li><a href={process.env.PUBLIC_URL + '/blog_grid'}>UI/UX Design Task</a></li>
                                            <li><a href={process.env.PUBLIC_URL + '/blog_grid'}>Web development</a></li>
                                            <li><a href={process.env.PUBLIC_URL + '/blog_grid'}>Digital Marketing</a></li>
                                            <li><a href={process.env.PUBLIC_URL + '/blog_grid'}>Investment</a></li>
                                        </ul>
                                    </aside>
                                    <aside className="widget widget-recent-post with-title">
                                        <h3 className="widget-title">Recent Posts</h3>
                                        <ul>
                                            <li>
                                                <a href={process.env.PUBLIC_URL + '/blog_details'}>
                                                    <img className="img-fluid" src="https://via.placeholder.com/150x150?text=150x150+b_thumbb-01.jpg" alt="post-img"/>
                                                </a>
                                                <div className="post-detail">
                                                    <a href={process.env.PUBLIC_URL + '/blog_details'}>How Sources Utilize Sleuth Skill Beyond Work</a>
                                                    <span className="post-date">October 10, 2020</span>
                                                </div>
                                            </li>
                                            <li>
                                                <a href={process.env.PUBLIC_URL + '/blog_details'}>
                                                    <img className="img-fluid" src="https://via.placeholder.com/150x150?text=150x150+b_thumbb-02.jpg" alt="post-img"/>
                                                </a>
                                                <div className="post-detail">
                                                    <a href={process.env.PUBLIC_URL + '/blog_details'}>Let's Create Your Own Competitive News Feeder For Free</a>
                                                    <span className="post-date">October 10, 2020</span>
                                                </div>
                                            </li>
                                            <li>
                                                <a href={process.env.PUBLIC_URL + '/blog_details'}>
                                                    <img className="img-fluid" src="https://via.placeholder.com/150x150?text=150x150+b_thumbb-03.jpg" alt="post-img"/>
                                                </a>
                                                <div className="post-detail">
                                                    <a href={process.env.PUBLIC_URL + '/blog_details'}>Remote Hiring Trends Report 2021: Review Hire Process</a>
                                                    <span className="post-date">October 10, 2020</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </aside>
                                    <aside className="widget widget-banner">
                                        <div className="ttm-col-bgcolor-yes bg-theme-DarkColor col-bg-img-seven ttm-col-bgimage-yes ttm-bg p-30 pb-50 pt-45">
                                            <div className="ttm-col-wrapper-bg-layer ttm-bg-layer bg-theme-DarkColor" style={{ backgroundImage: 'url(https://via.placeholder.com/875x583?text=875x583+col-bgimage-7.jpg)' }}>
                                                <div className="ttm-col-wrapper-bg-layer-inner bg-theme-DarkColor"></div>
                                            </div>
                                            <div className="layer-content text-center text-theme-WhiteColor">
                                            <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-style-round ttm-icon_element-color-skincolor ttm-icon_element-size-xl">
                                                <i className="far fa-comments"></i></div>
                                                <h3>Do You Need Any Help?</h3>
                                                <div className="ttm-horizontal_sep width-100 mt-25 mb-25"></div>
                                                <ul>
                                                    <li>+1 800 556 77 894</li>
                                                    <li>info@yourmailexample.com</li>
                                                </ul>
                                                <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" href={process.env.PUBLIC_URL + '/'}>appoinments!</a>
                                            </div>
                                        </div>
                                    </aside>
                                    <aside className="widget tagcloud-widget with-title">
                                        <h3 className="widget-title">Popular Tags</h3>
                                        <div className="tagcloud">
                                            <a href={process.env.PUBLIC_URL + '/blog_grid'} className="tag-cloud-link">Agency</a>
                                            <a href={process.env.PUBLIC_URL + '/blog_grid'} className="tag-cloud-link">Business</a>
                                            <a href={process.env.PUBLIC_URL + '/blog_grid'} className="tag-cloud-link">Corporate</a>
                                            <a href={process.env.PUBLIC_URL + '/blog_grid'} className="tag-cloud-link">Creative</a>
                                            <a href={process.env.PUBLIC_URL + '/blog_grid'} className="tag-cloud-link">Design</a>
                                            <a href={process.env.PUBLIC_URL + '/blog_grid'} className="tag-cloud-link">inspiration</a>
                                            <a href={process.env.PUBLIC_URL + '/blog_grid'} className="tag-cloud-link">Marketing</a>
                                            <a href={process.env.PUBLIC_URL + '/blog_grid'} className="tag-cloud-link">Startup</a>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>{/* row end */}
                    </div>
                </div>

            <Footer/>
                        
            </div>
          )
      }
   }

export default Blog_grid;