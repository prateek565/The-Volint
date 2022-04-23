import React, { Component,useState, useEffect } from 'react';
import Header from '../../components/layout/Header';
import PageHeader from "../../components/layout/PageHeader";
import { Footer } from '../../components/layout/Footer';
import ProgressBar from 'react-animated-progress-bar';
import { useLocation } from 'react-router-dom';
import { offerIntern, userInfoById } from '../../services/api';
import SimpleBackDrop from '../../components/Manual/BackDrop/SimpleBackdrop';


const Candidate_details=()=> {

    const location = useLocation()
    const [candidate, setcandidate] = useState([]);
    const [loading, setloading] = useState(false);
    const id = location.pathname.split('candidate_details/')[1];
    console.log('====================================');
    console.log(id);
    console.log('====================================');
    useEffect(() => {  
        setloading(true)
        Promise.resolve(userInfoById(id)).then((res) => {
            console.log(res.data);
            setcandidate(res.data)
            setloading(false)
        }).catch((e) => {
            console.log({e});
        })
    }, [])
    const handleOffer= (e) => {
        e.preventDefault();
        console.log(e);
        Promise.resolve(offerIntern(id)).then((res) => {
            console.log(res);
            setTimeout(() => {
            }, 3000);
        }).catch((e) => {
            console.log({ e });
        })
    }

    {
        return (

            <div className="site-main">
                <Header/>
                {/* PageHeader */} 
                <PageHeader
                    title="candidate details"
                    breadcrumb="candidate"
                />
                {/* PageHeader end */}

                {loading&&<SimpleBackDrop/>}
                <div className="ttm-row sidebar job-sidebar clearfix">
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-4 widget-area sidebar-left job_list-widget-area">
                                <div className="job_list-widget" style={{backgroundColor:'#ece3f4'}}>
                                    <aside className="widget candidate-widget">
                                        <h3 className="widget-title"><i className="ti ti-files"></i>Candidate Informations</h3>
                                        <ul>
                                            <li className="d-flex"><b className="mr-5">Category:</b><span>{candidate?.title}</span></li>
                                            <li className="d-flex"><b className="mr-5">Experience:</b><span>3 to 5 Years</span></li>
                                            <li className="d-flex"><b className="mr-5">Expected Salary:</b><span>$ 20k To $ 30k</span></li>
                                            <li className="d-flex"><b className="mr-5">Experience:</b><span>3 Years</span></li>
                                            <li className="d-flex"><b className="mr-5">Language:</b><span>English, French</span></li>
                                            <li className="d-flex"><b className="mr-5">Qualification:</b><span>Associate Degree</span></li>
                                            <li className="d-flex"><b className="mr-5">Type:</b><span>Full Time</span></li>
                                        </ul>
                                    </aside>
                                    <aside className="widget form-widget">
                                        <h3 className="widget-title"><i className="ti ti-email"></i>Contact Candidate</h3>
                                        <form className="wrap-form">
                                            <label>
                                                <input name="name" type="text" placeholder="Name" required="required" />
                                            </label>
                                            <label>
                                                <input name="email" type="text" placeholder="Email" required="required" />
                                            </label>
                                            <label>
                                                <input name="subject" type="text" placeholder="Subject" required="required" />
                                            </label>
                                            <label>
                                                <textarea name="message" rows="4" placeholder="Message" required="required"></textarea>
                                            </label>
                                            <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor w-100" type="submit">send a message!</button>
                                        </form>
                                    </aside>
                                </div>
                                {/* <aside className="widget widget-download">
                                    <ul className="download">
                                        <li><a href="#">View Cv</a><i className="ti ti-eye"></i></li>
                                        <li><a href="#">Download Cv</a><i className="ti ti-files"></i></li>
                                    </ul>
                                </aside> */}
                                <div className="overview-box" style={{backgroundColor:'#ece3f4'}}>
                                    <div className="title">
                                        <div className="d-sm-flex justify-content-between align-items-center mb_10">
                                            <p className="mb-10 fw-bold">Social Links :</p>
                                            <div className="social-icons circle mb-10">
                                                <ul className="list-inline">
                                                    <li><a href="#facebook" rel="noopener" aria-label="facebook"><i className="ti ti-facebook"></i></a></li>
                                                    <li><a href="#twitter" rel="noopener" aria-label="twitter"><i className="ti ti-twitter-alt"></i></a></li>
                                                    <li><a href="#instagram" rel="noopener" aria-label="instagram"><i className="ti ti-instagram"></i></a></li>
                                                    <li><a href="#pinterest" rel="noopener" aria-label="pinterest"><i className="ti ti-pinterest"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 content-area">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="candidate-data" style={{backgroundColor:'#ece3f4'}}>
                                            <div className="candidate-img">
                                                <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" />
                                            </div>
                                            <div className="candidate-caption">
                                                <h5>{candidate?.name}</h5>
                                                <span>{candidate?.title}</span>
                                                <div className="meta-line">
                                                    <span><i className="ti ti-headphone"></i> (+01)123 456 789</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="overview-box" style={{backgroundColor:'#ece3f4'}}>
                                            <div className="title">
                                                <h5>About me</h5>
                                            </div>
                                            <div className="desc">
                                                {candidate?.description? <p>{candidate?.description}</p> : <p>Dolor sed viverra ipsum nunc. In ornare quam viverra orci. Id diam maecenas ultricies mi eget mauris
                                                    pharetra et ultrices. Non diam phasellus vestibulum lorem sed risus ultricies. Lacinia at quis 
                                                    risus sed vulputate odio ut enim blandit. Suspendisse ultrices gravida dictum fusce ut.</p>}
                                            </div>
                                        </div>
                                        <div className="overview-box" style={{backgroundColor:'#ece3f4'}}>
                                            <div className="title">
                                                <h5>Education Details</h5>
                                            </div>
                                            <div className="desc">
                                                <div className="candidate-timeline">
                                                    <div className="timeline-panel">
                                                        <div className="timeline-head">
                                                            <h3>Internatinal University</h3>
                                                            <span className="timeline-year">2009-2012</span>
                                                        </div>
                                                        <div className="timeline-body">
                                                            <h5>Bachlors in Fine Arts</h5>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                                incididunt.</p>
                                                        </div>
                                                    </div>
                                                    <div className="timeline-panel">
                                                        <div className="timeline-head">
                                                            <h3>Internatinal University</h3>
                                                            <span className="timeline-year">2012-2015</span>
                                                        </div>
                                                        <div className="timeline-body">
                                                            <h5>Master In Fine Arts </h5>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                                incididunt.</p>
                                                        </div>
                                                    </div>
                                                    <div className="timeline-panel">
                                                        <div className="timeline-head">
                                                            <h3>Diploma In Fine Arts</h3>
                                                            <span className="timeline-year">2015-2018</span>
                                                        </div>
                                                        <div className="timeline-body">
                                                            <h5>Imperieal Institute of Art Direction</h5>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                                incididunt.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="overview-box" style={{backgroundColor:'#ece3f4'}}>
                                            <div className="title">
                                                <h5>Education Details</h5>
                                            </div>
                                            <div className="desc">
                                                <div className="candidate-timeline">
                                                    <div className="timeline-panel">
                                                        <div className="timeline-head">
                                                            <h3>Senior Software Engineer</h3>
                                                            <span className="timeline-year">2009-2012</span>
                                                        </div>
                                                        <div className="timeline-body">
                                                            <h5>Clothing Store</h5>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                                incididunt.</p>
                                                        </div>
                                                    </div>
                                                    <div className="timeline-panel">
                                                        <div className="timeline-head">
                                                            <h3>Self Employe Professional</h3>
                                                            <span className="timeline-year">2012-2015</span>
                                                        </div>
                                                        <div className="timeline-body">
                                                            <h5>Fashion Store</h5>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                                incididunt.</p>
                                                        </div>
                                                    </div>
                                                    <div className="timeline-panel">
                                                        <div className="timeline-head">
                                                            <h3>Self Employe Professional</h3>
                                                            <span className="timeline-year">2014-2015</span>
                                                        </div>
                                                        <div className="timeline-body">
                                                            <h5>Jewelry Store</h5>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                                incididunt.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="overview-box" style={{backgroundColor:'#ece3f4'}}>
                                            <div className="title">
                                                <h5>Skills</h5>
                                            </div>
                                            <div className="desc pb-30">
                                                {/* ttm-progress-bar */}
                                                {candidate?.skills?.map((data)=>(
                                                <div className="ttm-progress-bar clearfix">
                                                    <h3 className="progressbar-title">{data}</h3>
                                                </div>))}
                                            </div>
                                        </div>
                                        <div className="justify-center">
                                            <button className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor mt-10"
                                                        onClick={handleOffer}>Offer</button>
                                        </div>
                                    </div>
                                </div>{/* row end */}
                            </div>
                        </div>{/* row end */}
                    </div>
                </div>


                {/* action-section */}
                {/* <section className="ttm-row action-section bg-theme-SkinColor text-theme-WhiteColor clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-md-flex align-items-center justify-content-between"> */}
                                    {/* featured-icon-box */}
                                    {/* <div className="featured-icon-box icon-align-before-content style2">
                                        <div className="featured-icon">
                                            <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-white ttm-icon_element-size-xl">
                                                <i className="flaticon flaticon-recruitment-5"></i>
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3>Incredible Recruitment & Staffing Agency</h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>We have over 30 years experience oft Business porro qusquam dol ipsum quia dolor sit amet.</p>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* featured-icon-box end */}
                                    {/* <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white" 
                                    href={'/'}>Hiring Now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* action-section end */}

                
            <Footer/>
                        
            </div>
          )
      }
   }

export default Candidate_details;