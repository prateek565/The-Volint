import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link, useLocation } from 'react-router-dom';
import { acceptApplicant, AcceptedApplicants, acceptOffer, allApplicants, deleteAppliedJob, getIntern, getRejectedIn, myAppliedJobs, myOffers, rejectApplicant, RejectedApplicants } from '../../../services/api';
import TemporaryDrawer from '../../../pages/Common/Message';
import { CircularProgress } from '@mui/material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ApplicantsTabPanel() {

    const [value, setValue] = React.useState(0);
    const [rejected, setrejected] = React.useState([]);
    const [toggle, settoggle] = React.useState(false)
    const [allApplications, setAllApplications] = React.useState([]);
    const [offers, setoffers] = React.useState([])
    const [loading, setloading] = React.useState(true);

    React.useEffect(() => {
    Promise.resolve(myAppliedJobs()).then((res) => {
      console.log(res.data);
      setAllApplications(res.data.response)
      setloading(false);
    }).catch((e) => {
      console.log({ e });
    })
    Promise.resolve(myOffers()).then((res) => {
      console.log(res.data);
      setoffers(res.data)
      setloading(false);
    }).catch((e) => {
      console.log({ e });
    })
    Promise.resolve(getRejectedIn()).then((res) => {
      console.log(res.data);
      rejected(res.data.response)
      setloading(false);
    }).catch((e) => {
      console.log({ e });
    })
    }, [toggle, ]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="All Applications" {...a11yProps(0)} />
                    <Tab label="Accepted In" {...a11yProps(1)} />
                    <Tab label="Rejected In" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {allApplications.length === 0 && <h4>Not Applied for any opportuinty</h4>}
                {allApplications.map((user, index) => (
                    <div className="row">
                        {
                            (loading) && <CircularProgress />
                        }
                        {allApplications &&
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
                                        <button type="button" className='mt-20 mr-20 p-10 font-weight-bold rounded btn-danger' onClick={() => {
                                            Promise.resolve(deleteAppliedJob(intern._id)).then((res) => {
                                                console.log(res);
                                                settoggle(!toggle);
                                            }).catch((e) => {
                                                console.log(e);
                                            })
                                        }}>Delete</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {offers?.length === 0 && <h4>No Accepted Applications</h4>}
                {offers?.map((intern, index) => (
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
                                        <button type="button" className='mt-20 mr-20 p-10 font-weight-bold rounded btn-primary' onClick={() => {
                                            Promise.resolve(acceptOffer(intern._id)).then((res) => {
                                                console.log(res);
                                                settoggle(!toggle);
                                            }).catch((e) => {
                                                console.log(e);
                                            })
                                        }}>Accept</button>
                                    </div>
                                </div>
                            ))
                        }
            </TabPanel>
            <TabPanel value={value} index={2}>
                {rejected.length === 0 && <h4>No Rejected Applications</h4>}
                {rejected &&
                            rejected.map((intern, index) => (
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
                                    </div>
                                </div>
                            ))
                        }
            </TabPanel>
        </Box>
    );
}
