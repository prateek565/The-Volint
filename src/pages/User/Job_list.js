import React, { Component, useEffect, useState } from 'react';
import Header from '../../components/layout/Header';
import PageHeader from "../../components/layout/PageHeader";
import { Footer } from '../../components/layout/Footer';
import { Link } from 'react-router-dom';
import { allInterns, searchIntern } from '../../services/api';
import { CircularProgress } from '@material-ui/core';

// export class Job_list extends Component {
const Job_list = () => {

    let [AllInterns, setallInterns] = useState([]);
    let [SearchInterns, setSearchInterns] = useState();
    const [loading, setloading] = useState(true);
    const [search, setsearch] = useState('')
    const [volunteer, setvolunteer] = useState(false)
    const [intern, setintern] = useState(false)

    useEffect(() => {
        Promise.resolve(allInterns()).then((res) => {
            setallInterns(res.data)
            setloading(false);
        }).catch((e) => {
            console.log({e});
        });
        // (volunteer) && AllInterns?.filter((intern)=>{
        //     console.log(intern.category);
        //     return intern.category==='Volunteer Work'
        // })
        // (intern) && AllInterns?.filter((intern)=>{
        //     return intern.category==='Volunteer Work'
        // })
    }, [])

    const handleSearch=(e)=>{
        setsearch(e.target.value)
        Promise.resolve(searchIntern(search)).then((res)=>{
            console.log(res.data);
            setSearchInterns(res.data);
        }).catch((e)=>{
            console.log({e});
        });
        console.log(volunteer);
        (volunteer) && SearchInterns?.filter((intern)=>{
            console.log(intern.category);
            return intern.category==='Volunteer Work'
        })
        (intern) && SearchInterns?.filter((intern)=>{
            return intern.category==='Volunteer Work'
        })
    }
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
                                                <input value={search} onChange={handleSearch} type="text" id="filter" placeholder="Project Title or Keywords" />
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
                                                <input type="radio" value="Volunteer Work" name="categories" onClick={()=>{
                                                    setvolunteer(true);
                                                    setintern(false);
                                                }}/>Volunteer Work
                                            </label>
                                            <label className="radio">
                                                <input type="radio" value="Internships" name="categories" onClick={()=>{
                                                    setintern(true)
                                                    setvolunteer(false)
                                                    }}/>Internships
                                            </label>
                                        </div>
                                    </form>
                                </aside>
                                {/* <aside className="widget job-widget">
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
                            </div>
                        <div className="col-lg-8 content-area">
                            <div className="row">
                                {loading&&<CircularProgress/>}
                                {(search!=='' && SearchInterns?.length==0)&&<h3>No interns found for {search}</h3>}
                                {
                                    (search!=='' && SearchInterns)?
                                    SearchInterns.map((intern) => (
                                        <div className="col-lg-12 col-md-12">
                                            <div className="flex featured-imagebox featured-imagebox-job" style={{ backgroundColor: 'rgb(236, 215, 255)' }}>
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <h3><Link to={`/job_details/${intern._id}`}>{intern.title ? intern.title : "_"}</Link></h3>
                                                    </div>
                                                    <div className="featured-desc">
                                                        <p>{intern.duration} {intern.category} </p>
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
                                    :
                                    AllInterns?.map((intern) => (
                                        <div className="col-lg-12 col-md-12">
                                            <div className="flex featured-imagebox featured-imagebox-job" style={{ backgroundColor: 'rgb(236, 215, 255)' }}>
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
                            </div>{/* row end */}
                        </div>
                </div>{/* row end */}
            </div>
        </div>
        <Footer />

    </div>
    )
}

export default Job_list;