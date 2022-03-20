import React, { Component, useEffect, useState } from 'react';
import Header from '../../components/layout/Header';
import PageHeader from "../../components/layout/PageHeader";
import { Footer } from '../../components/layout/Footer';
import { Link } from 'react-router-dom';
import { allApplicants, allInterns, myAppliedJobs, offerIntern, userApplied, userOnBoard } from '../../services/api';
import { CircularProgress, Divider } from '@material-ui/core';

const Projects = () => {
    const [step, setStep]= useState(null);
    const [AllInterns, setallInterns] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        Promise.resolve(allInterns()).then((res) => {
            // console.log(res.data);
            setallInterns(res.data)
            setStep(res.data[0]._id);
            setloading(false);
        }).catch((e) => {
            console.log(e);
        })
    }, [])
    const [applications, setApplications] = useState([]);
    useEffect(() => {
    Promise.resolve(userApplied(step)).then((res) => {
      console.log(res.data);
      setApplications(res.data.response)
    }).catch((e) => {
      console.log({ e });
    })
    }, []);
    const [accepted, setaccepted] = useState([]);
    useEffect(() => {
    Promise.resolve(userOnBoard(step)).then((res) => {
      console.log(res.data);
      setaccepted(res.data.response)
    }).catch((e) => {
      console.log({ e });
    })
    }, []);
    const [offers, setoffers] = useState([]);
    useEffect(() => {
    Promise.resolve(userApplied(step)).then((res) => {
      console.log(res.data);
      setoffers(res.data)
    }).catch((e) => {
      console.log({ e });
    })
    }, []);
    const handleOffer= (e) => {
        e.preventDefault();
        console.log(e);
        Promise.resolve(offerIntern(step)).then((res) => {
            console.log(res);
            setTimeout(() => {
            }, 3000);
        }).catch((e) => {
            console.log({ e });
        })
    }
    return (

        <div className="site-main">
            <Header />

            <div className="site-main">

                {/* PageHeader */}
                <PageHeader
                    title="Projects"
                    breadcrumb="projects"
                    className="pb-40 pb-lg-0"
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
                            <div className="job_list-widget" style={{ backgroundColor: 'rgb(236, 215, 255)' }}>
                                <aside className="widget job-widget" >
                                    <h3 className="widget-title">Posted Projects</h3>
                                    <div className="col-lg-12 col-md-12">
                                    <ul> 
                                      <li>
                                      { AllInterns?.map((intern, index) => (
                                            <div className="col-lg-12 col-md-12" onClick={() => ( setStep(intern._id))}>
                                                <div className="featured-title">
                                                   <Link to={`/job_details/${intern._id}`}><h6>{intern.title}</h6></Link>
                                                   <p>{intern.type}</p>
                                                </div>
                                                <Divider style={{ color: 'black'}}/>
                                            </div>
                                        ))
                                      }  
                                      </li>
                                    </ul>
                                  </div>
                                </aside>
                            </div>
                            </div>
                        <div className="col-lg-8 content-area">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="showing-result-block d-sm-flex align-items-center justify-content-between" style={{ backgroundColor: 'rgb(236, 215, 255)' }}>
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
                                <h6>Hired Volunteers/Interns</h6>
                                { accepted?.map((intern, index) => (
                                    <div className="col-lg-12 col-md-12" >
                                        <div className="featured-title">
                                           <Link to={`/candidate_details/${intern._id}`}><h6>{intern.name}</h6></Link>
                                           <p>{intern.title}</p>
                                        </div>
                                        <Divider style={{ color: 'black'}}/>
                                    </div>
                                ))
                                }
                                <h6>Offered Volunteers/Interns</h6>
                                {offers?.map((intern, index) => (
                                    <div className="col-lg-12 col-md-12" >
                                        <div className="featured-title">
                                           <Link to={`/candidate_details/${intern._id}`}><h6>{intern.name}</h6></Link>
                                           <p>{intern.title}</p>
                                        </div>
                                        <Divider style={{ color: 'black'}}/>
                                    </div>
                                ))
                                }
                                <h6>Applications</h6>
                                { applications?.map((intern, index) => (
                                    <div className="col-lg-12 col-md-12" >
                                        <div className="featured-title">
                                           <Link to={`/candidate_details/${intern._id}`}><h6>{intern.name}</h6></Link>
                                           <p>{intern.title}</p>
                                        </div>
                                        <div className="view-block"><button className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                        ttm-btn-color-dark mr-20"
                                        onClick={handleOffer}>Offer</button></div>
                                        <Divider style={{ color: 'black'}}/>
                                    </div>
                                ))
                                } 
                                
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
                            </div>{/* row end */}
                        </div>
                </div>{/* row end */}
            </div>
        </div>

            {/* action-section */}
            
            {/* action-section end */}


        <Footer />

    </div>
    )
}

export default Projects;