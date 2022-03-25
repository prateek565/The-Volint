import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link, useLocation } from 'react-router-dom';
import { acceptApplicant, AcceptedApplicants, allApplicants, getIntern, rejectApplicant, RejectedApplicants } from '../../../services/api';
import TemporaryDrawer from '../../../pages/Common/Message';

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

export default function ApplicantsTabPanelTabPanel() {

    const [value, setValue] = React.useState(0);
    const [allcandidates, setallcandidates] = React.useState([]);
    const [accepted, setaccepted] = React.useState([]);
    const [rejected, setrejected] = React.useState([]);
    const [toggle, settoggle] = React.useState(false)

    const location = useLocation();
    let id = location.pathname;
    id = id.split('/id=')[1];
    console.log(id);
    React.useEffect(() => {
        Promise.resolve(allApplicants(id)).then((res) => {
            console.log(res.data);
            setallcandidates(res.data)
        }).catch((e) => {
            console.log({ e });
        })
        Promise.resolve(getIntern(id)).then((res) => {
            console.log(res.data);
        }).catch((e) => {
            console.log({ e });
        })
        Promise.resolve(AcceptedApplicants(id)).then((res) => {
            console.log(res.data);
            setaccepted(res.data)
        }).catch((e) => {
            console.log({ e });
        })
        Promise.resolve(RejectedApplicants(id)).then((res) => {
            console.log(res.data);
            setrejected(res.data)
        }).catch((e) => {
            console.log({ e });
        })
    }, [toggle,]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="All Applicants" {...a11yProps(0)} />
                    <Tab label="Accepted" {...a11yProps(1)} />
                    <Tab label="Rejected" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {allcandidates.length === 0 && <h4>No Applicants</h4>}
                {allcandidates.map((user, index) => (
                    <div className="col-lg-12">
                        <div className="featured-imagebox featured-imagebox-candidate" style={{ backgroundColor: 'rgb(236, 215, 255)' }}>
                            <div className="featured-thumbnail">
                                <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" />
                            </div>
                            <div className="featured-content">
                                <div className="featured-title">
                                    <Link to={`/candidate_details/${user._id}`}><h3>{(user) && user.name}</h3></Link>
                                </div>
                                <div className="featured-bottom">
                                    <div className="job-skill">
                                        {user?.skills?.map(skill => (
                                            <span className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                    <div className="view-block">
                                        <TemporaryDrawer name={user?.name} key={user?._id} id={user?._id} />
                                    </div>
                                    <button onClick={() => {
                                        Promise.resolve(acceptApplicant(id, user._id)).then((res) => {
                                            settoggle(!toggle);
                                            console.log(res.data);
                                        }).catch((e) => { console.log({ e }); })
                                    }} className="bg-primary p-5 rounded mr-5 text-white">Accept</button>
                                    <button onClick={() => {
                                        Promise.resolve(rejectApplicant(id, user._id)).then((res) => {
                                            settoggle(!toggle);
                                        }).catch((e) => { console.log({ e }); })
                                    }} className="bg-danger p-5 rounded text-white">Reject</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {accepted.length === 0 && <h4>No Accepted Applicants</h4>}
                {accepted.map((user, index) => (
                    <div className="col-lg-12">
                        <div className="featured-imagebox featured-imagebox-candidate" style={{ backgroundColor: 'rgb(236, 215, 255)' }}>
                            <div className="featured-thumbnail">
                                <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" />
                            </div>
                            <div className="featured-content">
                                <div className="featured-title">
                                    <Link to={`/candidate_details/${user._id}`}><h3>{(user) && user.name}</h3></Link>
                                </div>
                                <div className="featured-bottom">
                                    <div className="job-skill">
                                        {user?.skills?.map(skill => (
                                            <span className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                    <div className="view-block">
                                        <TemporaryDrawer name={user?.name} key={user?._id} id={user?._id} />
                                    </div>
                                    <button onClick={() => {
                                        Promise.resolve(rejectApplicant(id, user._id)).then((res) => {
                                            settoggle(!toggle);
                                        }).catch((e) => { console.log({ e }); })
                                    }} className="bg-danger p-5 rounded text-white">Remove Applicant</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {rejected.length === 0 && <h4>No Rejected Applicants</h4>}
                {rejected.map((user, index) => (
                    <div className="col-lg-12">
                        <div className="featured-imagebox featured-imagebox-candidate" style={{ backgroundColor: 'rgb(236, 215, 255)' }}>
                            <div className="featured-thumbnail">
                                <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" />
                            </div>
                            <div className="featured-content">
                                <div className="featured-title">
                                    <Link to={`/candidate_details/${user._id}`}><h3>{(user) && user.name}</h3></Link>
                                </div>
                                <div className="featured-bottom">
                                    <div className="job-skill">
                                        {user?.skills?.map(skill => (
                                            <span className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                    <div className="view-block">
                                        <TemporaryDrawer name={user?.name} key={user?._id} id={user?._id} />
                                    </div>
                                    <button onClick={() => {
                                        Promise.resolve(acceptApplicant(id, user._id)).then((res) => {
                                            settoggle(!toggle);
                                            console.log(res.data);
                                        }).catch((e) => { console.log({ e }); })
                                    }} className="bg-primary p-5 rounded mr-5 text-white">Accept Applicant</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </TabPanel>
        </Box>
    );
}
