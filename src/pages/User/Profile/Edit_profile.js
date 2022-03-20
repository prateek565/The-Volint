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
import DropDown from '../../../components/Manual/dropdown/DropDown';
import MultipleDropDown from '../../../components/Manual/dropdown/MultipleDropDown';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ProfileDetails = (props) => {

    const styles = theme => ({
        margin: {
            margin: '1.5rem',
        },
        padding: {
            padding: '1.5rem',
        },
    });

    const [user, setUser] = useState([]);
    const location = useLocation();

    const [success, setsuccess] = useState(false);
    const [text, setText] = useState("");
    const [error, seterror] = useState(false);

    useEffect(() => {
        Promise.resolve(userInfo()).then((res) => {
            console.log(res.data);
            setUser(res.data);
        }).catch((e) => {
            console.log({ e });
        })
    }, []);

    const Skills = [
        'Time management',
        'Effective communication',
        'Emotional intelligence',
        'Conflict management',
        'Teamwork skills',
        'Stress management',
        'Problem - solving',
        'Productivity & organization',
        'Critical thinking',
        'Attention to detail',
        'Adaptability',
        'Data analysis',
        'Web analytics ',
        'SEO / SEM',
        'HTML & CSS',
        'Wordpress',
        'Email marketing',
        'Web scraping',
        'CRO and A / B Testing',
        'Data visualization',
        'Search Engine and Keyword Optimization',
        'Project / campaign management',
        'Social media and mobile marketing ',
        'Paid social media advertisements',
        'B2B Marketing',
        'The 4 P - s of Marketing',
        'Consumer Behavior Drivers',
        'Brand management',
        'Creativity',
        'Copywriting',
        'Storytelling',
        'Sales',
        'CMS Tools',
        'Six Sigma techniques',
        'The McKinsey 7s Framework',
        'Porter’s Five Forces',
        'PESTEL ',
        'Emotional Intelligence',
        'Dealing with work-related stress',
        'Motivation',
        'Task delegation',
        'Technological savviness',
        'People management',
        'Business Development',
        'Strategic Management',
        'Negotiation ',
        'Planning',
        'Proposal writing',
        'Problem-solving',
        'Innovation',
        'Charisma',
        'Customer Relationship Management (CRM)',
        'Cold-calling',
        'Negotiation',
        'Public speaking',
        'Closing',
        'Lead generation',
        'Buyer-Responsive selling',
        'Buyer engagement',
        'Product knowledge',
        'Persuasion',
        'Effective communication and sociability',
        'Empathy',
        'Social media/digital communication',
        'Teamwork',
        'Time management',
        'Dreamweaver',
        'Infographics',
        'HTML & CSS',
        'Photo editing ',
        'Typography',
        'Storyboarding',
        'Targeting and marketing through visual communications',
        'Logo creation',
        'Digital printing',
        'Integration of visual communication in social media platforms',
        'Creativity',
        'Attention to detail & aesthetics',
        'Interactive media design',
        'Color sense & theory',
        'Ad design',
        'Word Excel',
        'Powerpoint',
        'Filing and paper management',
        'Data entry',
        'Bookkeeping through Excel or TurboTax',
        'Research and data analysis',
        'Basic knowledge of user interface communication',
        'Technical writing',
        'Cloud networking and file sharing ',
        'Updated curriculum knowledge',
        'Research & Data analysis',
        'Communication',
        'Educational platforms (software like Elearn)',
        'Stress management',
        'Technological & digital literacy',
        'Patience',
        'Critical thinking',
        'Enthusiasm',
        'Motivation',
        'HTML/CSS',
        'CSS preprocessors',
        'Javascript',
        'Wordpress',
        'Graphic User Interfaces (GUI)',
        'Git/Version control (Github, gitlab)',
        'Search Engine Optimization (SEO)',
        'Application Programming Interface (API)',
        'Adobe Photoshop, InDesign',
        'Content Management Systems (CMS)',
        'Testing/Debugging',
        'Responsive design principles',
        'Sql',
        'STATA, SPSS, SAS ',
        'Data Mapping',
        'Entity Relationship Diagrams',
        'Wireframes',
        'Big Data tools ',
        'Microsoft Visio',
        'Agile Business Analysis',
        'Machine learning ',
        'System Context Diagrams',
        'Business Process Modeling',
        'Technical and non-technical communication',

    ]
    const {
        name,
        title,
        email,
        phone,
        address_line_1,
        address_line_2,
        zipcode,
        city,
        state,
        imageUrl,
        skills,
    } = user;

    const values = {
        // Profile-Information
        name,
        email,
        phone,
        title,
        address_line_1,
        address_line_2,
        zipcode,
        city,
        state,
        imageUrl,
        skills
    };

    //seperate function to handle image file
    const handleFile = (e) => {
        let file = e.target.files[0];
        let baseURL = null;
        // Make new FileReader
        let reader = new FileReader();

        // Convert the file to base64 text
        reader.readAsDataURL(file);
        // on reader load somthing...
        reader.onload = () => {
            // Make a fileInfo Object
            baseURL = reader.result;
            setUser({ ...user, imageUrl: baseURL })
        };
    };

    const handleChange = (e) => {
        e.preventDefault();
        const val = e.target.value;
        console.log(values);
        setUser({
            ...state,
            [e.target.name]: val
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        Promise.resolve((editUser(values))).then((res) => {
            console.log(res);
            setsuccess(true);
            setText('Your profile has been edited successfully');
            setTimeout(() => {
                setsuccess(false);
                setText('');
                window.location.reload();
            }, 3000);
        }).catch((e) => {
            seterror(true);
            setText('Your profile cannot be updated');
            setTimeout(() => {
                seterror(false);
                setText('');
            }, 3000);
            console.log({ e });
        })
    }
    const [chosen, setChosen] = useState(false);
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
                                        placeholder="Name"
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
                                <Grid item md={5} sm={10} xs={10} lg={5} style={{ marginRight: '92px' }}>
                                    <MultipleDropDown array={Skills}  type='skills' />
                                </Grid>
                                <Grid item lg={6} xs={12} sm={12} md={6}>
                                    <TextField
                                        margin="dense"
                                        placeholder="Address Line 1"
                                        variant="outlined"
                                        name="address_line_1"
                                        style={{ alignItems: 'left', width: '80%' }}
                                        value={values.address_line_1}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                {/* <Grid item lg={6} xs={12} sm={12} md={6}>
                                    <TextField
                                        margin="dense"
                                        placeholder="Address Line 2"
                                        variant="outlined"
                                        name="address_line_2"
                                        style={{ alignItems: 'left', width: '80%' }}
                                        value={values.address_line_2}
                                        onChange={handleChange}
                                    />
                                </Grid> */}
                                
                                <Grid item lg={6} xs={12} sm={12} md={6}>
                                    <TextField
                                        margin="dense"
                                        placeholder="Zipcode"
                                        variant="outlined"
                                        name="zipcode"
                                        style={{ alignItems: 'left', width: '80%' }}
                                        value={values.zipcode}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item lg={6} xs={12} sm={12} md={6}>
                                    <TextField
                                        margin="dense"
                                        placeholder="City"
                                        variant="outlined"
                                        name="city"
                                        style={{ alignItems: 'left', width: '80%' }}
                                        value={values.city}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item lg={6} xs={12} sm={12} md={6}>
                                    <TextField
                                        margin="dense"
                                        placeholder="State"
                                        variant="outlined"
                                        name="state"
                                        style={{ alignItems: 'left', width: '80%' }}
                                        value={values.state}
                                        onChange={handleChange}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} alignItems="center" item md={6} sm={12} xs={12} lg={6}>
                                <Grid>
                                    {selectedImage && (
                                        <div>
                                            <img alt="not found" width={"250px"} src={imageUrl || URL.createObjectURL(selectedImage)} />
                                            {console.log(URL.createObjectURL(selectedImage))}
                                            <br />
                                            <button onClick={() => {
                                                setChosen(false);
                                                setSelectedImage(null);
                                            }}>Remove</button>
                                        </div>
                                    )}
                                    <br />

                                    <br />
                                    {!chosen && <input
                                        type="file"
                                        name="imageUrl"
                                        onChange={(event) => {
                                            setChosen(true);
                                            console.log(event.target.files[0]);
                                            setSelectedImage(event.target.files[0]);
                                            handleFile(event);
                                        }}
                                    />}
                                </Grid>
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

export default EditProfile;  