import React, { Component, useEffect, useState } from 'react';
import Header from '../../components/layout/Header';
import PageHeader from "../../components/layout/PageHeader";
import { Footer } from '../../components/layout/Footer';
import { Link } from 'react-router-dom';
import { allApplicants, allInterns, myAppliedJobs } from '../../services/api';
import { CircularProgress, Divider } from '@material-ui/core';


// export class Job_list extends Component {
const ManageRecruitment = () => {
    const [step, setStep]= useState(0);
    const [AllInterns, setallInterns] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        Promise.resolve(allInterns()).then((res) => {
            // console.log(res.data);
            setallInterns(res.data)
            setloading(false);
        }).catch((e) => {
            console.log(e);
        })
    }, [])
    const [allApplications, setAllApplications] = useState([]);
    useEffect(() => {
    Promise.resolve(myAppliedJobs()).then((res) => {
      console.log(res.data);
      setAllApplications(res.data.response)
    }).catch((e) => {
      console.log({ e });
    })
    }, []);
    
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
                            <div className="job_list-widget" style={{ backgroundColor: '#ffc0d0' }}>
                                <aside className="widget job-widget" onClick={() => ( setStep(0))}>
                                    <h3 className="widget-title">Projects</h3>
                                    <div className="col-lg-12 col-md-12">
                                    <ul>
                                                    
                                                
                                      <li>
                                      { AllInterns &&
                                        AllInterns.map((intern, index) => (
                                            index<5 && <div className="col-lg-12 col-md-12">
                                                <div className="featured-title">
                                                   <Link to={`/job_details/${intern._id}`}><h6>{intern.name}</h6></Link>
                                                   <p>{intern.jobType}</p>
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
                                {(() => {
                                    switch (step) {
                                      case 0:
                                        return( 
                                        <>
                                        <h5>Project Title</h5>
                                        <h6>Candidates Hired</h6>
                                        <h6>Candidates Offered</h6>
                                        {  allApplications &&
                                            allApplications.map((intern, index) => (
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="flex featured-imagebox featured-imagebox-job" style={{ backgroundColor: '#ffc0d0' }}>
                                                        <div className="featured-content">
                                                            <div className="featured-title">
                                                                <h3><Link to={`/job_details/${intern._id}`}>{intern.name}</Link></h3>
                                                            </div>
                                                            <div className="featured-desc">
                                                                <p>{intern.duration}</p>
                                                                <p>{intern.description ? intern.description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} </p>
                                                            </div>
                                                            <div className="featured-bottom">
                                                                <div className="job-meta">
                                                                    <span><i className="fa fa-map-marker-alt"></i>{intern.location}</span>
                                                                </div>
                                                                {intern?.jobType && <div className="job-time">
                                                                    <span className="green">{intern.jobType}</span>
                                                                </div>}
                                                            </div>
                                                        </div>
        
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        </>
                                        );
                                      case 1:
                                        return(
                                        <>
                                        <h6>Completed Projects</h6>
                                        {  allApplications &&
                                            allApplications.map((intern, index) => (
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="flex featured-imagebox featured-imagebox-job" style={{ backgroundColor: '#ffc0d0' }}>
                                                        <div className="featured-content">
                                                            <div className="featured-title">
                                                                <h3><Link to={`/job_details/${intern._id}`}>{intern.name}</Link></h3>
                                                            </div>
                                                            <div className="featured-desc">
                                                                <p>{intern.duration}</p>
                                                                <p>{intern.description ? intern.description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} </p>
                                                            </div>
                                                            <div className="featured-bottom">
                                                                <div className="job-meta">
                                                                    <span><i className="fa fa-map-marker-alt"></i>{intern.location}</span>
                                                                </div>
                                                                {intern?.jobType && <div className="job-time">
                                                                    <span className="green">{intern.jobType}</span>
                                                                </div>}
                                                            </div>
                                                        </div>
        
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        </>
                                        );
                                      case 2:
                                        return(
                                        <>
                                        <h6>In Process Projects</h6>
                                        {  allApplications &&
                                            allApplications.map((intern, index) => (
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="flex featured-imagebox featured-imagebox-job" style={{ backgroundColor: '#ffc0d0' }}>
                                                        <div className="featured-content">
                                                            <div className="featured-title">
                                                                <h3><Link to={`/job_details/${intern._id}`}>{intern.name}</Link></h3>
                                                            </div>
                                                            <div className="featured-desc">
                                                                <p>{intern.duration}</p>
                                                                <p>{intern.description ? intern.description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} </p>
                                                            </div>
                                                            <div className="featured-bottom">
                                                                <div className="job-meta">
                                                                    <span><i className="fa fa-map-marker-alt"></i>{intern.location}</span>
                                                                </div>
                                                                {intern?.jobType && <div className="job-time">
                                                                    <span className="green">{intern.jobType}</span>
                                                                </div>}
                                                            </div>
                                                        </div>
        
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        </>)
                                        ;
                                      default:
                                        return <CircularProgress />;
                                    }
                                  })()}
                                
                                {  allApplications &&
                                    allApplications.map((intern, index) => (
                                        <div className="col-lg-12 col-md-12">
                                            <div className="flex featured-imagebox featured-imagebox-job" style={{ backgroundColor: '#ffc0d0' }}>
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <h3><Link to={`/job_details/${intern._id}`}>{intern.name}</Link></h3>
                                                    </div>
                                                    <div className="featured-desc">
                                                        <p>{intern.duration}</p>
                                                        <p>{intern.description ? intern.description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} </p>
                                                    </div>
                                                    <div className="featured-bottom">
                                                        <div className="job-meta">
                                                            <span><i className="fa fa-map-marker-alt"></i>{intern.location}</span>
                                                        </div>
                                                        {intern?.jobType && <div className="job-time">
                                                            <span className="green">{intern.jobType}</span>
                                                        </div>}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    ))
                                }
                                {  allApplications &&
                                    allApplications.map((intern, index) => (
                                        <div className="col-lg-12 col-md-12">
                                            <div className="flex featured-imagebox featured-imagebox-job" style={{ backgroundColor: '#ffc0d0' }}>
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <h3><Link to={`/job_details/${intern._id}`}>{intern.name}</Link></h3>
                                                    </div>
                                                    <div className="featured-desc">
                                                        <p>{intern.duration}</p>
                                                        <p>{intern.description ? intern.description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} </p>
                                                    </div>
                                                    <div className="featured-bottom">
                                                        <div className="job-meta">
                                                            <span><i className="fa fa-map-marker-alt"></i>{intern.location}</span>
                                                        </div>
                                                        {intern?.jobType && <div className="job-time">
                                                            <span className="green">{intern.jobType}</span>
                                                        </div>}
                                                    </div>
                                                </div>

                                            </div>
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

export default ManageRecruitment;