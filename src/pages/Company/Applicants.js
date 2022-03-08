import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { allApplicants, acceptApplicant, companyInterns, rejectApplicant } from '../../services/api';
import { Footer } from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import PageHeader from '../../components/layout/PageHeader';

const Applications = () => {
    const [allcandidates, setallcandidates] = useState([]);
    const [toggle, settoggle] = useState(false)
    const location = useLocation();
    let id = location.pathname;
    id = id.split('/id=')[1];
    console.log(id);
    useEffect(() => {
        Promise.resolve(allApplicants(id)).then((res) => {
            console.log(res.data);
            setallcandidates(res.data)
        }).catch((e) => {
            console.log({ e });
        })
    }, [toggle, ])
    const [allJobs, setAllJobs] = useState([]);
    useEffect(() => {
        Promise.resolve(companyInterns()).then((res) => {
            console.log(res.data);
            setAllJobs(res.data)
        }).catch((e) => {
            console.log({ e });
        })
    }, [])

    const handleReject = () => {

    }

    const handleAccept = () => {

    }

    return (
        <div className="site-main">
            <Header />

            {/* PageHeader */}
            <PageHeader
                title="Applicants"
                breadcrumb="applicants"
            />
            {/* PageHeader end */}

            <div className="site-main">
                <div className="ttm-row sidebar job-sidebar clearfix" >
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-4 widget-area sidebar-left job_list-widget-area">
                                <div className="job_list-widget bg-theme-SkinColor">
                                <aside className="widget job-widget ">
                                    <h3 className="widget-title">More Suggestions</h3>
                                  <div className="col-lg-12 col-md-12">
                                    <ul>    
                                      <li>
                                      {/* AllJobs &&
                                        AllJobs.map((jobs, index) => (
                                            index<5 && <div className="col-lg-12 col-md-12">
                                                <div className="featured-title">
                                                   <Link to={`/job_details/${intern._id}`}><h6>{intern.name}</h6></Link>
                                                   <p>{intern.jobType}</p>
                                                </div>
                                                <Divider style={{ color: 'black'}}/>
                                            </div>
                                        ))
                                        */}
                                                </li>
                                            </ul>
                                        </div>
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
                                    <div className="col-md-12 ">
                                        <div className="showing-result-block d-sm-flex align-items-center justify-content-between bg-theme-SkinColor">
                                            <span className="showing-result ">Showing 1–10 of 50 Applicant Results :</span>
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
                                {allcandidates.map((user, index) => (
            <div className="col-lg-12">
                <div className="featured-imagebox featured-imagebox-candidate" style={{ backgroundColor: 'rgb(236, 215, 255)' }}>
                    <div className="featured-thumbnail">
                        <img src="https://via.placeholder.com/200x200?text=200x200+candidate-04.jpg" />
                    </div>
                    <div className="featured-content">
                        <div className="featured-title">
                            <h3>{user?.name}</h3>
                        </div>
                        <div className="featured-title">
                            <p>{user?.title}</p>
                        </div>
                        <div className="featured-bottom">
                            <div className="job-skill">
                                {user?.skills?.map(skill => (
                                    <span className="skill-tag">{skill}</span>
                                ))}
                            </div>
                            <div className="job-meta">
                                <span><i className="fa fa-map-marker-alt"></i>{user?.city}</span>
                            </div>
                            <div className="view-block">
                                <Link className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                                        ttm-btn-color-dark " style={{ marginRight: '1rem' }}
                                    exact to={'/candidate_details'}>Contact</Link>
                                <span><Link className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                                        ttm-btn-color-dark"
                                    exact to={'/candidate_details'}>view Profile</Link></span>
                            </div>
                            <button onClick={() => {
                                settoggle(!toggle);
                                Promise.resolve(acceptApplicant(id, user._id)).then((res) => {
                                    console.log(res);
                                }).catch((e) => { console.log({ e }); })
                            }} className="bg-primary p-5 rounded mr-5">Accept Applicant</button>
                            <button onClick={() => {
                                settoggle(!toggle);
                                Promise.resolve(rejectApplicant(id)).then((res) => {
                                    console.log(res);
                                }).catch((e) => { console.log({ e }); })
                            }} className="bg-danger p-5 rounded">Reject Applicant</button>
                        </div>
                    </div>
                </div>
            </div>
                                                        ))}
                                <div className="col-lg-12">
                                    <div className="featured-imagebox featured-imagebox-candidate">
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
                                                    <Link className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                                        ttm-btn-color-dark " style={{marginRight:'1rem'}}
                                                        exact to={'/candidate_details'}>Contact</Link>
                                                    <span><Link className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                                        ttm-btn-color-dark"
                                                        exact to={'/candidate_details'}>view Profile</Link></span>
                                                    
                                                </div>
                                                {/* <div >
                                                    
                                                    
                                                </div> */}
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
                            </div >
                            </div >
                        </div >
                    </div > {/* row end */ }
                </div >
            </div >
    <Footer />

        </div >
    )
};

export default Applications;
