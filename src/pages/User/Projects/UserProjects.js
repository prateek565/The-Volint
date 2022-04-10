import React, { Component, useEffect, useState } from 'react';
import Header from '../../../components/layout/Header';
import PageHeader from "../../../components/layout/PageHeader";
import { Footer } from '../../../components/layout/Footer';
import { Link } from 'react-router-dom';
import { allApplicants, allInterns, myAppliedJobs, myOffers, offerIntern, userApplied, userInfo, userOnBoard } from '../../../services/api';
import { CircularProgress, Divider, TextField } from '@material-ui/core';

import Card from './Card';

const UserProjects = () => {
    const [step, setStep] = useState(null);
    const [AllInterns, setallInterns] = useState([]);
    const [loading, setloading] = useState(true);
    const [offers, setoffers] = useState([]);
    const [user, setuser] = useState()
    
    useEffect(() => {
        Promise.resolve(myOffers()).then((res) => {
            console.log(res.data);
            setoffers(res.data)
        }).catch((e) => {
            console.log({ e });
        })
        Promise.resolve(userInfo()).then((res) => {
            console.log(res.data);
            setuser(res.data)
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

            <div className="ttm-row sidebar job-sidebar clearfix">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-12 content-area">
                            <div className="row">
                                {
                                    offers?.map((intern) => (
                                        <div className="col-lg-12 col-md-12">
                                            <Card intern={intern}/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* action-section */}

            {/* action-section end */}


            <Footer />

        </div>
    )
}

export default UserProjects;