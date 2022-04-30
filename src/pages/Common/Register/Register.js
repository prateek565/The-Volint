import React, { Component, useState, useEffect } from 'react';
import Header from '../../../components/layout/Header';
import PageHeader from "../../../components/layout/PageHeader";
import { Footer } from '../../../components/layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { signup } from '../../../services/api.js';
import { Link, useHistory } from 'react-router-dom';
import { Alerterror, Alertsuccess } from '../../../components/layout/Alerts';
import { ContentCutOutlined } from '@mui/icons-material';
import Candidate from './Candidate';
import Company from './Company';

// export class Register extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           candidateOn: "false",
//           employerOn: "false"
//         };
//     }

const Register = ({ setverify, setemail, ifVerified, userValues, companyValues, status, setstatus }) => {

    const history = useHistory();
    
    const [error, setError] = useState(false);
    const [text, setText] = useState("");
    const [success, setSuccess] = useState(false);
    const [term, setTerm] = useState(false);


    return (

        <div className="site-main">
            <div className="ttm-row register-section clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div style={{ backgroundColor: '#7f96fd' }} className="bg-theme-GreyColor ttm-col-bgcolor-yes ttm-bg rounded p-50 p-lg-20">
                                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                                <div className="layer-content">
                                    <div className="text-center mb-20">
                                        <h3>Create An Account</h3>
                                    </div>
                                    <div className="ttm-tabs ttm-tab-style-02">
                                        <Tabs>
                                            <TabList className="tabs">
                                                <Tab className="tab" >
                                                    <a onClick={() => { setstatus('user') }}>
                                                        <i className="flaticon flaticon-research"></i>
                                                        <span>Candidate</span><h5>I am a Candidate</h5>
                                                    </a>
                                                </Tab>
                                                <Tab className="tab">
                                                    <a onClick={() => { setstatus('org') }}>
                                                        <i className="flaticon flaticon-job-search"></i>
                                                        <span>Organization</span><h5>I am an Organization</h5>
                                                    </a>
                                                </Tab>
                                            </TabList>
                                            <div className="content-tab">
                                                <TabPanel>
                                                    {status === 'user' && <Candidate setverify={setverify} setemail={setemail} ifVerified={ifVerified} status={status} userValues={userValues}/>}
                                                </TabPanel>
                                                <TabPanel>
                                                    {status === 'org' && <Company setverify={setverify} setemail={setemail} ifVerified={ifVerified} status={status} companyValues={companyValues}/>}
                                                </TabPanel>
                                            </div>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* login end */}


            <Footer />

        </div>
    )
}

export default Register;