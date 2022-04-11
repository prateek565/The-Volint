import React, { Component, useState, useEffect } from 'react';
import Header from '../../components/layout/Header';
import PageHeader from "../../components/layout/PageHeader";
import { Footer } from '../../components/layout/Footer';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { AppBar, Avatar, Box, Button, Card, CardContent, CardHeader, CircularProgress, Dialog, Divider, Grid, IconButton, InputAdornment, List, ListItem, ListItemText, Paper, Slide, TextField, Toolbar, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Rating } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { updateProfile } from "../../actions/userActions";
import { Alerterror, Alertsuccess } from '../../components/layout/Alerts';
import { companyInfo, myAppliedJobs, companyInterns, myProjects, myOffers, editCompany, editComapny } from '../../services/api';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { FaHandPointUp } from 'react-icons/fa';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const styles = theme => ({
  margin: {
    margin: '1.5rem',
  },
  padding: {
    padding: '1.5rem',
  },
});

const ProfileDetails = (props) => {
  const [company, setCompany] = useState([]);
  const l = useLocation();
  const id = l.pathname.substring(19,);
  useEffect(() => {
    
    Promise.resolve(companyInfo(id)).then((res) => {
      console.log(res.data);
      setCompany(res.data);
    }).catch((e) => {
      console.log({ e });
    })
  }, [])
  const [companyEdit, setCompanyEdit] = useState({
    name: company.name,
    email: company.email,
    phone: company.phone,
    title: company.title,
    description: company.description,
    city: company.city,
  });
  
  const {
    name,
    title,
    email,
    phone,
    description,
    city,
  } = companyEdit;
  const values = {

    // Profile-Information
    name: company.name,
    email: company.email,
    phone: company.phone,
    title: company.title,
    description: company.description,
    // Education Information


    // Project Information...


    // Experience Information


    // Extra Information

  };
  const handleFile = (e) => {
    console.log(e.target.files, "$$$");
    console.log(e.target.files[0], "&&&");
  }
  
  const handleChange = (e) => {
    e.preventDefault();
    
    const val = e.target.value;
    console.log(e.target.name, val);
    setCompany({
      [e.target.name]: val
    });
  };
  
  console.log(values);
  const [success, setsuccess]= useState(false);
  const [text, setText]= useState("");
  const [error, seterror]= useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    Promise.resolve((editCompany(values, id))).then((res)=>{
      console.log(res);
      setsuccess(true);
      setText('Your profile has been edited successfully');
      setTimeout(() => {
        setsuccess(false);
        setText('');
        window.location.reload();
      }, 3000);
    }).catch((e)=>{
      seterror(true);
      setText('Your profile cannot be updated');
      setTimeout(() => {
        seterror(false);
        setText('');
      }, 3000);
      console.log({e});
    })
  }
  const [chosen, setChosen]= useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const classes = styles();
  // const handleSubmit = (e) => {
  //   console.log("e");
  //   console.log(values);
  //   Promise.resolve((PostResume(values))).then((res)=>{
  //     console.log(res);
  //   }).catch((e)=>{
  //     console.log(e);
  //   })
  // }
  return (
    <>
      <Paper className="mt-120" >
       {success && <Alertsuccess text={text} />}
       {error && <Alerterror text={text} />}
        <Grid item xs={12} lg={12}>
          <h3>Edit Profile</h3>
        </Grid>
        <CardContent>
          <div className={classes.margin}>
            <div className='row'>
              <Grid container spacing={2} alignItems="center" item md={6} sm={12} xs={12} lg={6}>
                <Grid item md={6} sm={12} xs={12} lg={6}>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    name="name"
                    placeholder="Company Name"
                    style={{ width: '80%' }}
                    value={values.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={6} sm={12} xs={12} lg={6}>
                  <TextField
                    margin="dense"
                    placeholder="Title"
                    variant="outlined"
                    style={{ width: '80%' }}
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item lg={6} xs={12} sm={12} md={6}>
                  <TextField
                    margin="dense"
                    placeholder="Phone Number"
                    variant="outlined"
                    name="phone"
                    style={{ alignItems: 'left', width: '80%' }}
                    value={values.phone}
                    onChange={handleChange}
                    
                  />
                </Grid>
                <Grid item lg={12} xs={12} sm={12} md={12}>
                  <textarea
                    margin="dense"
                    placeholder="Company Description"
                    variant="outlined"
                    name="description"
                    rows={3}
                    cols={70}
                    value={values.description}
                    onChange={handleChange}
                    
                  />
                </Grid>
                
              </Grid>
              <Grid container spacing={2} alignItems="center" item md={6} sm={12} xs={12} lg={6}>
                <Grid item md={6} sm={12} xs={12} lg={6}>
                {selectedImage && (
                  <div>
                  <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                  {console.log(URL.createObjectURL(selectedImage))}
                  <br />
                  <button onClick={()=>{setChosen(false);
                     setSelectedImage(null);}}>Remove</button>
                  </div>
                )}
                <br />
               
                <br /> 
                {!chosen && <input
                  type="file"
                  name="myImage"
                  onChange={(event) => {
                    setChosen(true);
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                  }}
                />}
                </Grid>
                {/*<Grid>
              <div className="mt-10">
                 <button 
                   variant="contained"
                   type="submit"
                   className="ttm-btn ttm-btn-style-fill ttm-btn-color-skincolor">
                   Upload profile pic
                  </button>
              </div>
            </Grid>*/}
              </Grid>
            </div>
          </div>
        </CardContent>
      </Paper>
      <div className=" justify-center mt-10">
        <button
          variant="contained"
          type="submit"
          className="ttm-btn ttm-btn-style-fill ttm-btn-color-skincolor"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
      {/*<Paper className="mt-50">
    <Grid item xs={12} lg={12}>
      <h3>Edit Resume</h3>
      <CardContent>
        <ul>
         <li>Resume_1</li>
        </ul>
      </CardContent>
      </Grid>
      </Paper>*/}
    </>
  );
}
const EditProfile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
        ttm-btn-color-dark mr-20"
        onClick={handleOpen}>Edit Profile</button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        {/*<AppBar sx={{position: 'relative', backgroundColor:'pink'}}>*/}
        <Toolbar>
          <IconButton
            edge="start"

            color='#44b700'
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} className="featured-title" variant="h6" component="div">
            Edit Profile
          </Typography>
        </Toolbar>

        {/*</AppBar>*/}
        <div className="App mt-3">
          <div className="container col-lg-10 mx-auto text-center  mb-4">
            <ProfileDetails />
          </div>
        </div>
      </Dialog>
    </div>
  );
}

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

const CompanyProfile = () => {

  const [company, setCompany] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const id = location.pathname.substring(19,);
    Promise.resolve(companyInfo(id)).then((res) => {
      console.log(res);
      setCompany(res.data);
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
  
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    Promise.resolve(companyInterns()).then((res) => {
      console.log(res.data.intern);
      setJobs(res.data.intern);
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
  }, [])
  // const [offers, setOffers] = useState([])
  // useEffect(() => {
  //   Promise.resolve((myOffers())).then((res) => {
  //     console.log(res.data);
  //     setOffers(res.data)
  //   }).catch((e) => {
  //     console.log({ e });
  //   })
  // }, [])

  const [accepted, setAccepted]= useState(false)
  const acceptOffer = () => {
       setAccepted(true);
  }
        
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
                  <h5>{company.name}</h5>
                  <p>{company.title}</p>
                </div>
                <div className="col-6 col-lg-7"></div>

                <div className="col-1">
                  <EditProfile />
                </div>
              </div>
            </div>
            {/* row */}
            <div className="row">
              <div className="col-lg-4 widget-area sidebar-left job_list-widget-area">
                <div className="job_list-widget" style={{ backgroundColor: 'rgb(236, 215, 255)' }}>

                 <aside className="widget job-widget">
                    {/* <h3 className="widget-title"><i className="flaticon flaticon-calendar-1"></i>Date Applied</h3> */}
                    {/* <form id="list1" className="list-filter"> */}
                    <div className="justify-center pt-1">
                      <ul>
                        <li>{`Company Name: ${company.title}`}</li>
                        <li>{`User Name: ${company.name}`}</li>
                        <li>{`Email: ${company.email}`}</li>
                        <li>{`Phone: ${company.phone ? company.phone : ""}`}</li>
                        {/*<li>{`Address: ${user.address ? user.address : ""}`}</li>*/}
                      </ul>
                    </div>
                    {/* </form> */}
                  </aside>
                 <aside className="widget job-widget pt-1">
                  {/* <h3 className="widget-title"><i className="flaticon flaticon-calendar-1"></i>Date Applied</h3> */}
                  {/* <form id="list1" className="list-filter"> */}
                      <ul className="mt-10">
                        <li><a href= "#projects">Projects</a></li>
                        <li><a href="#posted">Posted Jobs</a></li>
                        <li><a href= "#offers">Offers</a></li>
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
                        <h6 style={{ color: 'black' }}>Post details of your project</h6>
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
                        <h6 style={{ color: 'black' }}>Look for your best candidate match</h6>
                      </div>

                    </div>
                  </div>
                 </div>
                </div>
              <div className="col-lg-8 content-area">
              <div className="row">
                <div className="col-12">
                 <div className="overview-box" style={{backgroundColor:'#ece3f4'}}>
                  <div className="title">
                      <h6>Description</h6>
                  </div>
                  <div className="desc">
                      {company?.description? <p>{company?.description}</p> : <p className='text-danger'>Add Description <FaHandPointUp className='mb-5' size={'1.2rem'}/></p>}
                  </div>
                 </div>
                </div>
              </div>
              <Divider />
                <div className="row mt-10">
                  
                  <Divider className="mt-2" />
                  <div className="col-lg-12 mt-3">
                    <h6 id="posted">Posted Jobs</h6>
                    
                        <ul>
                         {jobs?.map((job, index) => (
                        <div className="featured-imagebox featured-imagebox-candidate" style={{ backgroundColor: 'rgb(236, 215, 255)' }}>
                         <div className="featured-content">
                           <div className="featured-title">
                             <Link to={`/job_details/${job._id}`} style={{textDecoration: 'none'}}><h3>{job.title}</h3></Link>
                             <p>{job.category}</p>
                             <p className="mt-2" style={{ color: 'grey' }}>{(job.updatedAt).slice(0,10)}</p>
                           </div>
                           <div className="featured-bottom">
                             <div className="view-block">
                               {/* <Link className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                           ttm-btn-color-dark"
                                                           exact to={'/applicants'}>View Details</Link> */}
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
                                 <p>{job.description.slice(0,100)}</p>
                                 <div >
                                   <Link className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                                          ttm-btn-color-dark mr-20"
                                     exact to={`/edit_job/${job._id}`}>Edit Project</Link>
                                     {/* <Link className="ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-border 
                                                          ttm-btn-color-dark mr-20"
                                     exact to={`/company/projects`}>View Details</Link> */}
                                 </div>
                               </div>
                             }
                           </div>
                         </div>
                       </div>))}
                        </ul>
                      </div>
                  <div className="col-12">
                    
                  </div>
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

export default CompanyProfile;