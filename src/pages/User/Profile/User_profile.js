import React, { Component, useState, useEffect } from 'react';
import Header from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { AppBar, Avatar, Box, Button, Card, CardContent, CardHeader, CircularProgress, Dialog, Divider, Grid, IconButton, InputAdornment, List, ListItem, ListItemText, Paper, Slide, TextField, Toolbar, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Rating } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// import { updateProfile } from "../../actions/userActions";
import { Alerterror, Alertsuccess } from '../../../components/layout/Alerts';
import { userInfo, acceptOffer, getResume, myProjects, myOffers, editUser, offerAccept } from '../../../services/api';
import EditProfile from './Edit_profile';


function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

const User_profile = () => {

  const [user, setUser] = useState([]);
  const location = useLocation();
  const [accept, setAccept] = useState(null);
  useEffect(() => {
    const id = location.pathname.substring(19,);
    Promise.resolve(userInfo(id)).then((res) => {
      console.log(res.data);
      setUser(res.data);
    }).catch((e) => {
      console.log({ e });
    })
  }, [])
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openProfile, setOpenProfile] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [resume, setResume] = useState([]);
  useEffect(() => {
    Promise.resolve(getResume()).then((res) => {
      const p = res.data.map((data) => {
        return data.resumeTitle
      })
      setResume(p);
      console.log(p);
    }).catch((e) => {
      console.log({ e });
    })
  }, []);
  const [projects, setprojects] = useState([])
  useEffect(() => {
    Promise.resolve((myProjects())).then((res) => {
      console.log(res.data);
      setprojects(res.data)
    }).catch((e) => {
      console.log({ e });
    })
  }, [accept])
  const [offers, setOffers] = useState([])
  useEffect(() => {
    Promise.resolve((myOffers())).then((res) => {
      console.log(res.data);
      setOffers(res.data)
    }).catch((e) => {
      console.log({ e });
    })
  }, [accept,])

  //   const handleOffer= (e) => {
  //     e.preventDefault();
  //     console.log(e);
  //     Promise.resolve(acceptOffer(e)).then((res) => {
  //         console.log(res);
  //         setTimeout(() => {
  //         }, 3000);
  //     }).catch((e) => {
  //         console.log({ e });
  //     })
  // }     
  return (
    <div className="site-main">
      <Header />

      {/* PageHeader */}
      {/* <PageHeader
                title="Profile"
                breadcrumb="p"
            /> */}
      {/* PageHeader end */}

      <div className="site-main">
        <div className="ttm-row sidebar job-sidebar clearfix" >
          <div className="container">
            <div className="ml-20 mb-20">
              <div className="row">
                <div className="col-1">
                  <Avatar
                    alt="Ira Sahu"
                    src="/static/images/avatar/1.jpg"
                    sx={{
                      '& .MuiAvatar-root': {
                        width: 60,
                        height: 60,
                        ml: -0.5,
                        mr: 1,
                      },
                    }}
                  />
                </div>
                <div className="col-2">
                  <h5>{user.name}</h5>
                  <p>{user.title}</p>
                  <Rating name="read-only" value={user.rating} readOnly />
                </div>
                <div className="col-6 col-lg-7"></div>

                <div className="col-1">
                  <EditProfile/>
                </div>
              </div>
            </div>
            {/* row */}
            <div className="row">
              <div className="col-lg-4 widget-area sidebar-left job_list-widget-area">
                <div className="job_list-widget" style={{ backgroundColor: '#ffc0d0' }}>

                  <aside className="widget job-widget">
                    {/* <h3 className="widget-title"><i className="flaticon flaticon-calendar-1"></i>Date Applied</h3> */}
                    {/* <form id="list1" className="list-filter"> */}
                    <div className="justify-center pt-1">
                      <ul>
                        <li>{`Name: ${user.name}`}</li>
                        <li>{`Email: ${user.email}`}</li>
                        <li>{`Phone: ${user.phone ? user.phone : ""}`}</li>
                        <li>{`Address: ${user.address ? user.address : ""}`}</li>
                      </ul>
                    </div>
                    {/* </form> */}
                  </aside>
                  <aside className="widget job-widget pt-1">
                    {/* <h3 className="widget-title"><i className="flaticon flaticon-calendar-1"></i>Date Applied</h3> */}
                    {/* <form id="list1" className="list-filter"> */}
                    <ul className="mt-10">
                      <li><a href="#projects">Projects</a></li>
                      <li><a href="#resume">Resume</a></li>
                      <li><a href="#offers">Offers</a></li>
                    </ul>
                    {/* </form> */}
                  </aside>
                  {/* <aside className="widget job-widget">
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
                                    </aside> */}
                </div>

                <div className="featuredbox-number pr-30 pr-lg-0 pb-lg-50 pt-md-20">
                  {/* featured-icon-box */}
                  <div className="featured-icon-box icon-align-before-content icon-ver_align-top style4">
                    <div className="featured-icon">
                      <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-grey ttm-icon_element-size-md ttm-icon_element-style-rounded">
                        <i className="ttm-num ti-info"></i>
                      </div>
                    </div>
                    <div className="featured-content ">
                      <div>
                        <h6 style={{ color: 'black' }}>Create an eye-catching Resume</h6>
                      </div>

                    </div>
                  </div>{/* featured-icon-box end */}
                  {/* featured-icon-box */}
                  <div className="featured-icon-box icon-align-before-content icon-ver_align-top style4">
                    <div className="featured-icon">
                      <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-grey ttm-icon_element-size-md ttm-icon_element-style-rounded">
                        <i className="ttm-num ti-info"></i>
                      </div>
                    </div>
                    <div className="featured-content ttm-bgcolor-grey">
                      <div className="">
                        <h6 style={{ color: 'black' }}>Look for your best Project Match</h6>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 content-area">

                <div className="row">
                  <h6 id="projects">Projects</h6>
                  {projects?.map((project) => (
                    <div className="col-12">
                      <div className="featured-imagebox featured-imagebox-candidate" style={{ backgroundColor: '#ffc0d0' }}>

                        <div className="featured-content">
                          <div className="featured-title">
                            <h3>{project?.title}</h3>
                            <p className="mt-2" style={{ color: 'grey' }}>{project.date}</p>
                          </div>
                          <div className="featured-bottom">
                            <div className="view-block">
                              <KeyboardArrowDownIcon
                                id="demo-customized-button"
                                aria-controls={open ? 'demo-customized-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                variant="contained"
                                disableElevation
                                onClick={open ? handleClose : handleClick}
                              ></KeyboardArrowDownIcon>
                            </div>
                            {open &&
                              <div className="mt-10">
                                <p>{project.description}</p>
                                <div style={{ position: 'relative' }}>
                                  <span><CircularProgressWithLabel value={20} /></span>
                                </div>
                                <div >
                                  <Link className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                                       ttm-btn-color-dark mr-20"
                                    exact to={'/job_details'}>Details</Link>
                                </div>
                              </div>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <Divider className="mt-2" />
                  <Link exact to={"/edit_resume"}>
                    <div className="col-lg-12 mt-3">
                      <h6 id="resume">Resume</h6>
                      <div className="featured-imagebox featured-imagebox-candidate" style={{ backgroundColor: '#ffc0d0' }}>

                        <div className="text-size-2">
                          <ul>
                            {resume?.map((cv, index) => (<li>{cv}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Divider className="mt-2" />
                  <h6 id="offers">Offers</h6>
                  {offers?.map((offer) => (
                    <div className="col-12">
                      <div className="featured-imagebox featured-imagebox-candidate" style={{ backgroundColor: '#ffc0d0' }}>

                        <div className="featured-content">
                          <div className="featured-title">
                            <h3>{offer?.title}</h3>
                            <p className="mt-2" style={{ color: 'grey' }}>{offer?.date}</p>
                          </div>
                          <div className="featured-bottom">
                            <div className="view-block">
                              {/* <Link className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                        ttm-btn-color-dark"
                                                        exact to={'/applications'}>View Details</Link> */}
                              <KeyboardArrowDownIcon
                                id="demo-customized-button"
                                aria-controls={open ? 'demo-customized-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                variant="contained"
                                disableElevation
                                onClick={open ? handleClose : handleClick}
                              ></KeyboardArrowDownIcon>
                            </div>
                            {open &&
                              <div className="mt-10">
                                <p>{offer?.description}</p>
                                <div >
                                  <Link className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                                       ttm-btn-color-dark mr-20"
                                    exact to={'/job_details'}>View Details</Link>
                                  <button className="mr-20 p-10 font-weight-bold rounded btn-success" onClick={() => {
                                    Promise.resolve(offerAccept(offer._id)).then((res) => {
                                      // console.log(res);
                                      setAccept(!accept);
                                    }).catch((e) => {
                                      console.log(e);
                                    })
                                  }}> Accept</button>
                                  <button className="mr-20 p-10 font-weight-bold rounded btn-danger" onClick={() => {
                                    Promise.resolve(offerAccept(offer._id)).then((res) => {
                                      // console.log(res);
                                      setAccept(!accept);
                                    }).catch((e) => {
                                      console.log(e);
                                    })
                                  }}> Reject</button>
                                </div>
                              </div>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/*<div className="col-lg-12 mt-3">
                    <h6>Activity</h6>
                    <Card>
                      <p>.</p>
                      <p>.</p>
                      <p>.</p>
                      <p>.</p>
                      <p>.</p>
                      <p>.</p>
                    </Card>
                        </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* row end */}

      <Footer />

    </div>
  )
}

export default User_profile;