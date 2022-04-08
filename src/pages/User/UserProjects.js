import React, { Component, useEffect, useState } from 'react';
import Header from '../../components/layout/Header';
import PageHeader from "../../components/layout/PageHeader";
import { Footer } from '../../components/layout/Footer';
import { Link } from 'react-router-dom';
import { allApplicants, allInterns, myAppliedJobs, myOffers, offerIntern, userApplied, userOnBoard } from '../../services/api';
import { CircularProgress, Divider, TextField } from '@material-ui/core';

const UserProjects = () => {
    const [step, setStep] = useState(null);
    const [AllInterns, setallInterns] = useState([]);
    const [loading, setloading] = useState(true);
    const [offers, setoffers] = useState([]);
    useEffect(() => {
        Promise.resolve(myOffers(step)).then((res) => {
            console.log(res.data);
            setoffers(res.data)
        }).catch((e) => {
            console.log({ e });
        })
    }, []);
    const handleOffer = (e) => {
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
                    title="My Projects"
                    breadcrumb="projects"
                    className="pb-40 pb-lg-0"
                />
                {/* PageHeader end */}
            </div>
            {/* form end */}


            <div className="ttm-row sidebar job-sidebar clearfix">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-12 content-area">
                            <div className="row">
                                {
                                    offers?.map((intern) => (
                                        <div className="col-lg-12 col-md-12">
                                            <div className="flex featured-imagebox featured-imagebox-job" style={{ backgroundColor: 'rgb(236, 215, 255)' }}>
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <h3><Link to={`/job_details/${intern._id}`}>{intern.title ? intern.title : "_"}</Link></h3>
                                                    </div>
                                                    <div className="featured-desc">
                                                        <p>{intern.duration}</p>
                                                        <p>Started from: </p>
                                                        <p>{intern.description ? intern.description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} </p>
                                                        <div className='flex' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                            <p>No. of hours you work per day : </p>
                                                            <TextField id="outlined-basic" type='number' variant="outlined" />
                                                            <button type="button" class="btn btn-success" style={{padding:'10px', boxShadow:'none'}}>Save</button>
                                                        </div>
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
                                {offers?.map((intern, index) => (
                                    <div className="col-lg-12 col-md-12" >
                                        <div className="featured-title">
                                            <Link to={`/candidate_details/${intern._id}`}><h6>{intern.name}</h6></Link>
                                            <p>{intern.title}</p>
                                        </div>
                                        <Divider style={{ color: 'black' }} />
                                    </div>
                                ))
                                }
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

export default UserProjects;