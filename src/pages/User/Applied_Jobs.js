import React, { Component, useEffect, useState } from 'react';
import Header from '../../components/layout/Header';
import PageHeader from "../../components/layout/PageHeader";
import { Footer } from '../../components/layout/Footer';
import { Link } from 'react-router-dom';
import { allApplicants, allInterns, deleteAppliedJob, myAppliedJobs } from '../../services/api';
import { CircularProgress, Divider } from '@material-ui/core';

// export class Job_list extends Component {
const Applied_Jobs = () => {

    const [AllInterns, setallInterns] = useState([]);
    const [loading, setloading] = useState(true);
    const [delet, setDelete] = useState(false);
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
    }, [delet, ]);
    return (

        <div className="site-main">
            <Header />

            <div className="site-main">

                {/* PageHeader */}
                <PageHeader
                    title="Applications"
                    breadcrumb="applications"
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
                                <aside className="widget job-widget">
                                    <h3 className="widget-title">More Suggestions</h3>
                                    <div className="col-lg-12 col-md-12">
                                    <ul>
                                                    
                                                
                                      <li>
                                      { AllInterns &&
                                        AllInterns.map((intern, index) => (
                                            index<5 && <div className="col-lg-12 col-md-12">
                                                <div className="featured-title">
                                                   <Link to={`/job_details/${intern._id}`}><h6>{intern.name}</h6></Link>
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
                                
                                {/*<aside className="widget job-widget">
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
                                </aside>*/}

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
                                {  allApplications &&
                                    allApplications.map((intern, index) => (
                                        <div className="col-lg-12 col-md-12">
                                            <div className="flex featured-imagebox featured-imagebox-job" style={{ backgroundColor: 'rgb(236, 215, 255)' }}>
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <h3><Link to={`/job_details/${intern._id}`}>{intern.title}</Link></h3>
                                                        <p>At {intern.company}</p>
                                                    </div>
                                                        <p>Duration: {intern.duration}</p>
                                                    <div className="featured-desc">
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
                                                <button type="button" className='mt-20 mr-20 p-10 font-weight-bold rounded btn-danger' onClick={()=>{
                                                    Promise.resolve(deleteAppliedJob(intern._id)).then((res)=>{
                                                        console.log(res);
                                                        setDelete(!delet);
                                                    }).catch((e)=>{
                                                        console.log(e);
                                                    })
                                                }}>Delete</button>
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
        <Footer />

    </div>
    )
}

export default Applied_Jobs;