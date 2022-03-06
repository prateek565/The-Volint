import React, { Component, useState, useEffect } from 'react';
import Slider from 'react-slick';
import Header from '../../components/layout/Header';
import PageHeader from "../../components/layout/PageHeader";
import { Footer } from '../../components/layout/Footer';
import { Link, useLocation } from 'react-router-dom';
import { getIntern, getResume, jobApply } from '../../services/api';
import { Box, List, ListItem, ListItemText, Menu, MenuItem, Modal, Typography } from '@material-ui/core';
import ActionSection from '../../components/layout/ActionSection';
import {Alerterror, Alertsuccess} from '../../components/layout/Alerts'

const Job_details = () => {

    const [intern, setIntern] = useState([]);
    const [company, setCompany] = useState([]);
    const [question, setquestion] = useState([]);
    const [resume, setresume] = useState([]);
    const [options, setoptions] = useState([]);
    const l = useLocation();
    const internId = l.pathname.substring(13,);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const listOpen = Boolean(anchorEl);
    const [error, setError] = useState(false);
    const [text, setText] = useState("");
    const [success, setsuccess] = useState(false);
    const status= localStorage.getItem("status"); 
    useEffect(() => {
        Promise.resolve(getIntern(internId)).then((res) => {
            setIntern(res.data)
            console.log(res.data);
        }).catch((e) => {
            console.log({ e });
        })
        if(status=="user"){
        Promise.resolve(getResume()).then((res)=>{
            const p = res.data.map((data)=>{
                return data.resumeTitle
            })
            setoptions(p)
        }).catch((e)=>{
            console.log({e});
        })
        }
    }, [])

    const ApplyHandleClick = () => {
        console.log(question, resume);
        Promise.resolve(jobApply({question,resume}, internId)).then((res) => {
            console.log(res.data);
            setsuccess(true);
            setText(res.data)
            setTimeout(() => {
                setOpen(false);
                setsuccess(false)
                setText(false)
            }, 3000);
        }).catch((e) => {
            setError(true);
            console.log(e.response.data.error);
            setText(e.response.data.error);
            setTimeout(() => {
                setOpen(false);
                setError(false)
                setText('')
            }, 3000);
            // alert(e)
        })
    }

    {

        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'auto',

            bgcolor: '#ece3f4',
            border: '2px round #000',
            boxShadow: 24,
            p: 4,
        };
        // const options = [
        //     'Resume_1',
        //     'Resume_2',
        //     'Resume_3',
        //     'Resume_4',
        // ];

        var slick_slider = {
            dots: false,
            arrow: false,
            autoplay: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            rows: 1,

            responsive: [{

                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        };

        const handleClickListItem = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleMenuItemClick = (event, index) => {
            setSelectedIndex(index);
            setAnchorEl(null);
        };

        const handleMenuClose = () => {
            setAnchorEl(null);
        };

        const handleApply = (e) => {
            console.log(e);
        }
        return (

            <div className="site-main">
                <Header />

                {/* PageHeader */}
                <PageHeader
                    title={intern?.name}
                    breadcrumb="job"
                />
                {/* PageHeader end */}


                <div className="ttm-row sidebar job-sidebar clearfix">
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-4 widget-area sidebar-left job_list-widget-area">
                                <div className="job_list-widget" style={{ backgroundColor: '#ffc0d0' }}>
                                    <aside className="widget job-widget">
                                        <h3 className="widget-title"><i className="ti ti-files"></i>Job Informations</h3>
                                        <ul>
                                            <li className="d-flex"><b className="mr-5">Job Type:</b>{intern.type ? intern.type : "-"}</li>
                                            <li className="d-flex"><b className="mr-5">Location:</b>{intern.location ? intern.location : "-"}</li>
                                            <li className="d-flex"><b className="mr-5">Offered Salary:</b>{intern.stipend ? intern.stipend : "-"}</li>
                                            <li className="d-flex"><b className="mr-5">Posted on:</b> {intern.createdAt?.substr(0, 10)}</li>
                                            <li className="d-flex"><b className="mr-5">Experience:</b>{intern.experience ? intern.experience : "-"}</li>
                                            <li className="d-flex"><b className="mr-5">Category:</b>{intern.category ? intern.category : "-"}</li>
                                            <li className="d-flex"><b className="mr-5">Qualification:</b>{intern.qualification ? intern.qualification : "-"}</li>
                                            <li className="d-flex"><b className="mr-5">position:</b>{intern.position ? intern.position : "-"}</li>
                                            <li className="d-flex"><b className="mr-5">no. of candidates hired:</b>{intern.userOnBoarded?.length}</li>
                                        </ul>
                                    </aside>
                                    {/*<aside className="widget form-widget">
                                        <h3 className="widget-title"><i className="ti ti-email"></i>Send Us Message</h3>
                                        <form className="wrap-form">
                                            <label>
                                                <input name="name" type="text" placeholder="Your Name" required="required" />
                                            </label>
                                            <label>
                                                <input name="email" type="text" placeholder="Your Email" required="required" />
                                            </label>
                                            <label>
                                                <textarea name="message" rows="3" placeholder="Message" required="required"></textarea>
                                            </label>
                                            <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor w-100" type="submit">send a message!</button>
                                        </form>
                                    </aside>*/}
                                    <aside className="widget location-widget p-0">
                                        <iframe width="100%" height="350" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26361414.263400003!2d-113.75849480805297!3d36.24080384347216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1578680778274!5m2!1sen!2sin">
                                        </iframe>
                                        <div className="p-20">
                                            <div>
                                                <span className="text-theme-SkinColor">
                                                    <i className="fa fa-map-marker-alt mr-10"></i></span>24 Fifth st, Los Angeles, USA
                                            </div>
                                            <div>
                                                <a href="mailto:info@example.com"><i className="fa fa-envelope mr-10"></i>info@example.com</a>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                            <div className="col-lg-8 content-area">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12" style={{ backgroundColor: '#ffc0d0' }}>
                                        {/* featured-imagebox */}
                                        <div className="featured-imagebox featured-imagebox-job  m-0" style={{ backgroundColor: '#ffc0d0' }}>
                                            <div className="featured-thumbnail">
                                                <img src="https://via.placeholder.com/210x204?text=210x204+job-01.png" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h3><Link exact to={`/job_details/${intern._id}`}>{intern?.title}</Link></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Published on {intern.createdAt?.substr(0, 10)}</p>
                                                </div>
                                                {status==="user" && <div className="view-block">
                                                <button className=" ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                                                onClick={handleOpen}>Apply</button>
                                                </div>}
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>{intern?.location}</span>
                                                        <span><i className="fa fa-filter"></i>{intern?.category}</span>
                                                    </div>
                                                    <div className="job-time ml-0">
                                                        <span className="green">{intern?.type}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="overview-box" style={{ backgroundColor: '#ffc0d0' }}>
                                            <div className="title">
                                                <h5>Job Description :</h5>
                                            </div>
                                            <div className="desc">
                                                {(intern.description) ? <p>{intern.description}</p> : <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                                                    maecenas accumsan lacus vel facilisis.
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                                                maecenas accumsan lacus vel facilisis. ”</p>}
                                            </div>
                                        </div>
                                        <div className="overview-box" style={{ backgroundColor: '#ffc0d0' }}>
                                            <div className="title">
                                                <h5>Required Knowledge and Abilities :</h5>
                                            </div>
                                            <div className="desc">
                                                <ul className="ttm-list ttm-list-style-icon ttm-textcolor-darkgrey">
                                                    {intern.knowledgeNeeded?.length === 0 && <p>No Prerequisites Reuired</p>}{intern.knowledgeNeeded === undefined && <p>No Prerequisites Reuired</p>}
                                                    {intern.knowledgeNeeded?.map((data) => (
                                                        <li>
                                                            <i className="ti ti-check-box"></i>
                                                            <div className="ttm-list-li-content">{data}</div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="overview-box" style={{ backgroundColor: '#ffc0d0' }}>
                                            <div className="title">
                                                <h5>Skills Required</h5>
                                            </div>
                                            <div className="desc">
                                                <ul className="ttm-list ttm-list-style-icon ttm-textcolor-darkgrey">
                                                    {(intern.skills?.length === 0 && <p>No Prerequisites Reuired</p>)}
                                                    {intern.skills?.map((data) => (
                                                        <li>
                                                            <i className="ti ti-check-box"></i>
                                                            <div className="ttm-list-li-content">{data}</div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="justify-center mt-20 mb-60">
                                            <div className="col-lg-12">
                                                <label className="mb-0">
                                                {status=="user" && <button className=" w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                                                        onClick={handleOpen}>Apply</button>}
                                                    <Modal
                                                        open={open}
                                                        onClose={handleClose}
                                                        aria-labelledby="modal-modal-title"
                                                        aria-describedby="modal-modal-description"
                                                    >
                                                        <Box sx={style}>
                                                            {success&&<Alertsuccess text={text}/>}
                                                            {error&&<Alerterror text={text}/>}
                                                            <h2>{intern?.name}</h2>
                                                            <Typography>{intern.description?.slice(0, 50)}</Typography>
                                                            <div className="col-lg-12">
                                                                <label className="mt-2 justify-center">
                                                                    <i className=""></i>
                                                                    {/* <input type="textarea" id="title_apply" placeholder="Why should we hire you?" /> */}
                                                                    <textarea
                                                                        placeholder='Why should we hire you?'
                                                                        rows={5}
                                                                        cols={50}
                                                                        onChange={(e) => { setquestion(e.target.value) }}
                                                                    >
                                                                    </textarea>
                                                                </label>
                                                            </div>
                                                            <div>
                                                                <List
                                                                    component="nav"
                                                                    aria-label="Device settings"
                                                                    sx={{ bgcolor: 'background.paper' }}
                                                                >
                                                                    <ListItem
                                                                        button
                                                                        id="lock-button"
                                                                        aria-haspopup="listbox"
                                                                        aria-controls="lock-menu"
                                                                        aria-label="Select Resume"
                                                                        aria-expanded={listOpen ? 'true' : undefined}
                                                                        onClick={handleClickListItem}
                                                                    >
                                                                        <ListItemText
                                                                            primary="Select Resume"
                                                                            secondary={options[selectedIndex]}
                                                                            onClick={(e)=>{setresume(options[selectedIndex])}}
                                                                        />
                                                                    </ListItem>
                                                                </List>
                                                                <Menu
                                                                    id="lock-menu"
                                                                    anchorEl={anchorEl}
                                                                    open={listOpen}
                                                                    onClick={handleMenuClose}
                                                                    MenuListProps={{
                                                                        'aria-labelledby': 'lock-button',
                                                                        role: 'listbox',
                                                                    }}
                                                                >
                                                                    {options.map((name, index) => (
                                                                        <MenuItem
                                                                            key={name}
                                                                            selected={index === selectedIndex}
                                                                            onClick={(event) => handleMenuItemClick(event, index)}
                                                                        >
                                                                            {name}
                                                                        </MenuItem>
                                                                    ))}
                                                                    <Link exact to={'/resume'}>
                                                                        <MenuItem
                                                                        >
                                                                         <i className="fa fa-plus mr-2"></i><span>Add Resume</span>
                                                                        </MenuItem>
                                                                    </Link>
                                                                </Menu>
                                                            </div>
                                                            <button onClick={ApplyHandleClick} className=" w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                                                            >Apply</button>
                                                            {/* <Typography id="modal-modal-title" variant="h6" component="h2">

                                                                  </Menu>
                                                                </div>
                                                                <button 
                                                                type="submit"
                                                                className=" w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" 
                                                                onClick={handleClose}
                                                                 >Apply</button>
                                                       {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                                                         Text in a modal
                                                       </Typography>
                                                       <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                           Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                                       </Typography> */}
                                                        </Box>
                                                    </Modal>
                                                </label >
                                            </div >
                                        </div >
                                    </div >
                                </div >
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h5>Related Jobs :</h5>
                                    </div>
                                </div>
                                <Slider className="row slick_slider slick-arrows-style2 mb_15" {...slick_slider} vertical={true} slidesToShow={1} rows={2} arrows={true}>
                                    <div className="col-lg-12 col-md-12">
                                        {/* featured-imagebox */}
                                        <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                            <div className="featured-thumbnail">
                                                <img src="https://via.placeholder.com/210x204?text=210x204+job-06.png" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h3><Link to='/job_details'>Vacancy For the Human Resource</Link></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Published 2Days Ago.</p>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>California</span>
                                                        <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                                    </div>
                                                    <div className="job-time">
                                                        <span className="blue">part time</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        {/* featured-imagebox */}
                                        <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                            <div className="featured-thumbnail">
                                                <img src="https://via.placeholder.com/210x204?text=210x204+job-02.png" />
                                                <div className="required-tag">Urgent</div>
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h3><Link to='/job_details'>Vacancy For the Business Analyst</Link></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Published 2Days Ago.</p>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>California</span>
                                                        <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                                    </div>
                                                    <div className="job-time">
                                                        <span className="danger-color">part time</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        {/* featured-imagebox */}
                                        <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                            <div className="featured-thumbnail">
                                                <img src="https://via.placeholder.com/210x204?text=210x204+job-03.png" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h3><Link to='/job_details'>Opening For Social Media Manager </Link> </h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Published 2Days Ago.</p>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>California</span>
                                                        <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                                    </div>
                                                    <div className="job-time">
                                                        <span className="deep-orange">full time</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        {/* featured-imagebox */}
                                        <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                            <div className="featured-thumbnail">
                                                <img src="https://via.placeholder.com/210x204?text=210x204+job-04.png" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h3><Link to='/job_details'><a href={'/job_details'}>Opening For The Content Creator</a></Link> </h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Published 2Days Ago.</p>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>California</span>
                                                        <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                                    </div>
                                                    <div className="job-time">
                                                        <span className="green">full time</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                </Slider>{/* row end */}
                            </div >
                        </div > {/* row end */}
                    </div >
                </div >


                {/* action-section */}

                <ActionSection />
                {/* action-section end */}


                < Footer />

            </div >
        );
    }

}


export default Job_details;
