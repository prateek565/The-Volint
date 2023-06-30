import { Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { allApplicants, companyInterns } from '../../services/api';
import { Footer } from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import PageHeader from '../../components/layout/PageHeader';

const Posted_Jobs = () => {

    const [AllInterns, setallInterns] = useState([]);
    const history=useHistory();

    useEffect(() => {
        Promise.resolve(companyInterns()).then((res) => {
            console.log(res.data);
            setallInterns(res.data.intern)
        }).catch((e) => {
            console.log({e});
            if(e.response?.data?.error==='jwt expired'){
                history.push('/login');
            }
        })
    }, []);

    return (
        <div>
            <Header />
            <PageHeader
                title="Posted Fields"
                breadcrumb="Posts"
            />
            <Card>
                <div className="row m-4">
                    {AllInterns?.map((data, index) => { console.log(data) })}
                    {AllInterns?.map((data, index) => (
                        <Link exact to={`/job_details/${data._id}`}>
                            <div className="col-lg-12">
                                <div className="featured-imagebox featured-imagebox-candidate" style={{ backgroundColor: 'rgb(236, 215, 255)' }}>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3>{data?.title}</h3>
                                            <p style={{margin: '0px', padding: '0px'}}>{data?.category}</p>
                                            <p style={{margin: '0px', padding: '0px', color: 'grey'}}>{data?.createdAt.substr(0,10)}</p>
                                        </div>
                                        <div className="featured-bottom">
                                            <div className="job-skill">
                                                <p>{data?.description?.slice(0, 180)}...</p>
                                            </div>

                                            <div className="view-block">
                                                <Link className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-dark"
                                                    to={`/applicants/id=${data._id}`}>View Applications</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                    {/* {allcandidates.map((user) => (
            <div className="col-lg-12">
                <div className="featured-imagebox featured-imagebox-candidate" style={{backgroundColor:'#ece3f4'}}>
                    <div className="featured-thumbnail">
                        <img src="https://via.placeholder.com/200x200?text=200x200+candidate-04.jpg" />
                    </div>
                    <div className="featured-content">
                        <div className="featured-title">
                            <h3>{user.name}</h3>
                        </div>
                        <div className="featured-bottom">
                            <div className="job-skill">
                                {user.skills.map(skill => (
                                    <span className="skill-tag">{skill}</span>
                                ))}
                            </div>
                            <div className="job-meta">
                                <span><i className="fa fa-map-marker-alt"></i>{user.city}</span>
                            </div>
                            <div className="view-block">
                                <a className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                ttm-btn-color-dark"
                                    href={'/applications'}>view Applications</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))} */}
                </div>
            </Card>
            <Footer />
        </div>);
};

export default Posted_Jobs;
