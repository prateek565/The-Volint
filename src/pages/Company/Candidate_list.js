import React, { Component, useState, useEffect } from 'react';
import Header from '../../components/layout/Header';
import PageHeader from "../../components/layout/PageHeader";
import { Footer } from '../../components/layout/Footer';
import { Link, useLocation, useParams } from 'react-router-dom';
import { allApplicants, allUsers } from '../../services/api';
import { CircularProgress } from '@material-ui/core';
import TemporaryDrawer from '../Common/Message';

const Candidate_list = () => {

    const [allcandidates, setallcandidates] = useState([]);
    const location = useLocation();
    useEffect(() => {
        const id = location.pathname.substring(16,)
        Promise.resolve(allUsers(id)).then((res) => {
            console.log(res.data);
            setallcandidates(res.data)
        }).catch((e) => {
            console.log(e);
        })
    }, [])

    return (
        <div className="site-main">
            <Header />

            {/* PageHeader */}
            <PageHeader
                title="Volunteers"
                breadcrumb="volunteers"
            />
            {/* PageHeader end */}

            <div className="site-main">
                <div className="ttm-row sidebar job-sidebar clearfix" >
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-4 widget-area sidebar-left job_list-widget-area">
                                <div className="job_list-widget" style={{backgroundColor:'#ece3f4'}}>
                                    <aside className="widget job-widget">
                                        <h3 className="widget-title"><i className="flaticon flaticon-calendar-1"></i>Date Applied</h3>
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
                                        <h3 className="widget-title"><i className="flaticon flaticon-subfolder-1"></i>Skills</h3>
                                        <form id="list2" className="list-filter">
                                            <div  >
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
                                {/* <aside className="widget widget-download">
                                    <ul className="download">
                                        <li><a href="#">Download.pdf</a><i className="ti ti-files"></i></li>
                                        <li><a href="#">Download.txt</a><i className="ti ti-files"></i></li>
                                    </ul>
                                </aside> */}
                            </div>
                            <div className="col-lg-8 content-area">
                                <div className="row">
                                    {allcandidates.map((user) => (
                                        (user) ? <div className="col-lg-12">
                                            <div className="featured-imagebox featured-imagebox-candidate" style={{backgroundColor:'#ece3f4'}}>
                                                <div className="featured-thumbnail">
                                                    <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" />
                                                </div>
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <Link to={`/candidate_details/${user._id}`}><h3>{(user) && user.name}</h3></Link>
                                                    </div>
                                                    <div>
                                                        description of the candidate
                                                    </div>
                                                    <div className="featured-bottom">
                                                        <div className="job-skill">
                                                            {(user) && user.skills.map(skill => (
                                                                <span className="skill-tag">{(user) && skill}</span>
                                                            ))}
                                                        </div>
                                                        <div className="job-meta">
                                                            <span><i className="fa fa-map-marker-alt"></i>{(user) && user.city}</span>
                                                        </div>
                                                        <div className="view-block">
                                                            <TemporaryDrawer name={user.name} key={user._id} id={user._id}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> : <div><CircularProgress/></div>
                                    ))}
                                    
                                    <div className="col-lg-12">
                                        <div className="featured-imagebox featured-imagebox-candidate" style={{backgroundColor:'#ece3f4'}}>
                                            <div className="featured-thumbnail">
                                                <img src="https://via.placeholder.com/200x200?text=200x200+candidate-04.jpg" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h3>Rafael Briggs</h3>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-skill">
                                                        <span className="skill-tag">bootstrap</span>
                                                        <span className="skill-tag">JavaScript</span>
                                                    </div>
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>24 Fifth st, Los Angeles, USA</span>
                                                        <span><i className="fa fa-hand-holding-usd"></i>$700 - $900/month</span>
                                                    </div>
                                                    <div className="view-block">
                                                        <a className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                                        ttm-btn-color-dark"
                                                            href={process.env.PUBLIC_URL + '/candidate_details'}>view Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="job-pagination-block">
                                            <Link className="page-nav-link">prev</Link>
                                            <Link className="page-nav-link current">1</Link>
                                            <Link className="page-nav-link" href="#">2</Link>
                                            <Link className="page-nav-link" href="#">3</Link>
                                            <Link className="page-nav-link" href="#">....</Link>
                                            <Link className="page-nav-link">next</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* row end */}
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Candidate_list;