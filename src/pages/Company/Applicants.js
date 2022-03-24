import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { allApplicants, acceptApplicant, companyInterns, rejectApplicant } from '../../services/api';
import { Footer } from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import PageHeader from '../../components/layout/PageHeader';
import TemporaryDrawer from '../Common/Message';

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
    }, [toggle,])
    const [allJobs, setAllJobs] = useState([]);
    useEffect(() => {
        Promise.resolve(companyInterns()).then((res) => {
            console.log(res.data);
            setAllJobs(res.data)
        }).catch((e) => {
            console.log({ e });
        })
    }, [])

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
                                </div>
                            </div>
                            <div className="col-lg-8 content-area">
                                <div className="row">
                                    {allcandidates.length===0&&<h4>No Applicants</h4>}
                                    {allcandidates.map((user, index) => (
                                        <div className="col-lg-12">
                                            <div className="featured-imagebox featured-imagebox-candidate" style={{ backgroundColor: 'rgb(236, 215, 255)' }}>
                                                <div className="featured-thumbnail">
                                                    <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" />
                                                </div>
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <Link to={`/candidate_details/${user._id}`}><h3>{(user) && user.name}</h3></Link>
                                                    </div>
                                                    <div className="featured-bottom">
                                                        <div className="job-skill">
                                                            {user?.skills?.map(skill => (
                                                                <span className="skill-tag">{skill}</span>
                                                            ))}
                                                        </div>
                                                        <div className="view-block">
                                                            <TemporaryDrawer name={user?.name} key={user?._id} id={user?._id} />
                                                        </div>
                                                        <button onClick={() => {
                                                            Promise.resolve(acceptApplicant(id, user._id)).then((res) => {
                                                                settoggle(!toggle);
                                                                console.log(res.data);
                                                            }).catch((e) => { console.log({ e }); })
                                                        }} className="bg-primary p-5 rounded mr-5 text-white">Accept</button>
                                                        <button onClick={() => {
                                                            Promise.resolve(rejectApplicant(id, user._id)).then((res) => {
                                                                settoggle(!toggle);
                                                            }).catch((e) => { console.log({ e }); })
                                                        }} className="bg-danger p-5 rounded text-white">Reject</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {/* <div className="col-lg-12">
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
                                                        ttm-btn-color-dark " style={{ marginRight: '1rem' }}
                                                            exact to={'/candidate_details'}>Contact</Link>
                                                        <span><Link className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                                        ttm-btn-color-dark"
                                                            exact to={'/candidate_details'}>view Profile</Link></span>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div >
                            </div >
                        </div >
                    </div > {/* row end */}
                </div >
            </div >
            <Footer />

        </div >
    )
};

export default Applications;
